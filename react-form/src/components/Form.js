import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNum: "",
    password: "",
    confirmPass: "",
  });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidContact = (contact) => /^[789]\d{9}$/.test(contact); // Starts with 7, 8, or 9 and is 10 digits
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {
      name: "",
      email: "",
      contactNum: "",
      password: "",
      confirmPass: "",
    };

    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!contactNum) {
      newErrors.contactNum = "Contact Number is required";
    } else if (!isValidContact(contactNum)) {
      newErrors.contactNum =
        "Mobile number must start with 7, 8, or 9 and be 10 digits long";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(password)) {
      newErrors.password =
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }
    if (!confirmPass) {
      newErrors.confirmPass = "Confirm Password is required";
    } else if (password !== confirmPass) {
      newErrors.confirmPass = "Passwords must match";
    }

    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.contactNum &&
      !newErrors.password &&
      !newErrors.confirmPass
    ) {
      alert("Sign Up Successfully");
      // You can handle the actual form submission here, like sending the data to an API
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="heading">Sign Up</p>

        <div>
          <p className="fieldName">Name</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <p className="fieldName">Email</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <p className="fieldName">Contact Number</p>
          <input
            type="tel"
            value={contactNum}
            onChange={(event) => setContact(event.target.value)}
          />
          {errors.contactNum && <p className="error">{errors.contactNum}</p>}
        </div>

        <div>
          <p className="fieldName">Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <p className="fieldName">Confirm Password</p>
          <input
            type="password"
            value={confirmPass}
            onChange={(event) => setConfirmPass(event.target.value)}
          />
          {errors.confirmPass && <p className="error">{errors.confirmPass}</p>}
        </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
