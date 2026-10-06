"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendMessage(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: bots fill this hidden field. Pretend success.
  if (formData.get("website")) return { status: "success", message: "Thanks, I'll be in touch soon." };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const type = String(formData.get("type") ?? "");

  const errors: NonNullable<FormState["errors"]> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";
  if (Object.keys(errors).length) return { status: "error", errors };

  // TODO: deliver the message. Example with Resend:
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({ from: "site@yourdomain.com", to: site.email, subject: `New message from ${name}`, text: `${type}\n${email}\n\n${message}` }),
  //   });
  console.log("[contact]", { name, email, type, message });

  return { status: "success", message: "Thanks, I'll be in touch soon." };
}
