"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ContactUsTriggerProps = {
  className?: string;
  label?: string;
};

export function ContactUsTrigger({ className, label = "Contact Us" }: ContactUsTriggerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const modal = isOpen ? (
    <div className="contact-modal-backdrop" role="presentation" onClick={closeModal}>
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="contact-modal-close" onClick={closeModal} aria-label="Close contact form">
          x
        </button>

        <h2 id="contact-modal-title">Contact Vibelaunch</h2>
        <p className="contact-modal-copy">Share your requirement and our team will respond shortly.</p>

        {submitted ? (
          <div className="contact-form-success" role="status">
            Thanks. Your request is captured. Email us at hello@vibelaunch.com for immediate support.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span className="field-label">
                Name <span className="required-mark" aria-hidden="true">*</span>
              </span>
              <input name="name" type="text" required autoComplete="name" />
            </label>

            <label>
              <span className="field-label">
                Work Email <span className="required-mark" aria-hidden="true">*</span>
              </span>
              <input name="email" type="email" required autoComplete="email" />
            </label>

            <label>
              <span className="field-label">Company</span>
              <input name="company" type="text" autoComplete="organization" />
            </label>

            <label>
              <span className="field-label">
                Message <span className="required-mark" aria-hidden="true">*</span>
              </span>
              <textarea name="message" rows={4} required />
            </label>

            <button type="submit" className="contact-submit-btn">
              Send Request
            </button>
          </form>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {label}
      </button>

      {modal && typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}