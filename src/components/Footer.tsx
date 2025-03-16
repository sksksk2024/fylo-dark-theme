import { motion } from 'framer-motion';
import FooterSection from './utils/FooterSection';
import Facebook from './utils/Facebook';
import Twitter from './utils/Twitter';
import Insta from './utils/Insta';
import logo from './../images/logo.svg';
import location from './../images/icon-location.svg';
import phone from './../images/icon-phone.svg';
import email from './../images/icon-email.svg';

const menuItems: { links: string[] }[] = [
  {
    links: ['About Us', 'Jobs', 'Press', 'Blog'],
  },
  {
    links: ['Contact Us', 'Terms', 'Privacy'],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="w-100dvw mx-auto p-32P xs:p-64P space-y-10 bg-dark-blue-footer"
    >
      <motion.img
        src={logo}
        className="w-3/4 px-32P max-w-container-300 mt-160M"
        alt="Fylo"
        initial={{ opacity: 0, x: '50dvw' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="flex flex-col justify-center items-start gap-10 w-full xl:flex-row lg:justify-start"
        initial={{ opacity: 0, x: '50dvw' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-center items-start space-x-4 px-32P lg:max-w-container-500">
          <img
            src={location}
            className="relative top-4I w-32W h-32H"
            alt="location"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5 px-32P lg:justify-start lg:items-start lg:max-w-container-500">
          <div className="flex space-x-4 w-full">
            <img src={phone} alt="phone-number" />
            <p>+1-543-123-4567</p>
          </div>

          <div className="flex space-x-4">
            <img src={email} alt="email" />
            <p>example@fylo.com</p>
          </div>
        </div>

        {/* Footer Li's */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8 w-full lg:max-w-container-500">
          {menuItems.map((section, index) => (
            <FooterSection key={index} links={section.links} />
          ))}

          {/* Social Links */}
          <ul className="flex justify-center items-center gap-6 relative max-w-container-1200 w-full">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Insta />
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
