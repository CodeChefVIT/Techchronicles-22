const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".vertical-menu-icon-container");
const menuIconBar1 = document.querySelector(".bar-1");
const menuIconBar2 = document.querySelector(".bar-2");
const menuIconBar3 = document.querySelector(".bar-3");
const sidebarMenu = document.querySelector(".sidebar-sections-container");
const sidebarMenuSpan = document.querySelectorAll(".sidebar-sections-span");
const sidebarMenuLi = document.querySelectorAll(".sidebar-sections-li");
const section = document.querySelectorAll(".section");
const codechefImg = document.querySelector(".sidebarImg");
const verticalMenu = document.querySelector(".vertical-menu-icon-container");
const socials = document.querySelector(".socials");

// For open/close of sidebar menu

menuIcon.addEventListener("click", (e) => {
    menuIconBar1.classList.toggle("bar-1-change");
    menuIconBar2.classList.toggle("bar-2-change");
    menuIconBar3.classList.toggle("bar-3-change");
    sidebar.classList.toggle("sidebar-change");
    // codechefImg.classList.toggle("hide-it");
    sidebarMenu.classList.toggle("sidebar-sections-container-change");
    verticalMenu.classList.toggle("vertical-menu-icon-container-change");
});

// Close the menu on click on screen

section.forEach((item) => {
    item.addEventListener("click", (e) => {
        let screenheight = (35 / 100) * window.screen.height;
        if (e.clientY > screenheight && e.clientY > 100) {
            menuIconBar2.classList.remove("bar-2-change");
            menuIconBar3.classList.remove("bar-3-change");
            menuIconBar1.classList.remove("bar-1-change");
            sidebar.classList.remove("sidebar-change");
            setTimeout(() => {
                sidebarMenu.classList.remove(
                    "sidebar-sections-container-change"
                );
            }, 300);
        }
    });
});

// Close the menu omn scroll

document.addEventListener("scroll", (e) => {
    menuIconBar2.classList.remove("bar-2-change");
    menuIconBar3.classList.remove("bar-3-change");
    menuIconBar1.classList.remove("bar-1-change");
    sidebar.classList.remove("sidebar-change");
    setTimeout(() => {
        sidebarMenu.classList.remove("sidebar-sections-container-change");
    }, 300);
});
// For hover effect on extended sidebar menu options

sidebarMenuSpan.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        item.classList.toggle("sidebar-sections-span-change");
    });
    item.addEventListener("mouseleave", (e) => {
        item.classList.toggle("sidebar-sections-span-change");
    });
    item.addEventListener("click", (e) => {
        menuIconBar1.classList.toggle("bar-1-change");
        menuIconBar2.classList.toggle("bar-2-change");
        menuIconBar3.classList.toggle("bar-3-change");
        sidebar.classList.toggle("sidebar-change");
        setTimeout(() => {
            sidebarMenu.classList.toggle("sidebar-sections-container-change");

            verticalMenu.classList.toggle(
                "vertical-menu-icon-container-change"
            );
        }, 300);
    });
});
