import React from "react";
import logo from "../assets/logoblack.png";

const Footer = () => {
  return (
    <div className="bg-[#30343f] text-white py-12">
      <footer className="max-w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-14 text-center sm:text-left">
        {/* Logo + Tagline */}
        <aside className="flex flex-col items-center sm:items-start space-y-2 w-full sm:w-auto">
          <img className="h-[80px] w-[90px]" src={logo} alt="ToyTopia Logo" />
          <p className="text-sm text-[#fafaff] leading-snug">
            <span className="font-semibold text-white">ToyTopia Shop Ltd.</span>
            <br />
            Where Every Day is Play Day.
          </p>
        </aside>

        {/* Social Links */}
        <aside className="w-full sm:w-auto flex flex-col items-center sm:items-start space-y-3">
          <h6 className="footer-title text-sm text-white font-semibold">
            Social
          </h6>
          <div className="flex justify-center sm:justify-start gap-5">
            <a aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </aside>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-14 sm:gap-28 w-full sm:w-auto text-sm">
          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Services
            </h6>
            <a className="link link-hover block mb-1">Branding</a>
            <a className="link link-hover block mb-1">Design</a>
            <a className="link link-hover block mb-1">Marketing</a>
            <a className="link link-hover block">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Explore
            </h6>
            <a className="link link-hover block mb-1">Features</a>
            <a className="link link-hover block mb-1">Enterprise</a>
            <a className="link link-hover block mb-1">Security</a>
            <a className="link link-hover block">Pricing</a>
          </nav>

          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Company
            </h6>
            <a className="link link-hover block mb-1">About us</a>
            <a className="link link-hover block mb-1">Contact</a>
            <a className="link link-hover block mb-1">Jobs</a>
            <a className="link link-hover block">Press kit</a>
          </nav>

          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Legal
            </h6>
            <a className="link link-hover block mb-1">Terms of use</a>
            <a className="link link-hover block mb-1">Privacy policy</a>
            <a className="link link-hover block">Cookie policy</a>
          </nav>
        </div>
      </footer>

      {/* Divider + Copy */}
      <div className="max-w-11/12 mx-auto mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ToyTopia Shop Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
