import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4">
      <div className="flex space-x-4">
        <SocialIcon url="https://github.com/Goobber33" target="_blank" fgColor="#fff" className="transition-transform duration-200 hover:scale-110" style={{ height: 50, width: 50 }} />
        <SocialIcon url="https://www.linkedin.com/in/kyle-parks-b0a74017b" target="_blank" fgColor="#fff" className="transition-transform duration-200 hover:scale-110" style={{ height: 50, width: 50 }} />
      </div>
    </footer>
  );
};

export default Footer;
