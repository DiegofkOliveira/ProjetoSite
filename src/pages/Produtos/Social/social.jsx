import React from "react";
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { Social } from "./styles";


const SocialMediaButtons = () => {
  const openFacebookPage = () => {
    window.open("https://www.facebook.com/profile.php?id=100032848344384", "_blank");
  };

  const openInstagramPage = () => {
    window.open("https://www.instagram.com/mrvrecursos/?igshid=dmRwOWZsNDFlcHlz", "_blank");
  };

  const openWhatsappPage = () => {
    window.open("https://wa.me/+555599397199", "_blank");
  };

  return (
    <Social>
      <a href="#" onClick={openFacebookPage} className="social-media-link">
        <FaFacebook className="social-icon" />
      </a>
      <a href="#" onClick={openInstagramPage} className="social-media-link">
        <FaInstagramSquare className="social-icon" />
      </a>
      <a href="#" onClick={openWhatsappPage} className="social-media-link">
        <FaWhatsappSquare className="social-icon" />
      </a>
    </Social>
  );
};

export default SocialMediaButtons;