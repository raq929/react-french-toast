import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
    return (
      <div>
        <h2 className="alt-header">About</h2>
        <p>
          This is game called French Toast. It tries to learn how to guess what you're thinking of. 
        </p>
        <p>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
        </p>
      </div>
    );
};

export default AboutPage;
