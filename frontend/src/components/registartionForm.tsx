/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      phoneNumber: "",
      email: "",
      description: "",
      rating: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      location: Yup.string().required("Location is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      description: Yup.string().required("Description is required"),
      rating: Yup.string()
        .required("Rating is required")

    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post("http://127.0.0.1:5000/register", {
          name: values.name,
          location: values.location,
          phone_number: values.phoneNumber,
          email: values.email,
          description: values.description,
          rating: values.rating,
        });

        toast.success("Registration successful!");

        // Navigate to profile page with user data
        console.log('data',response.data);
        
        const userID = response.data.userID;
        router.push(`/profile/${userID}`);
      } catch (error: any) {
        
        console.error("Registration failed:", error);
        toast.error(error.response?.data?.error || "Registration failed.");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleContinue = () => {
    if (!formik.isValid || !formik.dirty) {
      toast.warn("Please complete the form before continuing.");
    } else {
      toast.success("Form completed! Proceeding...");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl text-black font-semibold text-center mb-6">Register</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.name && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter your location"
            onChange={formik.handleChange}
            value={formik.values.location}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.location && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.location}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.phoneNumber && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.email && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter a brief description"
            onChange={formik.handleChange}
            value={formik.values.description}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {formik.errors.description && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.description}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rating
          </label>
          <input
            name="rating"
            id="rating"
            placeholder="Enter a rating (1-5)"
            onChange={formik.handleChange}
            value={formik.values.rating}
            className="w-full  text-black px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.rating && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.rating}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Register"}
        </button>

        <button
          type="button"
          className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
          onClick={handleContinue}
        >
          Continue
        </button>
      </form>
      <ToastContainer />

    </div>
  );
};

export default RegisterForm;
