const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const fields = new FormData(contactForm);
  const reason = contactForm.elements.reason.selectedOptions[0].textContent;
  const body = [
    `Name: ${fields.get('first-name').trim()} ${fields.get('last-name').trim()}`,
    `Email: ${fields.get('email').trim()}`,
    `Phone: ${fields.get('phone').trim() || 'Not provided'}`,
    `Reason for enquiry: ${reason}`,
    '',
    fields.get('message').trim(),
  ].join('\r\n');

  const subject = `Reflex Living Solutions — ${reason}`;
  const recipient = contactForm.action.replace(/^mailto:/i, '');
  document.getElementById('email-draft-copy').value = `To: ${recipient}\r\nSubject: ${subject}\r\n\r\n${body}`;
  document.getElementById('email-draft-options').hidden = false;
  window.location.href = `${contactForm.action}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
