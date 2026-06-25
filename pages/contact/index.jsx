import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { siteConfig } from "../../data/siteConfig";
import { fadeIn } from "../../variants";

const emptyStatus = {
  type: "idle",
  message: "",
};

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

const serverStatusMessages = {
  sent: {
    type: "success",
    message: "Message submitted successfully. Thank you for reaching out.",
  },
  invalid: {
    type: "error",
    message: "Please complete all contact fields with valid information.",
  },
  "rate-limited": {
    type: "error",
    message: "Too many contact attempts. Please wait a few minutes before trying again.",
  },
  "delivery-error": {
    type: "error",
    message: `Unable to deliver the message right now. You can email me directly at ${siteConfig.email}.`,
  },
};

const getStatusClassName = (type) => {
  if (type === "success") {
    return "text-green-300";
  }

  if (type === "info") {
    return "text-yellow-200";
  }

  return "text-red-300";
};

const Contact = ({ initialStatus = emptyStatus }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(emptyStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      form.reset();
      setStatus({
        type: data.delivered === false ? "info" : "success",
        message:
          data.message ||
          "Message submitted successfully. Thank you for reaching out.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          `Unable to submit right now. You can email me directly at ${siteConfig.email}.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen xl:h-full bg-primary/30 pb-28 xl:pb-0">
      <div className="container mx-auto px-5 sm:px-6 xl:px-0 py-32 pb-12 text-center xl:text-left flex items-center justify-center min-h-screen xl:h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-[680px] text-center"
          >
            <p>
              Send a message through the form or email me directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-sm"
              >
                {siteConfig.email}
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
              <span>{siteConfig.location}</span>
              <span aria-hidden="true">•</span>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-sm"
              >
                {siteConfig.phone}
              </a>
            </div>
          </motion.div>

          <p id="contact-help" className="sr-only">All fields are required. The message must contain at least 10 characters.</p>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="on"
            name="contact"
            method="POST"
            action={contactEndpoint}
            aria-describedby={status.message ? "contact-status" : "contact-help"}
            aria-busy={isLoading}
            noValidate={false}
          >
            <label className="sr-only" htmlFor="bot-field">
              Do not fill this field
            </label>
            <input
              id="bot-field"
              type="text"
              name="bot-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            />

            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                maxLength={80}
                autoComplete="name"
                required
              />

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                maxLength={120}
                autoComplete="email"
                inputMode="email"
                required
              />
            </div>

            <label className="sr-only" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              maxLength={120}
              autoComplete="off"
              required
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              required
              minLength={10}
              maxLength={2000}
              rows={6}
            />

            {status.message && (
              <p
                id="contact-status"
                className={`${getStatusClassName(
                  status.type,
                )} text-sm text-center xl:text-left`}
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              className="btn mx-auto xl:mx-0 rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const contactStatus = Array.isArray(query.contact)
    ? query.contact[0]
    : query.contact;

  return {
    props: {
      initialStatus: serverStatusMessages[contactStatus] || emptyStatus,
    },
  };
}

export default Contact;
