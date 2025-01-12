"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [checkBox, setCheckBox] = useState(false);

    const isFormValid = firstName && lastName && email && phoneNumber && checkBox;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            phoneNumber
        });
        alert("Form submitted successfully!")
    };

    return (
        <div className="flex justify-center m-6">
            <div className="w-full max-w-xl lg:max-w-4xl">
                <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            className="rounded-md"
                            alt="Network Tree Logo"
                        />
                    </Link>

                    <label className="text-lg text-gray-600 p-2 sm:mt-2">Create Profile</label>
                </div>

                <h1 className="text-xl font-bold mt-10 text-center sm:text-left">Create Network Tree Profile</h1>
                <label className="block text-gray-600 mb-6 text-center sm:text-left">Please provide some basic information</label>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-bold mt-10 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 border rounded-md"
                            placeholder="(123) 456-6789"
                            required
                        />
                    </div>

                    <div className="mb-10 flex items-center">
                        <input
                            type="checkbox"
                            checked={checkBox}
                            onChange={(e) => setCheckBox(e.target.checked)}
                            required
                        />
                        <label className="ml-2 text-gray-600">
                            I agree to the <a href="#privacy" className="text-sky-600/85">Privacy Policy</a> and <a href="#terms" className="text-sky-600/85">Terms of Service</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`text-xl w-full text-white p-3 rounded-2xl transition duration-300 ease-in-out 
                            ${isFormValid
                                ? "bg-green-500 hover:bg-green-700"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        Create Account
                    </button>

                </form>

                <label className="block m-2 p-2 text-center text-gray-600">
                    This site is protected by reCAPTCHA and the Google <a href="#privacy" className="text-sky-600/85">Privacy Policy</a> and <a href="#terms" className="text-sky-600/85">Terms of Services</a> apply.
                </label>
            </div>
        </div>
    );
}

export default Home;