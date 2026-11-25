import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Code, Link2, Loader2, Mail } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import { personal } from "../data/personal.js";
import { socialLinks } from "../data/socialLinks.js";
import { siteConfig } from "../config/siteConfig.js";
import { onPrefill } from "../utils/prefill.js";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  if (!subject.trim()) errors.subject = "Enter a subject.";
  if (message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

function openMailApp({ name, email, subject, message }) {
  const body = `${message}\n\nFrom: ${name} (${email})`;
  window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Defined outside Contact so inputs keep focus while typing.
function Field({
  name,
  label,
  type = "text",
  multiline = false,
  value,
  error,
  onChange,
}) {
  const Control = multiline ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Control
        id={name}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 5 : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-lg border border-line bg-card px-4 py-3 text-sm transition focus:border-acc"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback | error

  useEffect(
    () => onPrefill((subject) => setValues((v) => ({ ...v, subject }))),
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const { serviceId, templateId, publicKey } = siteConfig.emailjs;
    // if (!serviceId || !templateId || !publicKey) {
    //   openMailApp(values)
    //   setStatus('fallback')
    //   return
    // }
    if (!serviceId || !templateId || !publicKey) {
      openMailApp(values);
      setStatus("idle");
      setErrors({});
      setValues(EMPTY_FORM);
      return;
    }

    setStatus("sending");
    try {
      // Loaded on demand so visitors who never send a message do not download it.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey },
      );
      setStatus("sent");
      setValues(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  const linkClass = "inline-flex items-center gap-2 hover:text-acc";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle
        title="Contact"
        intro="Looking for an intern developer or a website? Send a message."
      />
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-3 text-sm">
          <li>
            <a className={linkClass} href={`mailto:${personal.email}`}>
              <Mail size={16} />
              {personal.email}
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={16} />
              GitHub
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 size={16} />
              LinkedIn
            </a>
          </li>
        </ul>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <Field
            name="name"
            label="Name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Field
            name="subject"
            label="Subject"
            value={values.subject}
            error={errors.subject}
            onChange={handleChange}
          />
          <Field
            name="message"
            label="Message"
            multiline
            value={values.message}
            error={errors.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-lime px-6 py-2.5 text-sm font-semibold text-on transition hover:brightness-95 disabled:opacity-60"
          >
            {status === "sending" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <div aria-live="polite">
            {(status === "sent" ||
              status === "fallback" ||
              status === "error") && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm ${status === "error" ? "text-red-400" : "text-emerald-400"}`}
              >
                {status === "sent" && "Message sent. I will reply soon."}
                {/* {status === "fallback" &&
                  "Opening your email app. The email service is not set up yet."} */}
                {status === "error" && (
                  <>
                    Message not sent. Try again or email{" "}
                    <a className="underline" href={`mailto:${personal.email}`}>
                      {personal.email}
                    </a>
                    .
                  </>
                )}
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
