import emailjs from "@emailjs/browser";
import React, { FormEvent } from "react";

const serviceId = "service_g89gr9p";
const templateId = "template_6402gnj";
const publicKey = "_RUYDWnqYU3WQwd-w";

const ContactForm: React.FC = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
      .then(
        (result) => {
          alert("Message Sent Successfully");
        },
        (error) => {
          error.log(error.text);
          alert("Something went wrong!");
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="mt-10 p-6 bg-white rounded-md shadow-md w-full">
      <h1 className="text-2xl font-bold mb-4">Contact Me 👋🏻</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-daisyPurple-400 focus:border-daisyPurple-400 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-daisyPurple-400 focus:border-daisyPurple-400 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-daisyPurple-400 focus:border-daisyPurple-400 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-daisyPurple-600 hover:bg-daisyPurple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-daisyPurple-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
