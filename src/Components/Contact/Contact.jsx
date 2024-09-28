import React, { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import contact_image from "../../assets/mycontact.png";
import letImage from "../../assets/Let.png"; // Import your Let.png image
import "./Contact.css";
const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4942d43a-54f6-4c0b-8be6-136b2b21a4db");
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      } else {
        alert(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center p-6">
      <div className="mb-6">
        <img
          src={contact_image}
          alt="Contact"
          className="w-full h-auto max-w-2xl"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="contact-left w-full lg:w-1/2 p-4 text-gray-300">
          <img src={letImage} alt="Let's Talk" className="w-48 h-auto mb-4" />
          <p className="mt-2">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details mt-4">
            <div className="contact-detail flex items-center mb-2 text-gray-300">
              <img src={mail_icon} alt="Mail" className="mr-2" />
              <p>shivamshashank961@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center mb-2 text-gray-300">
              <img src={call_icon} alt="Call" className="mr-2" />
              <p>+917903352213</p>
            </div>
            <div className="contact-detail flex items-center mb-2 text-gray-300">
              <img src={location_icon} alt="Location" className="mr-2" />
              <p>Patna, India</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-right w-full lg:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <label htmlFor="name" className="block mb-1 text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-black text-gray-300 placeholder-gray-500"
          />
          <label htmlFor="email" className="block mb-1 text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-black text-gray-300 placeholder-gray-500"
          />
          <label htmlFor="message" className="block mb-1 text-gray-300">
            Write your message here
          </label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Enter your message"
            required
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-black text-gray-300 placeholder-gray-500"
          ></textarea>
          {/* New button */}
          <button className="ui-btn bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
            <span>Submit</span>
          </button>
        </form>
      </div>
      {showTooltip && (
        <div className="tooltip-container mt-4">
          <span className="tooltip bg-gray-600 text-gray-300 p-2 rounded">
            Thanks
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
