import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../button/Button.js";
import { IoIosSend } from "react-icons/io";
import { MdError, MdErrorOutline } from "react-icons/md";

const Input = (props) => {
  const { label, isImportant, onChange, error, ...inputProps } = props;
  return (
    <div className={styles.inputSection}>
      <label>
        {label}
        {isImportant && (
          <span style={{ marginLeft: "0.5rem", color: "var(--clr-error)" }}>
            *
          </span>
        )}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        required={false}
        style={error ? { border: "2px solid var(--clr-error)" } : {}}
      />
      {error && (
        <p className={styles.errorMsg}>
          <MdError size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    errors: {},
  });

  const inputFields = [
    {
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      key: "firstName",
      isImportant: true,
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      key: "lastName",
      isImportant: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      key: "email",
      isImportant: true,
    },
    {
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
      key: "phoneNumber",
      isImportant: true,
    },
  ];

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const validateField = (key, value) => {
    value = value || "";
    switch (key) {
      case "firstName":
        return value.trim() === "" ? "Please enter your first name." : "";
      case "lastName":
        return value.trim() == "" ? "Please enter your last name." : "";
      case "email":
        if (value.trim() == "") {
          return "Please enter your email.";
        }
        if (!value.includes("@")) {
          return "Your email is missing an @.";
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          return "Please enter a valid email.";
        }
        return "";
      case "phoneNumber":
        if (value.trim() == "") {
          return "Please enter your phone number.";
        }
        return !/^\d{10}$/.test(value)
          ? "Phone number should be 10 digits long."
          : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (key != "errors") {
        const error = validateField(key, formData[key]);
        if (error) {
          errors[key] = error;
        }
      }
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    console.log(errors);

    if (Object.keys(errors).length == 0) {
      console.log("Form submitted successfully", formData);
      setFormData((prevState) => ({ ...prevState, errors: {} }));
    } else {
      setFormData((prevState) => ({ ...prevState, errors }));
    }
  };

  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Message us</h2>
        <p>We'll get back with you within 24 hours.</p>
      </div>
      <form className={styles.contactform} onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <Input
            {...field}
            key={field.key}
            error={formData.errors[field.key]}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
          />
        ))}
        <div className={styles.inputSection}>
          <label>Message</label>
          <textarea
            placeholder="Which of our services would you be interested in..."
            value={formData["message"]}
            key="message"
            required={false}
            style={
              formData.errors["message"]
                ? { border: "2px solid var(--clr-error)" }
                : {}
            }
            rows={3}
            onChange={(e) => handleInputChange("message", e.target.value)}
          ></textarea>
          {formData.errors["message"] && (
            <p
              className={styles.errorMsg}
            >{`ⓘ ${formData.errors["message"]}`}</p>
          )}
        </div>
        <button className={styles.btn} type="submit">
          Message
          <IoIosSend size={16} />
        </button>
      </form>
    </div>
  );
}
