import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id="footer-img" src={assets.flogo} />
          <p>
            Discover the ultimate pizza experience at Fresh Bite Pizza! Our
            passion for quality and flavor is evident in every bite. We use only
            the freshest ingredients and traditional recipes to create pizzas
            that are both delicious and satisfying
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9170152-16280</li>
            <li>ankitdhatterwal09@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 Fresh Bite Pizza. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
