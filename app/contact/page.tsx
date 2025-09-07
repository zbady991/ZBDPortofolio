"use client";
import * as React from "react";

export default function ContactPage() {
  const [status, setStatus] = React.useState<null | { type: "success" | "error"; message: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not send your message.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <section>
      <h1 style={{marginTop:0}}>Contact</h1>
      <p className="hero-subtitle">Want to work together? Send a message.</p>
      {status && (
        <div className={`flash ${status.type}`} style={{marginTop: 12}}>{status.message}</div>
      )}
      <form onSubmit={onSubmit} className="card form" style={{marginTop: 16}}>
        <label>
          <span>Name</span><br />
          <input name="name" required className="input" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span><br />
          <input name="email" type="email" required className="input" placeholder="you@email.com" />
        </label>
        <label>
          <span>Message</span><br />
          <textarea name="message" rows={5} required className="textarea" />
        </label>
        <button className="btn btn-primary" type="submit" style={{width:'max-content'}}>Send</button>
      </form>
      <p style={{color:'var(--muted)', marginTop:12}}>Or email me at <a href="mailto:bedoobadr997@gmail.com">bedoobadr997@gmail.com</a>.</p>
    </section>
  );
}


