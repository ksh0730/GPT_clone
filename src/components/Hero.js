import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import gptImage from '../assets/gpt_img1.png';
import { FaPlay, FaPause } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";

function Hero({ isSidebarOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const descriptions = [
    "GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.",
    "GPT-4 can accept images as inputs and generate captions, classifications, and analyses.",
    "GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis."
  ];

  const [selectedDescription, setSelectedDescription] = useState(descriptions[0]);

  useEffect(() => {
    const updateIndicator = () => {
      if (menuRefs.current[activeIndex]) {
        const activeItem = menuRefs.current[activeIndex];
        const indicator = document.querySelector(".active-indicator");
        const menuLine = document.querySelector(".menu-line");

        if (indicator && menuLine) {
          const menuLineLeft = menuLine.offsetLeft;
          indicator.style.left = `${activeItem.offsetLeft + menuLineLeft}px`;
          indicator.style.width = `${activeItem.offsetWidth - 30}px`;
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // 2초 후 메시지 숨김
        })
        .catch(err => console.error("복사 실패:", err));
    };

  const text = "A beautiful Cinderella, dwelling eagerly, finally\ngains happiness; inspiring jealous kin, love\nmagically nurtures opulent prince; quietly rescues,\nslipper triumphs, uniting very wondrously, xenial\nyouth zealously.  ";
  const animatedText = text.split("").map((char, index) =>
    char === "\n" ? (
      <br key={index} />
    ) : (
      // 공백도 &nbsp;를 사용하여 보존 (별도의 클래스 없이 동일하게 처리)
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    )
  );

  const text2 = "Here is a list of their availability:\n- Andrew: 11 am to 3 pm\n- Joanne: noon to 2 pm, and 3:30 pm to 5 pm\n- Hannah: noon to 12:30 pm, and 4 pm to 6 pm\n\nBased on their availability, there is a 30-minute\nwindow where all three of them are available,\nwhich is from 4 pm to 4:30 pm. So, the meeting\ncan be scheduled at 4 pm.  ";
  const animatedText2 = text2.split("").map((char, index) =>
    char === "\n" ? (
      <br key={index} />
    ) : (
      // 공백도 &nbsp;를 사용하여 보존 (별도의 클래스 없이 동일하게 처리)
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    )
  );

  const text3 = "Andrew: 11 am - 3 pm\nJoanne: 12 pm - 2 pm, 3:30 pm - 5 pm\nHannah: 12 pm - 12:30 pm, 4 pm - 6 pm\n\nCommon availability for a 30-minute meeting: 12\npm - 12:30 pm  ";
  const animatedText3 = text3.split("").map((char, index) =>
    char === "\n" ? (
      <br key={index} />
    ) : (
      // 공백도 &nbsp;를 사용하여 보존 (별도의 클래스 없이 동일하게 처리)
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    )
  );

  return (
    <section className={`hero ${isSidebarOpen ? "" : "expanded"}`}>

      <button className="rel">Release</button>

      <h1>
        GPT-4 is OpenAI’s most<br />advanced system, producing<br />
        safer and more useful responses
      </h1>

      <div className="buttons">
        <button className="btn1">
          Try on ChatGPT Plus <GoArrowUpRight className="btn-icon1" />
        </button>

        <button className="btn2">
          View GPT-4 research <IoIosArrowForward className="btn-icon2" />
        </button>
      </div>
      <div className="audio-wrapper">
      <div className="audio-container">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <span className="audio-text">Listen to article</span>
        <span className="audio-time">1:37</span>
        <div className="share-container">
         <button className="share-button" onClick={copyLink}>
          <span className="share-icon"><PiLinkSimpleBold /></span>
          <span className="share-text">Share</span>
         </button>
         {copied && <div className="copy-message">Copied</div>}
        </div>
      </div>
      </div>

      <div className="image-container">
        <img src={gptImage} alt="GPT-4" className="image" />
      </div>

    <div className="container-box">
    <p className="text">
    GPT-4 can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities.
    </p>

    <div className="menu-container">
    <nav className="menu">
    <ul>
    {["Creativity", "Visual input", "Longer context"].map((item, index) => (
        <li
        key={index}
        ref={(el) => (menuRefs.current[index] = el)}
        onClick={() => {
            setActiveIndex(index);
            setSelectedDescription(descriptions[index]);
        }}
        >
        <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
    ))}
    </ul>
    <div className="menu-line"></div>
    <div className="active-indicator"></div>
    </nav>
    </div>

    <div className="description-container">
    <p className="menu-description">{selectedDescription}</p>
    <div className="menu-box">
    <div className="box-section top-section">
    <strong>Input</strong><br /><br />
    Explain the plot of Cinderella in a sentence where each word has to begin with the next letter in the alphabet from A to Z, without repeating any letters.
    </div>
    <div className="box-divider"></div>
    <div className="box-section bottom-section">
    <strong>Output</strong><br /><br />
    <span className="highlight">
        {animatedText}
    </span>
    </div>
    </div>
    </div>
    </div> 

    <div className="container-box">
      <p className="text">
        GPT-4 surpasses GPT-3.5 in its advanced reasoning capabilities.
      </p>
      <div className="version-container">
       <div className="version-group">
       <h2 className="left-title">GPT-3.5</h2>
       <div className="left-box">
        <div className="box-section top-section">
         <strong>Input</strong><br />
         Andrew is free from 11 am to 3 pm, Joanne is free from noon to 2 pm and then 3:30 pm to 5 pm. Hannah is available at noon for half an hour, and then 4 pm to 6 pm. What are some options for start times for a 30 minute meeting for Andrew, Hannah, and Joanne?
        </div>
        <div className="box-divider"></div>
        <div className="box-section bottom-section">
         <strong>Output</strong><br /><br />
         <span className="highlight"> {animatedText2} </span>
        </div>
       </div>
       </div>
       <div className="version-group">
       <h2 className="right-title">GPT-4</h2>
       <div className="right-box">
        <div className="box-section top-section-g">
         <strong>Input</strong><br />
         Andrew is free from 11 am to 3 pm, Joanne is free from noon to 2 pm and then 3:30 pm to 5 pm. Hannah is available at noon for half an hour, and then 4 pm to 6 pm. What are some options for start times for a 30 minute meeting for Andrew, Hannah, and Joanne?
        </div>
        <div className="box-divider-g"></div>
        <div className="box-section bottom-section-g">
         <strong style={{ color: "#40e14d" }}>Output</strong><br /><br />
         <span className="highlight-g"> {animatedText3} </span>
        </div>
        </div>
       </div>
      </div>
    </div>

    <div className="container-box">
      <p className="text">
      GPT-4 outperforms GPT-3.5 by scoring in higher approximate percentiles among test-takers.
      </p>
      <div className="rank">
        <div className="uniform-rank">
        <p className="rank-title">Uniform Bar Exam</p>
        <div className="rank-container">
            <div className="rank-3.5">
            <span className="rank-number">10th</span>
            <p className="rank-ver">GPT-3.5</p>
            </div>
            <div className="rank-4">
            <span className="rank-number">90th</span>
            <p className="rank-ver">GPT-4</p>
            </div>
        </div>
        </div>

        <div className="biology-rank">
        <p className="rank-title">Biology Olympiad</p>
        <div className="rank-container">
            <div className="rank-3.5">
            <span className="rank-number">31st</span>
            <p className="rank-ver">GPT-3.5</p>
            </div>
            <div className="rank-4">
            <span className="rank-number">99th</span>
            <p className="rank-ver">GPT-4 (with vision)</p>
            </div>
        </div>
        </div>
      </div>
    </div>
     
      <p className="text2">
      Following the research path from GPT, GPT-2, and GPT-3, our deep learning approach leverages more data and more computation to create increasingly sophisticated and capable language models.
      </p>

    </section>
  );
}

export default Hero;
