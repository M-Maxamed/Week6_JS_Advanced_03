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
  //..................
  // Navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index+1}`];
});

// logo image src
const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', siteContent.nav['img-src']);

// CTA heading text
const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent.cta.h1;

// CTA button text
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

// CTA image source
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// Main content section
const mainContent = document.querySelector('.main-content');

// Top content
const topContent = mainContent.querySelector('.top-content');
const featuresHeading = topContent.querySelector('.text-content h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];
const featuresText = topContent.querySelector('.text-content p');
featuresText.textContent = siteContent['main-content']['features-content'];
const aboutHeading = topContent.querySelectorAll('.text-content h4')[1];
aboutHeading.textContent = siteContent['main-content']['about-h4'];
const aboutText = topContent.querySelectorAll('.text-content p')[1];
aboutText.textContent = siteContent['main-content']['about-content'];

// Middle image
const middleImg = mainContent.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom content
const bottomContent = mainContent.querySelector('.bottom-content');
const servicesHeading = bottomContent.querySelector('.text-content h4');
servicesHeading.textContent = siteContent['main-content']['services-h4'];
const servicesText = bottomContent.querySelector('.text-content p');
servicesText.textContent = siteContent['main-content']['services-content'];
const productHeading = bottomContent.querySelectorAll('.text-content h4')[1];
productHeading.textContent = siteContent['main-content']['product-h4'];
const productText = bottomContent.querySelectorAll('.text-content p')[1];
productText.textContent = siteContent['main-content']['product-content'];
const visionHeading = bottomContent.querySelectorAll('.text-content h4')[2];
visionHeading.textContent = siteContent['main-content']['vision-h4'];
const visionText = bottomContent.querySelectorAll('.text-content p')[2];
visionText.textContent = siteContent['main-content']['vision-content'];

// Contact section
const contactSection = document.querySelector('.contact');
const contactHeading = contactSection.querySelector('h4');
contactHeading.textContent = siteContent.contact['contact-h4'];
const contactAddress = contactSection.querySelectorAll('p')[0];
contactAddress.textContent = siteContent.contact.address;
const contactPhone = contactSection.querySelectorAll('p')[1];
contactPhone.textContent = siteContent.contact.phone;
const contactEmail = contactSection.querySelectorAll('p')[2];
contactEmail.textContent = siteContent.contact.email;

// Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer['copyright'];