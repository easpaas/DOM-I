const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// selector for nav links
const navLinks = document.querySelectorAll('nav a');

// add text to nav links
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


// selectors for cta
const h1 = document.querySelector('.cta .cta-text h1');
const button = document.querySelector('.cta .cta-text button');
const ctaImg = document.getElementById('cta-img');

// add text to h1
h1.textContent = siteContent["cta"]["h1"];
// add text to button
button.textContent = siteContent["cta"]["button"];
// set src attribute of cta-img 
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// selectors for top content
const topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
const featuresHeader = topContentHeaders[0];
const aboutHeader = topContentHeaders[1];
const topContentPara = document.querySelectorAll('.top-content .text-content p');
const features = topContentPara[0];
const about = topContentPara[1];
const middleImg = document.getElementById('middle-img');

// features header and paragraph
featuresHeader.textContent = siteContent['main-content']['features-h4'];
features.textContent = siteContent['main-content']['features-content'];

// about header and paragraph
aboutHeader.textContent = siteContent['main-content']['about-h4'];
about.textContent = siteContent['main-content']['about-content'];

// set src attribute of middle-img
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// selectors for bottom content
const bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4');
const servicesHeader = bottomContentHeaders[0];
const productHeader = bottomContentHeaders[1];
const visionHeader = bottomContentHeaders[2];

const bottomContentPara = document.querySelectorAll('.bottom-content .text-content p');
const services = bottomContentPara[0];
const products = bottomContentPara[1];
const visions = bottomContentPara[2];

// services header and paragraph
servicesHeader.textContent = siteContent['main-content']['services-h4'];
services.textContent = siteContent['main-content']['services-content'];

// product header and paragraph
productHeader.textContent = siteContent['main-content']['product-h4'];
products.textContent = siteContent['main-content']['product-content'];

// vision header and paragraph
visionHeader.textContent = siteContent['main-content']['vision-h4'];
visions.textContent = siteContent['main-content']['vision-content'];


// selectors for contact section
const contactHeader = document.querySelector('.contact h4');
const address = document.querySelector('.contact p');
const phone = document.querySelector('.contact p:nth-of-type(even)');
const email = document.querySelector('.contact p:last-child');

// add text to contact section
contactHeader.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];


// selectors for footer
const footer = document.querySelector('footer').firstChild;

// add text to footer
footer.textContent = siteContent['footer']['copyright'];