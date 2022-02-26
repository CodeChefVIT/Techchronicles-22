const mouseCursor = document.querySelector(".cursor");
const mouseCursorInnerCircle = document.querySelector(".inner-circle");
const hoverChange = document.querySelectorAll(".hover-change");
const RegBtn = document.querySelector(".Regbtn");
const myForm = document.querySelector("#myForm");

document.addEventListener("mousemove", (e) => {
    mouseCursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});
document.addEventListener("mousemove", (e) => {
    mouseCursorInnerCircle.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
    );
});

hoverChange.forEach((item) => {
    item.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-change");
        mouseCursorInnerCircle.classList.add("inner-circle-change");
        mouseCursor.classList.remove("cursor");
        mouseCursorInnerCircle.classList.remove("inner-circle");
    });
});
hoverChange.forEach((item) => {
    item.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-change");
        mouseCursorInnerCircle.classList.remove("inner-circle-change");
        mouseCursor.classList.add("cursor");
        mouseCursorInnerCircle.classList.add("inner-circle");
    });
});

// For animatin screens to another section
// options = { rootMargin: "0px", threshold: "0" };

// const home = document.querySelector("#About");

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     window.scrollto(1000, 0);
// }, options);

// observer.observe(home);

// if (myForm) {
//     myForm.addEventListener("submit", function (e) {
//         submitForm(e, this);
//     });
// }

// async function submitForm(e, form) {
//     e.preventDefault();

//     const btnSubmit = document.querySelector("#btnSubmit");
//     btnSubmit.disabled = true;
//     setTimeout(() => (btnSubmit.disabled = false), 2000);

//     const jsonFormData = buildJsonFormData(form);

//     // const headers = Headers();

//     const response = await fetch.performPostHttpRequest(
//         "https://techchronicles2.herokuapp.com/",
//         headers,
//         jsonFormData
//     );
//     console.log(response);

//     if (response) {
//         window.location = `/success.html?name = ${response.name}&phone_number=${response.phone_number}&college=${response.college}&email=${response.email}&draft=${response.draft}`;
//     } else alert(`An error occured.`);
// }

// function buildJsonFormData(form) {
//     const jsonFormData = {};
//     for (const pair of new FormData(form)) {
//         jsonFormData[pair[0]] = pair[1];
//     }
//     return jsonFormData;
// }

// async function performPostHttpRequest(fetchLink, headers, body) {
//     if (!fetchLink || !headers || !body) {
//         throw new Error("One or more POST requests parameters was not passed.");
//     }
//     try {
//         const rawResponse = await fetch(fetchLink, {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(body),
//         });
//         const content = await rawResponse.json();
//         return content;
//     } catch (err) {
//         console.error(`Error at fetch POST : ${err}`);
//         throw err;
//     }
// }

myForm.addEventListener("submit", handleSubmit);

// Validation

function formValidation() {
    var validation = true;
    // validation &= checkForm();
    validation &= ValidateEmail();
    validation &= ValidatePhoneNo();
    validation &= formSuccess();
    window.location.replace("#Submit");
}

function formSuccess() {
    if (ValidateEmail() && ValidatePhoneNo()) {
        alert("Form submitted succesfully");
        return true;
    }
}

function checkForm() {
    let NameVal = document.forms["contactForm"]["name"].value;
    let CollegeVal = document.forms["contactForm"]["college"].value;

    if (NameVal == "") {
        alert("Enter First Name");
        return false;
    } else {
        return true;
    }

    if (CollegeVal == "") {
        alert("Enter college name");
        return false;
    } else {
        return true;
    }
}

function ValidateEmail() {
    let Regex = /^([a-zA-Z0–9_\-\.]+)@([a-zA-Z0–9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    let EmailVal = document.forms["contactForm"]["email"].value;
    if (EmailVal.match(Regex)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function ValidatePhoneNo() {
    let PhoneRegex = /^\+[1-9]{1}[0-9]{3,14}$/;

    let PhoneVal = document.forms["contactForm"]["phone_number"].value;
    if (PhoneVal.match(PhoneRegex)) {
        return true;
    } else {
        alert("Enter a Valid phone number");
        return false;
    }
}

if (formSuccess) {
    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());
        console.log(value);

        var http = new XMLHttpRequest();
        var url = "https://techchronicles2.herokuapp.com/";

        http.open("POST", url, true);

        http.setRequestHeader("Content-type", "application/json");

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        };
        http.send(JSON.stringify(value));
        window.location.replace("#Submit");
    }
}
