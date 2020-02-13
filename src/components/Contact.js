import React, {Component} from "react";

export class Contact extends Component {
    render() {
        return(
            <footer id="contact">
                <div className="bottom overlays">
                    <svg className="contact-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fillOpacity="1" d="M0,160L20,144C40,128,80,96,120,112C160,128,200,192,240,208C280,224,320,192,360,170.7C400,149,440,139,480,149.3C520,160,560,192,600,186.7C640,181,680,139,720,128C760,117,800,139,840,133.3C880,128,920,96,960,106.7C1000,117,1040,171,1080,181.3C1120,192,1160,160,1200,133.3C1240,107,1280,85,1320,80C1360,75,1400,85,1420,90.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
                    </svg>
                </div>
                <span>Coded & Designed with <i className="fas fa-heart"></i> by Danielle Rubin | Copyright &copy; 2020</span>
                <div className="contact-links">
                    <a href="https://github.com/dlhrubin" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dlhrubin/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:dlhrubin@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="far fa-envelope"></i>
                        <span>Email</span>
                    </a>
                </div>
            </footer>
        )
    }
}