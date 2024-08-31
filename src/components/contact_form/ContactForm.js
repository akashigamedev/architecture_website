import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../button/Button.js";

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
        required={isImportant}
        style={error ? { border: "2px solid var(--clr-error)" } : {}}
      />
      {error && <p className={styles.errorMsg}>{`ⓘ ${error}`}</p>}
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

  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Message us</h2>
        <p>We'll get back with you within 24 hours.</p>
      </div>
      <form>
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
            key="message"
            required={false}
            style={
              formData.errors["message"]
                ? { border: "2px solid var(--clr-error)" }
                : {}
            }
            rows={3}
          ></textarea>
          {formData.errors["message"] && (
            <p
              className={styles.errorMsg}
            >{`ⓘ ${formData.errors["message"]}`}</p>
          )}
        </div>
        <Button text="Message" style={styles.btn} />
      </form>
    </div>
  );
}
