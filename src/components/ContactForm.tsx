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
      <article className="mx-auto grid max-w-7xl grid-cols-3 gap-4">
        <form
          onSubmit={handleSubmit}
          className=" col-span-2 rounded-3xl bg-white p-12 text-gray-700"
        >
          <div className="grid grid-cols-2 gap-4">
            {contactForm.map((form) =>
              form.type === "textarea" ? (
                <div key={form.name} className="col-span-2">
                  <label className="block">{form.label}</label>
                  <textarea
                    key={form.name}
                    name={form.name}
                    placeholder="Write your message"
                    className="mt-1 block w-full resize-none border-b-2 p-2"
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div key={form.name} className="col-span-1">
                  <label className="block">{form.label}</label>
                  <input
                    key={form.name}
                    type={form.type}
                    name={form.name}
                    className="mt-1 block w-full border-b-2 p-2"
                    onChange={handleChange}
                  />
                </div>
              )
            )}
          </div>
          <button className="ml-auto mt-8 rounded-full bg-primary-800 p-4 px-8 text-white hover:bg-primary-600">
            Send Message
          </button>
        </form>
        <div className="p-8 text-primary-800">
          <h1 className="text-3xl font-semibold italic">Reach Us</h1>
          <h2 className="mt-2 text-xl font-thin">
            Feel free to send us a message!
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
