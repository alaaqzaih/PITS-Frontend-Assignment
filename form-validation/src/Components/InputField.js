import React from 'react';

const InputField = ({ label, name, type, placeholder, error, onChange }) => (
  <div className="form-group">
    <label>{label}:</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
    />
    {error && <span>{error}</span>}
  </div>
);

export default InputField;
