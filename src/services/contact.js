const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = {};
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (!name || name.length < 2) {
    errors.name = "Enter your name (at least 2 characters).";
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!subject || subject.length < 3) {
    errors.subject = "Give your message a short subject.";
  }
  if (!message || message.length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return { errors, clean: { name, email, subject, message } };
}

export async function submitContactForm(form) {
  const { errors, clean } = validate(form);

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    ok: true,
    message: "Message sent successfully.",
    data: clean,
  };
}
