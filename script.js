const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copyBrief').addEventListener('click', async () => {
  const brief = 'Hello Digital Seva Hub,\\n\\nI would like to enquire about your services.\\nService required: \\nBusiness/name: \\nPreferred style/details: \\nDeadline: \\nBudget range (optional): \\n\\nPlease contact me with the next steps.';
  try {
    await navigator.clipboard.writeText(brief);
    document.querySelector('#copyStatus').textContent = 'Enquiry template copied. Paste it into your message.';
  } catch (e) {
    document.querySelector('#copyStatus').textContent = brief;
  }
});


/* MAKE SERVICE AND PORTFOLIO IMAGES CLICKABLE */

document.querySelectorAll(
  '.service-card-image, .gallery img, .hero-main-image, .about-main-image'
).forEach(function(img) {

  // Do not create another link if one already exists
  if (img.closest('a')) return;

  const link = document.createElement('a');
  link.href = img.currentSrc || img.src;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.title = 'Click to view full-size image';
  link.className = 'image-open-link';

  img.parentNode.insertBefore(link, img);
  link.appendChild(img);
});
