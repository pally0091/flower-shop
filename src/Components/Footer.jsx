/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">Contact Botanical Bliss</p>
          <address>
            <p className="mb-2">
              Address: 123 Blossom Lane <br /> Greenfield, CA
            </p>
            <p className="mb-2">Phone: (555) 555-5555</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@botanicalbliss.com"
                className="text-white hover:underline"
              >
                info@botanicalbliss.com
              </a>
            </p>
          </address>
          <hr className="my-2" />
          <p className="mt-4">
            &copy; 2023 Botanical Bliss - Your Floral Paradise
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
