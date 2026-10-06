import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy", description: "How this site handles your data." };

export default function Privacy() {
  return (
    <section className="section container-x max-w-3xl pt-16">
      <h1 className="display-2">Privacy policy</h1>
      <div className="mt-8 space-y-4 text-muted">
        <p>
          {/* TODO: replace with your real privacy policy text, ideally reviewed for your jurisdiction. */}
          This is placeholder text. This site collects only what you send through the contact form (name, email,
          message) and uses it solely to reply to you. If cookie-light analytics are enabled, they record anonymous
          page views and set no tracking cookies.
        </p>
        <p>
          To request access to or deletion of your data, email <a className="text-fg underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
