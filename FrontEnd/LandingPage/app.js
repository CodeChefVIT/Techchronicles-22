const mouseCursor = document.querySelector(".cursor");
const mouseCursorInnerCircle = document.querySelector(".inner-circle");
const hoverChange = document.querySelectorAll(".hover-change");
const RegBtn = document.querySelector(".Regbtn");
const myForm = document.querySelector("#myForm");
const modalText = document.querySelector(".modal_text");
const modal = document.querySelector("#modal");
const SubmitBtn = document.querySelector(".submit-btn");
const ChangeBtn = document.querySelector(".modal__button");
const darkBg = document.querySelector(".black-bg");

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

SubmitBtn.addEventListener("click", () => {
    let EmailVal = document.forms["contactForm"]["email"].value;
    let PhoneVal = document.forms["contactForm"]["phone_number"].value;
    let NameVal = document.forms["contactForm"]["name"].value;
    let CollegeVal = document.forms["contactForm"]["college"].value;
    if (
        !(EmailVal == "") &&
        !(PhoneVal == "") &&
        !(NameVal == "") &&
        !(CollegeVal == "")
    ) {
        modal.style.display = "flex";
        darkBg.style.display = "block";
    }
});

ChangeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    darkBg.style.display = "none";
});
// Validation

function formValidation() {
    var validation = true;
    // validation &= formSuccess();
    validation &= ValidateEmail;
    validation &= ValidatePhoneNo;
    validation &= Draft;
    // validation &= checkForm;
    window.location.replace("#Submit");
}

// function EmptyValidation() {
//     //   EmailVal = document.forms["contactForm"]["email"].value;
//     //    PhoneVal = document.forms["contactForm"]["phone_number"].value;
//     if (EmailVal == "") {
//         modalText.innerText = "Fill all details!";
//         return false;
//     } else if (PhoneVal == "") {
//         modalText.innerText = "Fill all details!";
//         return false;
//     } else if (NameVal == "") {
//         modalText.innerText = "Fill all details!";
//         return false;
//     }
// }

function formSuccess() {
    if (ValidateEmail() && ValidatePhoneNo() && Draft()) {
        // alert("Form submitted succesfully");
        return true;
    } else {
        // alert("Check details!!");
        return false;
    }
}

function checkForm() {
    let NameVal = document.forms["contactForm"]["name"].value;
    let CollegeVal = document.forms["contactForm"]["college"].value;

    if (NameVal == "") {
        // alert("Enter First Name");
        modalText.innerText = "Enter First Name";
        return false;
    } else {
        return true;
    }

    if (CollegeVal == "") {
        // alert("Enter college name");
        modalText.innerText = "Enter college name";
        return false;
    } else {
        return true;
    }
}

function ValidateEmail() {
    let Regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let EmailVal = document.forms["contactForm"]["email"].value;
    if (EmailVal.match(Regex)) {
        return true;
    } else {
        modalText.innerText = "You have entered an invalid email address!";
        return false;
    }
}
function ValidatePhoneNo() {
    let PhoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

    let PhoneVal = document.forms["contactForm"]["phone_number"].value;
    if (PhoneVal.match(PhoneRegex)) {
        return true;
    } else {
        // alert("Enter a Valid phone number");
        modalText.innerText = "Enter a Valid phone number";
        return false;
    }
}

function Draft() {
    let submitRegex =
        /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;
    let draft = document.forms["contactForm"]["draft"].value;
    if (draft.match(submitRegex)) {
        return true;
    } else {
        // alert("Enter a valid url!");
        modalText.innerText = "Enter a valid url!";
        return false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    // console.log(value);

    var http = new XMLHttpRequest();
    var url = "https://techchronicles2.herokuapp.com/";

    if (formSuccess()) {
        http.open("POST", url, true);

        http.setRequestHeader("Content-type", "application/json");

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                modalText.innerText = http.responseText.slice(1, -1);
            } else {
                modalText.innerText = "Try Again later :(";
            }
        };
        http.send(JSON.stringify(value));
        window.location.replace("#Submit");
    }
}
