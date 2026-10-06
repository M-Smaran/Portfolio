"use client";
import { useActionState } from "react";
import { sendMessage, type FormState } from "@/app/contact/actions";

const initial: FormState = { status: "idle" };

const field =
  "w-full rounded-xl border border-line bg-elevated px-4 py-3 text-fg placeholder:text-muted";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-[var(--radius)] border border-line bg-elevated p-8 text-xl">
        {state.message}
      </p>
    );
  }

  const e = state.errors ?? {};
  return (
    <form action={action} noValidate className="space-y-6">
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm">Name</label>
        <input id="name" name="name" required autoComplete="name" className={field}
          aria-invalid={!!e.name} aria-describedby={e.name ? "name-err" : undefined} />
        {e.name && <p id="name-err" className="mt-1 text-sm text-red-400">{e.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field}
          aria-invalid={!!e.email} aria-describedby={e.email ? "email-err" : undefined} />
        {e.email && <p id="email-err" className="mt-1 text-sm text-red-400">{e.email}</p>}
      </div>

      <div>
        <label htmlFor="type" className="mb-2 block text-sm">Project type (optional)</label>
        <select id="type" name="type" className={field} defaultValue="">
          <option value="">Select…</option>
          <option>Web app</option>
          <option>Website / portfolio</option>
          <option>Consulting</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm">Message</label>
        <textarea id="message" name="message" rows={6} required className={field}
          aria-invalid={!!e.message} aria-describedby={e.message ? "message-err" : undefined} />
        {e.message && <p id="message-err" className="mt-1 text-sm text-red-400">{e.message}</p>}
      </div>

      {state.status === "error" && !state.errors && (
        <p role="alert" className="text-red-400">{state.message ?? "Something went wrong. Please try again."}</p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
