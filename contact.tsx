import { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const object = Object.fromEntries(data.entries());

    await fetch("https://api.rork.com/v1/forms/{your-form-id}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-semibold text-center">Contact Us</h1>
      {submitted ? (
        <p className="rounded bg-green-100 p-6 text-green-800 shadow">
          Thank you – we'll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-6 py-3 font-medium text-white shadow hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};
export default Contact;
