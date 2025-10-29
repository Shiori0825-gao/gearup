import React, { useState } from "react"; // import React and state hook
import "./Register.css"; // import styles

export default function Register() {
  // set up form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });

  // handle input change for text and checkbox fields
  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  // handle form submit + basic validation
  function onSubmit(e) {
    e.preventDefault();
    const errs = [];
    if (!form.firstName.trim()) errs.push("First name is required.");
    if (!form.lastName.trim()) errs.push("Last name is required.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.push("Valid email is required.");
    if (form.password.length < 6) errs.push("Password must be at least 6 characters.");
    if (form.password !== form.confirm) errs.push("Passwords do not match.");
    if (!form.terms) errs.push("Accept the Terms and conditions.");

    if (errs.length) {
      alert("Fix these:\n• " + errs.join("\n• ")); // show alert if any errors
      return;
    }

    alert(`Registered:\n${form.firstName} ${form.lastName}\n${form.email}`); // success message
    setForm({ firstName: "", lastName: "", email: "", password: "", confirm: "", terms: false }); // reset form
  }

  // JSX layout for register form
  return (
    <>
      {/* top-left logo pill */}
      <a className="brand-pill" href="#">
        <span className="gear">⚙</span>
        <span className="brand-text">GearUP</span>
      </a>

      <main className="wrap">
        <div className="header-pill">Register</div>

        <form className="card" onSubmit={onSubmit} noValidate>
          {/* first & last name side by side */}
          <div className="grid-2">
            <label className="input-pill">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={onChange}
                required
              />
            </label>
            <label className="input-pill">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={onChange}
                required
              />
            </label>
          </div>

          {/* email field */}
          <label className="input-pill">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
            />
          </label>

          {/* password field */}
          <label className="input-pill">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
              required
              minLength={6}
            />
          </label>

          {/* confirm password field */}
          <label className="input-pill">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={onChange}
              required
              minLength={6}
            />
          </label>

          {/* terms checkbox */}
          <label className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={onChange}
            />
            <span>Terms and conditions</span>
          </label>

          {/* submit button */}
          <button type="submit" className="btn-primary">Sign up</button>

          {/* login link */}
          <p className="login-link">
            <a href="#">Have an account? Login here</a>
          </p>
        </form>
      </main>
    </>
  );
}
