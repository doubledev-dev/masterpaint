import React, { useState } from "react";

interface messageData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
  message: string;
}

const contactForm = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phoneNumber",
  },
  {
    label: "Company",
    type: "text",
    name: "company",
  },
  {
    label: "Address",
    type: "text",
    name: "address",
  },
  {
    label: "Message",
    type: "textarea",
    name: "message",
  },
];

const Contacts = () => {
  const [message, setMessage] = useState<messageData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <section className="bg-gradient-to-t from-accent-dark-blue via-primary-700 via-20% to-transparent to-85% p-8">
      <div className="p-8 text-primary-800 lg:hidden">
        <h1 className="font-Inter text-3xl font-semibold italic">Reach Us</h1>
        <h2 className="mt-2 text-xl font-thin">
          Feel free to send us a message!
        </h2>
      </div>
      <article className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          className=" col-span-2 rounded-3xl bg-white p-8 text-gray-700 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {contactForm.map((form) =>
              form.type === "textarea" ? (
                <div key={form.name} className="lg:col-span-2">
                  <label className="block">{form.label}</label>
                  <textarea
                    key={form.name}
                    name={form.name}
                    placeholder="Write your message"
                    className="mt-1 block w-full resize-none border-b-2 border-gray-700 p-2"
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div
                  key={form.name}
                  className="col-span-1 flex size-full flex-col justify-between"
                >
                  <label className="block">{form.label}</label>
                  <input
                    key={form.name}
                    type={form.type}
                    name={form.name}
                    className="mt-1 block w-full border-b-2 border-gray-700 p-2"
                    onChange={handleChange}
                  />
                </div>
              )
            )}
          </div>
          <button className="mx-auto mt-8 flex justify-items-end rounded-full bg-primary-800 p-2 px-4 align-baseline text-white hover:bg-primary-600 lg:ml-auto lg:p-4 lg:px-8">
            Send Message
          </button>
        </form>
        <div className="hidden p-8 text-primary-800 lg:block">
          <h1 className="font-Inter text-3xl font-semibold italic">Reach Us</h1>
          <h2 className="mt-2 text-xl font-thin">
            Feel free to send us a message!
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
