"use client";

import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

// Các icon mạng xã hội dùng SVG inline để tránh thiếu thư viện
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <section className="padding-section container-page bg-background relative">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-start">
        {/* Cột Trái: Thông tin & Follow Us */}
        <div className="flex flex-col relative z-10">
          {/* Tiêu đề mờ */}
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold text-foreground/10 tracking-tight mb-8 select-none">
            Contact Us
          </h2>

          {/* Thông tin liên hệ */}
          <div className="flex flex-col gap-8 mb-10">
            {/* Địa chỉ */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-background" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-foreground/30 font-medium text-lg mb-1">
                  Address
                </p>
                <p className="text-foreground/60 text-base leading-relaxed">
                  1452C, Tan My, Tan Dong Hiep, Ho Chi Minh City
                </p>
              </div>
            </div>

            {/* Số điện thoại */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                <Phone className="w-6 h-6 text-background" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-foreground/30 font-medium text-lg mb-1">
                  Phone Number
                </p>
                <p className="text-foreground/60 text-base leading-relaxed">
                  +084-358342424
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                <Mail className="w-6 h-6 text-background" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-foreground/30 font-medium text-lg mb-1">
                  E-Mail
                </p>
                <p className="text-foreground/60 text-base leading-relaxed">
                  hello@giux.studio
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <p className="text-foreground/20 text-lg font-medium mb-4">
              Follow Us:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center hover:brightness-90 transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center hover:brightness-90 transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center hover:brightness-90 transition-all"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center hover:brightness-90 transition-all"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center hover:brightness-90 transition-all"
              >
                <span className="text-background font-bold text-[10px] md:text-xs tracking-tight leading-none select-none">
                  Zalo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Cột Phải: Google Map */}
        <div className="w-full h-75 md:h-112.5 xl:h-137.5 rounded-3xl overflow-hidden shadow-xl relative z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.1414426634968!2d106.75790927541583!3d10.97476119698315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174db003b821769%3A0x297743c868d40787!2zxJDhuqFpIEzDvSBCxrB1IMSQaeG7h24gKFBob3RvIE5n4buNYyBMYW4p!5e0!3m2!1sen!2s!4v1782747104076!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location"
            className="brightness-90 hover:brightness-100 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
