import { useState } from "react";
import { postData } from "../utils/services";
import { useRouter } from "next/router";
import Layout from "../layouts/Main";
import Link from "next/link";
import React from 'react';

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accountType: "Customer",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Password: formData.password,
        RoleName: formData.accountType,
      };

      const result = await postData('/auth/SignUp', data);

      if (result) {
        alert("Registration successful! Redirecting to login page.");
        router.push("/login"); 
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Back to store
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">
              Create an account and discover the benefits
            </h2>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__input-row">
                <p>Select your account type:</p>
                <div className="radio-wrapper">
                  <label className="radio">
                    <input
                      type="radio"
                      name="accountType"
                      value="Customer"
                      checked={formData.accountType === 'Customer'}
                      onChange={handleChange}
                    />
                    <span className="radio__check"></span>
                    Customer
                  </label>
                </div>
                <div className="radio-wrapper">
                  <label className="radio">
                    <input
                      type="radio"
                      name="accountType"
                      value="RentalProvider"
                      checked={formData.accountType === 'RentalProvider'}
                      onChange={handleChange}
                    />
                    <span className="radio__check"></span>
                    Rental Provider
                  </label>
                </div>
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className="checkbox checkbox--sm">
                    <input name="signed-in" type="checkbox" id="check-signed-in" required />
                    <span className="checkbox__check"></span>
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">
                Sign up
              </button>

              {error && <p className="form__error">{error}</p>}

              <p className="form__signup-link">
                <Link href="/login">Are you already a member?</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
