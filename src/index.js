const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//nav links

const links = document.querySelectorAll("nav a")
links.forEach((link) => {
  link.classList.add("italic")
})


const navLink1 = document.querySelector("nav a:nth-of-type(1)")
navLink1.textContent = 'Services'

const navLink2 = document.querySelector("nav a:nth-of-type(2)")
navLink2.textContent = 'Product'

const navLink3 = document.querySelector("nav a:nth-of-type(3)")
navLink3.textContent = 'Vision'

const navLink4 = document.querySelector("nav a:nth-of-type(4)")
navLink4.textContent = 'Features'

const navLink5 = document.querySelector("nav a:nth-of-type(5)")
navLink5.textContent = 'About'

const navLink6 = document.querySelector("nav a:nth-of-type(6)")
navLink6.textContent = 'Contact'

//images

const logoTitle = document.querySelector(".logo")
logoTitle.src="http://localhost:9000/img/logo.png"

const circleImage = document.getElementById('cta-img')
circleImage.src="http://localhost:9000/img/cta.png"

const middleImg = document.querySelector(".middle-img")
middleImg.src = "http://localhost:9000/img/accent.png"

//title and button

const mainTitle = document.querySelector("h1")
mainTitle.textContent = "DOM Is Awesome"

const getStartedButton = document.querySelector("button")
getStartedButton.textContent = "Get Started"

//main content

const features = document.querySelector("h4:nth-of-type(1)")
features.textContent =  "Features"

console.log(document.querySelector("p:nth-of-type(2)"))


