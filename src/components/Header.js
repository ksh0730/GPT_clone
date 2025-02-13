import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { CgSearch } from "react-icons/cg";
import { RiOpenaiFill } from "react-icons/ri";
import sidebarIcon from "../assets/sidebar-icon-op.png";
import sidebarIconActive from "../assets/sidebar-icon-cl.png";
import { LuRepeat2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 170);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
      {scrolled ? (
    <RiOpenaiFill className="rotate-logo" />
  ) : (
    <img src={logo} alt="Logo" className="logo" />
  )}
      </div>
      <div className="header-actions">
        <div className="search-icon">
          <CgSearch />
        </div>
        <button className="login-button">Log in</button>
      </div>
    </header>
  );
}

export function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#research">Research</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#safety">Safety</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#chatgpt">ChatGPT</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#sora">Sora</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#api platform">API Platform</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#for business">For Business</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#company">Company</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="#news">News</a></li>
        </ul>
        <div className="sidebar-icon-container">
         <LuRepeat2 className="sidebar-bottom-icon" />
        </div>
      </div>

      <button 
        className="sidebar-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={isOpen ? sidebarIcon : sidebarIconActive}    
          alt="Sidebar Toggle" 
          className="sidebar-icon" 
        />
      </button>
    </div>
  );
}
