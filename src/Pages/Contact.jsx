import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 flex items-center justify-center p-4 py-12">
      <Helmet>
        <title>Contact Us | Kidstuff</title>
        <meta name="description" content="Get in touch with Kidstuff. Reach us via email, phone, or visit our office. We're here to help!" />
        <meta property="og:title" content="Contact Us | Kidstuff" />
        <meta property="og:description" content="We're here to help with any questions about toys, orders, or support." />
        <meta property="og:image" content="https://kidstuff.com/og-contact.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-700 mt-4 max-w-md">
                We'd love to hear from you! Whether it's a question, feedback, or just saying hi.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-amber-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white shadow-md">
                  <FiMail size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="text-lg font-semibold text-gray-800">support@kidstuff.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl text-white shadow-md">
                  <FiPhone size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="text-lg font-semibold text-gray-800">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl text-white shadow-md">
                  <FiMapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <p className="text-lg font-semibold text-gray-800">123 Toy Street, Playtown, USA</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl text-white shadow-md">
                  <FiClock size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Support Hours</p>
                  <p className="text-lg font-semibold text-gray-800">Mon–Fri: 9AM–6PM EST</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="/https://www.facebook.com/profile.php?id=61581237916296" className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-md hover:scale-110 transition-transform">
                <FiFacebook size={22} />
              </a>
              <a href="/" className="p-3 bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-xl shadow-md hover:scale-110 transition-transform">
                <FiTwitter size={22} />
              </a>
              <a href="/alexnillchowdhury" className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-xl shadow-md hover:scale-110 transition-transform">
                <FiInstagram size={22} />
              </a>
              <a href="/" className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-md hover:scale-110 transition-transform">
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form (Design Only) */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-white/70 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all bg-white/70 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all bg-white/70 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/70 outline-none resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 cursor-pointer rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiMail size={22} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Floating Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;