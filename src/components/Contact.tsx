"use client"
import { useEffect, useState } from 'react';
import { AiFillEnvironment, AiFillPhone, AiFillMail, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        // Example initialization (e.g., emailjs)
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate email sending
        setTimeout(() => {
            setModalMessage('Email sent successfully!');
            setShowModal(true);
        }, 1000);

        e.currentTarget.reset();
    };

    return (
        <div className="mt-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mx-auto">
                        <h2 className="text-center text-navy mb-5">Contact Information</h2>
                        <ul className="list-none text-left space-y-2">
                            <li className="flex items-center">
                                <AiFillEnvironment className="mr-2 text-navy" />
                                Ngong lane plaza, Nairobi, Kenya
                            </li>
                            <li className="flex items-center">
                                <AiFillPhone className="mr-2 text-navy" />
                                +254 745913429
                            </li>
                            <li className="flex items-center">
                                <AiFillMail className="mr-2 text-navy" />
                                info@fashion-flair@gmail.com
                            </li>
                        </ul>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="https://www.facebook.com" className="text-navy text-2xl">
                                <AiFillFacebook />
                            </a>
                            <a href="https://www.twitter.com" className="text-navy text-2xl">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="https://www.instagram.com" className="text-navy text-2xl">
                                <AiFillInstagram />
                            </a>
                        </div>
                        <div className="flex justify-center mt-4">
                            <h2 className="text-center text-navy">Location</h2>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.79061004006!2d36.7846067!3d-1.3004862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1708249831100!5m2!1sen!2ske"
                                width="80%"
                                height="300"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-center text-navy">Contact Form</h2>
                        <form className="mt-3 mx-auto w-4/5" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="formName" className="block text-navy mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="formName"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="formEmail" className="block text-navy mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="formEmail"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="formMessage" className="block text-navy mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="formMessage"
                                    className="w-full p-2 border rounded"
                                    rows={4}
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="block w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded mt-3"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-lg font-bold mb-2">Alert</h3>
                        <p>{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
