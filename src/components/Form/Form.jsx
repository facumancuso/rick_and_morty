import React, { useState } from 'react';
import { validateForm } from "./validation";
import styles from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(userData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      login(userData);
    }
  };

  return (
    <div className={styles.form}>
         <h2 className={styles.title}>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
        {errors.password && <div className={styles.error}>{errors.password}</div>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Form;