
/* DIGITAL SEVA HUB - MAIN JAVASCRIPT */

/* MOBILE MENU */
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

/* COPYRIGHT YEAR */
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* COPY ENQUIRY TEMPLATE */
const copyButton = document.querySelector('#copyBrief');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const brief = 'Hello Digital Seva Hub,\n\nI would like to enquire about your services.\nService required:\nBusiness/name:\nPreferred style/details:\nDeadline:\nBudget range (optional):\n\nPlease contact me with the next steps.';

    try {
      await navigator.clipboard.writeText(brief);

      const status = document.querySelector('#copyStatus');
      if (status) {
        status.textContent = 'Enquiry template copied. Paste it into your message.';
      }
    } catch (error) {
      const status = document.querySelector('#copyStatus');
      if (status) {
        status.textContent = brief;
      }
    }
  });
}

/* MAKE ALL WEBSITE IMAGES CLICKABLE */
document.addEventListener('click', function(event) {

  if (!(event.target instanceof Element)) return;

  const img = event.target.closest(
    '.service-card-image, .gallery img, .hero-main-image, .about-main-image'
  );

  if (!img) return;

  const imageURL = img.getAttribute('src');

  if (!imageURL) return;

  event.preventDefault();
  event.stopPropagation();

  window.open(
    new URL(imageURL, document.baseURI).href,
    '_blank',
    'noopener'
  );

}, true);
