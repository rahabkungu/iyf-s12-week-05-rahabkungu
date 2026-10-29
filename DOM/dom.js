const check = (label, ok) => console.log(`${ok ? "check" : "x"} ${label}`);
// step 1: task 9.1
const heading = document.querySelector("h1");
check("h1 element", heading);

const contentElements = document.querySelectorAll(".content")
check("elements with class 'content'", contentElements.length > 0);

const contactForm = document.getElementById("contact-form");
check("contact-form", contactForm);

const emailInput = document.querySelector("#contact-form input[type='email']");
check("email input inside form", emailInput);

const navListItems = document.querySelectorAll("nav ul li");
check("nav list items", navListItems.length > 0);

const firstNavLink = document.querySelector("nav ul li a");
check("first .nav-link", firstNavLink);

const lastArticleParagraph = document.querySelector("article p:last-of-type");
check("last paragraph in article", lastArticleParagraph);

const submitButton = document.querySelector("button[type='submit']");
check("submit button", submitButton);

const articleTitle = document.querySelector("article h2.title");
check("article h2 title", articleTitle);

const footer = document.querySelector("footer");
check("footer element", footer);

const nonExistent = document.querySelector(".does-not-exist");
console.log("Non-existent element result:", nonExistent);

const navTexts = [...navListItems].map(item => item.textContent);
console.log("Nav item texts array:", navTexts);

// Step 2: task 9.2

const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
check("nav inside header", navInsideHeader);

const parentLi = firstNavLink.parentElement;
check("parent li of first .nav-link", parentLi);

const article = document.querySelector("article");
const nextSibling = article.nextElementSibling;
check("next sibling of article ", nextSibling);

const ul = document.querySelector(".nav-list");
const childLis = ul.children;
check("child li elements of ul", childLis.length > 0);

const bodyFromFooter = footer.parentElement;
check("body from footer", bodyFromFooter.tagName === "BODY");

const headerClosest = firstNavLink.closest("header");
check("header via closest()", headerClosest);

// step 3 : 9.3

heading.textContent = "My DOM practice Dashboard";

firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

console.log("Article data-id:", article.dataset.id);
console.log("Article data-category:", article.dataset.category);
article.dataset.status = "reviewed";

if (contentElements.length > 0) {
    contentElements[0].classList.add("highlight");
}
if (contentElements.length > 0) {
    contentElements[1].classList.toggle("accent");
}

const userInput = `<img src="x" onerror="alert('hacked!')">`;
document.getElementById("unsafe").innerHTML = userInput;
document.getElementById("safe").textContent = userInput;

//step 4: task 9.4

function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "nav-link";
    a.href = href;
    a.textContent = text;
    li.appendChild(a);

    const navList = document.querySelector(".nav-list");
    if (navList) {
        navList.appendChild(li);
    }
}

addNavItem("Blog", "#blog");
addNavItem("Portifolio", "#portifolio");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is dynamically added introductory paragraph.";
const firstArticleP =article.querySelector("p");
if (firstArticleP) {
    article.insertBefore(newParagraph, firstArticleP);
}

const firstNavLi = document.querySelector(".nav-list li");
if (firstNavLi) {
    const clonedLi = firstNavLi.cloneNode(true);
    const clonedLink = clonedLi.querySelector(".nav-link");
    if (clonedLink) {
        clonedLink.textContent = "cloned";
        clonedLink.href = "#cloned";
    }

    const navList = document.querySelector(".nav-list");
    if (navList) {
        navList.prepend(clonedLi);
    }
}

if (footer) {
    footer.remove();
}
