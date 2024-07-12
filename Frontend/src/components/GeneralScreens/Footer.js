import React from 'react';
import '../../Css/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                {/* Your footer content here */}
            </div>
            <div className="copyright">
                <p className="copyright-blog">© 2024 Uday Suggula, Harshit, Nitin, Uday Kiran. All Rights Reserved</p>
                <p className="github-link">
                    <a href="https://github.com/Y-Nitin/Blogging_Platform" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
