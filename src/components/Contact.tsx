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
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={message.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={message.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={message.email}
          onChange={handleChange}
        />
        <br />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={message.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={message.company}
          onChange={handleChange}
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={message.address}
          onChange={handleChange}
        />
        <br />
        <label>Message:</label>
        <textarea
          name="message"
          value={message.message}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
