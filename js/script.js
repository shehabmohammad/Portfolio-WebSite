// Personal Portfoli Website From Easy Toturials

// -------------------------About Section Start-------------------------
// Cashing The Elements
let tabLink = document.querySelectorAll(".tab-links");
let tabLinkArray = Array.from(tabLink);
let tabContents = document.querySelectorAll(".tab-contents");
let tabContentsArray = Array.from(tabContents);

tabLinkArray.forEach ((ele) => {
    ele.addEventListener ("click", (e) => {
        // Removing The Active Class From All The Tab Links
        tabLinkArray.forEach ( (ele) => {
            ele.classList.remove("active");
        });
        // Adding The Active Class On The Clicked Tab Link
        e.currentTarget.classList.add("active");
        // Adding The Display NONE To All The Tabs Content
        tabContents.forEach ( (tab) => {
            tab.style.display = "none";
        });
        // Removing The Display NONE From The Selected Tab Content
        document.querySelector(e.currentTarget.dataset.showlink).style.display = "block";
    });
});
// -------------------------About Section End-------------------------