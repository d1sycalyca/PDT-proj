const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');
const formStatus = document.getElementById('form-status');
let sending = false;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (sending || !contactForm.reportValidity()) return;

  const fields = new FormData(contactForm);
  if (fields.get('_honey')) return;
  const reason = contactForm.elements.reason.selectedOptions[0].textContent;
  fields.set('reason', reason);
  fields.set('_subject', `Reflex Living Solutions — ${reason}`);

  sending = true;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  contactForm.setAttribute('aria-busy', 'true');
  formStatus.textContent = 'Sending your message…';

  try {
    const endpoint = new URL(contactForm.action);
    endpoint.pathname = `/ajax${endpoint.pathname}`;
    const response = await fetch(endpoint.href, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fields,
    });
    const result = await response.json();
    if (!response.ok || (result.success !== true && result.success !== 'true')) {
      throw new Error('Submission failed');
    }
    contactForm.reset();
    formStatus.textContent = 'Thank you! Your message has been submitted. Our team will be in touch.';
  } catch {
    formStatus.textContent = 'We couldn’t confirm your submission. Your message is still here. Please try again or email tndto1mil@gmail.com directly.';
  } finally {
    sending = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
    contactForm.removeAttribute('aria-busy');
  }
});
