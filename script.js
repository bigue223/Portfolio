document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const links = document.querySelector('.links');
  const linkItems = document.querySelectorAll('.links a');

  menuBtn?.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close mobile menu on link click
  linkItems.forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        links.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth scroll and active link update
  const sections = document.querySelectorAll('main section[id]');
  function onScroll() {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 100;
      const id = sec.getAttribute('id');
      const navLink = document.querySelector('.links a[href="#' + id + '"]')?.parentElement;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);

  // Contact form simple handler
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple validation/demo
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    if (!name || !email) {
      alert('Remplissez le nom et l\'email.');
      return;
    }
    alert('Message envoyé avec success, Merci, ' + name + '!');
    contactForm.reset();
  });
});