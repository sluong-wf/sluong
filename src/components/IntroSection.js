import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const IntroSection = ({ name, title, info }) => {
    const [expanded, setExpanded] = useState(false);

    const shortBlurb = "Hi there! I'm a Software Engineer with a passion for building projects and solving complex problems. I hold a Master's and Bachelor's degree in Computer Science and have 4 years of industry experience.";
    
    const fullBlurb = `Hi there! I'm a Software Engineer with a passion for building projects and solving complex problems. I hold a Master's and Bachelor's degree in Computer Science and have 4 years of industry experience working on backend and frontend systems. I love exploring new technologies and bringing ideas to life—check out some of my projects on `;

    const additionalInfo = `Outside of coding, I enjoy playing sports, practicing martial arts, and creating digital art through drawing, painting, and design. Always excited to learn, create, and collaborate! 🚀`;

    return (
        <div className="about-container">
            {/* <h1 className="name">{name}</h1>
            <h3 className="title">{title}</h3> */}

            <div className="blurb-box">
                <p className="blurb-text">
                    {expanded ? (
                        <>
                            {fullBlurb} 
                            <a href="https://github.com/sluong-wf" target="_blank" rel="noopener noreferrer">
                                GitHub.
                            </a>
                            <br /><br />
                            {additionalInfo}
                        </>
                    ) : (
                        shortBlurb
                    )}
                </p>
                <button 
                    onClick={() => setExpanded(!expanded)} 
                    className="expand-btn"
                >
                    {expanded ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </button>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                .about-container {
                    text-align: center;
                }

                .name {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .title {
                    font-size: 1.5rem;
                    font-weight: normal;
                    margin-bottom: 20px;
                    color: #555;
                }

                .blurb-box {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: left;
                }

                .blurb-text {
                    flex-grow: 1;
                    margin: 0;
                    font-size: 1rem;
                    color: #333;
                }

                .expand-btn {
                    background: none;
                    border: none;
                    color: #007bff;
                    font-size: 18px;
                    cursor: pointer;
                    transition: transform 0.2s;
                    margin-left: 10px;
                }

                .expand-btn:hover {
                    transform: scale(1.2);
                }

                a {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default IntroSection;
