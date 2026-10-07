/**
 * Pest Control Pros West Coast - Interactive Script
 * Clean, lightweight, zero bloat, high performance
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── 1. STICKY NAVBAR SCROLL EFFECT ──
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // ── 2. MOBILE MENU TOGGLE ──
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll('.nav-link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── 3. INTERACTIVE PEST SOLUTION TABS ──
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panes
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });



  // ── 5. FAQ ACCORDION ──
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });

  // ── 6. OBLIGATION-FREE QUOTE FORM HANDLERS ──
  const quoteForm = document.getElementById('quote-form');
  const sendWhatsAppBtn = document.getElementById('btn-send-whatsapp');

  if (quoteForm && sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const town = document.getElementById('form-town').value.trim();
      const propertyType = document.querySelector('input[name="property_type"]:checked')?.value || 'Residential';
      const pestIssue = document.getElementById('form-pest').value;
      const urgency = document.querySelector('input[name="urgency"]:checked')?.value || 'Standard';
      const notes = document.getElementById('form-notes').value.trim();

      if (!name || !phone) {
        alert('Please provide at least your Name and Phone Number so we can assist you.');
        document.getElementById('form-name').focus();
        return;
      }

      // Build clean WhatsApp message
      let message = `*Pest Control Pros - West Coast Quote Request*\n\n`;
      message += `👤 *Name:* ${name}\n`;
      message += `📞 *Phone:* ${phone}\n`;
      message += `📍 *Area/Town:* ${town || 'West Coast'}\n`;
      message += `🏠 *Property:* ${propertyType}\n`;
      message += `🐛 *Pest Issue:* ${pestIssue}\n`;
      message += `⏱️ *Urgency:* ${urgency}\n`;
      if (notes) {
        message += `📝 *Notes:* ${notes}\n`;
      }
      message += `\n_Submitted via pestcontrolwc.co.za quote generator_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/27823966692?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ── 7. ACCESSIBILITY & SMOOTH SCROLL FOR NAV LINKS ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
