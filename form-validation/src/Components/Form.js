import React, { useState } from "react";
import "./Form.css";
import InputField from "./InputField";
const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    FullName: "",
    Age: "",
    Country: "",
    MobileNum: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const countryOptions = [
    { value: '', label: 'Select country' },
    { value: 'Nablus', label: 'Nablus' },
    { value: 'Ramallah', label: 'Ramallah' },
    { value: 'Tolkarm', label: 'Tolkarm' },
    { value: 'Gaza', label: 'Gaza' },
    { value: 'Jerusalem', label: 'Jerusalem' },
  ];
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    const validationErrors = {};
    const usernameRegex = /^[a-zA-Z0-9-_@]+$/;
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username should be at least 3 characters";
    } else if (!usernameRegex.test(formData.username)) {
      validationErrors.username =
        "Username should only contain letters, numbers, hyphens, underscores, or at symbols";
    }
    if (!formData.FullName.trim()) {
      validationErrors.FullName = "Full name is required";
    } else if (formData.FullName.length < 3) {
      validationErrors.FullName = "Full name should be at least 3 characters";
    } else if (formData.FullName.length > 15) {
      validationErrors.FullName = "Full name should be at most 15 characters";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    const mobileRegex = /^05\d{8}$/;
    if (!formData.MobileNum.trim()) {
      validationErrors.MobileNum = "Mobile number is required";
    } else if (!mobileRegex.test(formData.MobileNum)) {
      validationErrors.MobileNum = "Mobile number is not valid";
    }

    const age = parseInt(formData.Age);
    if (formData.Age && (isNaN(age) || age < 18 || age > 100)) {
      validationErrors.Age = "Age must be between 18 and 100";
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,24}$/;
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6 || formData.password.length > 24) {
      validationErrors.password =
        "Password should be between 6 and 24 characters";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must contain at least one letter, one number, and one special character";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
      e.target.reset();
      handleClear();
    }
  };
  const handleClear = () => {
    setFormData({
      username: "",
      FullName: "",
      Age: "",
      Country: "",
      MobileNum: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <div className="FormFields">
        <InputField
          label="Name"
          name="username"
          type="text"
          placeholder="First Name"
          error={errors.username}
          onChange={handleChange}
        />
        <InputField
          label="Full Name"
          name="FullName"
          type="text"
          placeholder="Full Name"
          error={errors.FullName}
          onChange={handleChange}
        />
      </div>
      <div className="FormFields">
        <InputField
          label="Age"
          name="Age"
          type="text"
          placeholder="Age"
          error={errors.Age}
          onChange={handleChange}
        />
        <div className="form-group">
          <label>Country:</label>
          <select
    name="Country"
    onChange={handleChange}
    value={formData.Country}
  >
    {countryOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
        </div>
      </div>
      <div className="FormFields">
        <InputField
          label="Mobile Number"
          name="MobileNum"
          type="text"
          placeholder="05xxxxxxxx"
          error={errors.MobileNum}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email}
          onChange={handleChange}
        />
      </div>
      <div className="FormFields">
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          error={errors.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="******"
          error={errors.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="buttons">
        <button type="reset" onClick={handleClear}>
          Clear
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Form;
