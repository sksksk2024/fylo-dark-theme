import { motion, Variants } from 'framer-motion';

const listVariants: Variants = {
  hover: {
    scale: [1, 1.05, 1.25, 1.1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

type FooterSectionProps = {
  links: string[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ links }) => (
  <ul className="flex flex-col justify-start items-start gap-4 mx-32M mb-0">
    {links.map((link, index) => (
      <motion.li
        key={index}
        className="hover:text-cyan-500 cursor-pointer w-[5.06rem]"
        variants={listVariants}
        initial={{ scale: 1 }}
        whileHover="hover"
      >
        {link}
      </motion.li>
    ))}
  </ul>
);

export default FooterSection;
