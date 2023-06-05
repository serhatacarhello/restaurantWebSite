import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
        <p>&copy; 2023 burger16.com</p>
      <div className="socialMedia">
        <InstagramIcon sx={{ fontSize: 24 }} />
        <TwitterIcon sx={{ fontSize: 24 }} />
        <FacebookIcon sx={{ fontSize: 24 }} />
      </div>
    </div>
  );
}

export default Footer;
