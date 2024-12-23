"use client";

import { useState } from "react";
import { NavBar } from '@/components/navigation/nav-bar';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  const [messageDisplayed, setMessageDisplayed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageDisplayed(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
            Us
          </span>
        </h1>

        <Card className="max-w-2xl mx-auto bg-gray-50 border-gray-200">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-red-600 text-white">
              Send Message
            </Button>
          </form>

          {messageDisplayed && (
            <div className="p-6 bg-blue-50 border-t border-blue-200">
              <p className="text-gray-600">
                Thank you for your message. We will get back to you shortly.
              </p>
            </div>
          )}
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have questions about ProposalForge? We are here to help! Reach out using the form above or contact us directly:
          </p>
          <p className="text-gray-600">
            Email: kenymandar@gmail.com<br />
            Phone: +1 (858) 123 4567<br />
            Address: 12345 La Jolla, San Diego 92128
          </p>
        </div>
      </div>
    </div>
  );
}