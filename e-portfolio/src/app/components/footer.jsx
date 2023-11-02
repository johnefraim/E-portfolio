'use client'
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-500 text-white p-4 text-center">
      <p>&copy; University of Nueva Caceres @ {currentYear}</p>
    </footer>
  );
};

export default Footer;
