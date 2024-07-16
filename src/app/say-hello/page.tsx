"use client";

import ContactForm from "../components/contact-form";

export default function SayHello() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <ContactForm />
    </main>
  );
}
