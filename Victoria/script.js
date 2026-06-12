document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  });

  document.querySelectorAll('.animate-up').forEach(element => observer.observe(element));

  const hero = document.getElementById('home');
  const heroCard = document.getElementById('heroCard');
  const rows = document.querySelectorAll('.movie-row');

  const handleHeroMove = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroCard.style.transform = `translate3d(${x * 16}px, ${y * 10}px, 0)`;
  };

  hero.addEventListener('mousemove', handleHeroMove);
  hero.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'translate3d(0, 0, 0)';
  });

  rows.forEach(row => {
    row.addEventListener('wheel', event => {
      event.preventDefault();
      row.scrollLeft += event.deltaY;
    });
  });
});
