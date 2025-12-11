document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.2, // Adjust for smoother animation start
  });

  animatedElements.forEach((el) => observer.observe(el));

  // Optional: Parallax effect on a background image
  const parallax = document.getElementById('parallaxImage');
  if (parallax) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallax.style.backgroundPositionY = `${scrollY * 0.1}px`;
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view"); // Optional: remove if you want the effect to trigger only once
        }
      });
    }, {
      threshold: 0.2
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));
  });



  document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});




const slider = document.getElementById('testimonial-slider');
const scrollAmount = 340;

document.getElementById('testimonial-left').addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.getElementById('testimonial-right').addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));



   const toggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });




    const featureData = {
  direct: {
    title: "Direct Receipt Collection",
    desc: "Automatically collect receipts from email, photos, and uploads—all organized instantly.",
    points: ["Email & camera imports", "Real-time auto-tagging", "Centralized receipt hub"]
  },
  ai: {
    title: "AI-Powered Scanning",
    desc: "Smart OCR tech extracts data from receipts in seconds, reducing manual entry to zero.",
    points: ["Smart text extraction", "AI categorization", "Works with any format"]
  },
  report: {
    title: "Export Reimbursement Report",
    desc: "Effortlessly generate detailed reports for work reimbursements or tax filing.",
    points: ["One-click PDF exports", "Custom date range", "Business-friendly format"]
  },
  business: {
    title: "Personal & Business Separation",
    desc: "Keep your personal and business expenses clearly separated with smart tagging.",
    points: ["Auto-label rules", "Color-coded sorting", "Dual wallet view"]
  },
  financial: {
    title: "Smart Financial Insights",
    desc: "Gain insights and trends that help you spend smarter and save better.",
    points: ["Visual charts & stats", "Monthly summaries", "Spending alerts"]
  },
  cloud: {
    title: "Secure Cloud Storage",
    desc: "All receipts safely stored in the cloud with automatic backup. Access from any device.",
    points: ["Automatic cloud sync", "Cross-device access", "Bank-level encryption", "Instant search & retrieval"]
  },
  split: {
    title: "Split Bills",
    desc: "Split any receipt with friends or coworkers and track shared expenses easily.",
    points: ["Smart splitting calculator", "Send/receive requests", "Track who paid"]
  },
  eco: {
    title: "Eco-Friendly Impact",
    desc: "Go paperless and contribute to a greener planet—one receipt at a time.",
    points: ["Digital-first approach", "Less printing waste", "Supports sustainability"]
  }
};

const icons = document.querySelectorAll('.feature-icon');
const detail = document.getElementById('featureDetail');

// Open on icon click
icons.forEach(icon => {
  icon.addEventListener('click', e => {
    e.stopPropagation(); // don’t let this click bubble up to document
    const key = icon.dataset.feature;
    const data = featureData[key];

    // Populate
    detail.querySelector('h5').textContent = data.title;
    detail.querySelector('p').textContent = data.desc;
    detail.querySelector('ul').innerHTML = data.points
      .map(pt => `<li>${pt}</li>`)
      .join('');

    // Toggle active states
    icons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');
    detail.classList.add('open');
  });
});

// Prevent clicks inside detail from bubbling out
detail.addEventListener('click', e => e.stopPropagation());

// Close when clicking anywhere else
document.addEventListener('click', () => {
  if (detail.classList.contains('open')) {
    detail.classList.remove('open');
    icons.forEach(i => i.classList.remove('active'));
  }
});

document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

 // 1) A tiny ease-out smooth scroll
  function smoothScrollTo(endY, duration = 500) {
    const startY = window.pageYOffset;
    const distance = endY - startY;
    const startTime = performance.now();

    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      // ease-out: slows toward the end
      const ease = t * (2 - t);
      window.scrollTo(0, startY + distance * ease);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // 2) Hook up your menu links
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu a[href^="#"]');
    const header = document.querySelector('.menu');               // adjust if your header’s selector is different
    const headerOffset = header ? header.offsetHeight : 0;

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        
        const targetY = target.getBoundingClientRect().top 
                        + window.pageYOffset 
                        - headerOffset;
        smoothScrollTo(targetY, 600);  // 600ms duration
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach(drop => {
    const btn   = drop.querySelector('.dropdown__toggle');
    const menu  = drop.querySelector('.dropdown__menu');
    const label = drop.querySelector('.dropdown__label');
    const select= drop.querySelector('select');

    // toggle open/close
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      drop.classList.toggle('open');
      btn.setAttribute('aria-expanded', drop.classList.contains('open'));
    });

    // pick an option
    menu.querySelectorAll('.dropdown__option').forEach(opt => {
      opt.addEventListener('click', () => {
        // update selected styles
        menu.querySelectorAll('.dropdown__option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        // update label + real select
        label.textContent = opt.textContent;
        select.value     = opt.dataset.value;

        // close menu
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // close when clicking outside
    document.addEventListener('click', e => {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});






  