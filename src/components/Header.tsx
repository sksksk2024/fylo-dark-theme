import { motion, Variants } from 'framer-motion';
import logo from '../images/logo.svg';

export default function Header() {
  const optionVariants: Variants = {
    hidden: {
      x: '10dvw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  const listVariants: Variants = {
    hidden: {
      scale: 1,
    },
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

  const imgVariants: Variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.header
      className="mx-auto flex flex-col justify-between items-start p-48P space-y-4 max-w-container-1200 xs:flex-row xs:items-center xs:p-64P xs:space-y-0"
      initial={{ opacity: 0, x: '50dvw' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        src={logo}
        className="w-144W"
        alt="Fylo"
      />
      <motion.div
        className="flex space-x-4 lg:space-x-13"
        variants={optionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="cursor-pointer hover:underline hover:text-cyan-500"
          variants={listVariants}
          initial="hidden"
          whileHover="hover"
        >
          Features
        </motion.div>
        <motion.div
          className="cursor-pointer hover:underline hover:text-cyan-500"
          variants={listVariants}
          initial="hidden"
          whileHover="hover"
        >
          Team
        </motion.div>
        <motion.div
          className="cursor-pointer hover:underline hover:text-cyan-500"
          variants={listVariants}
          initial="hidden"
          whileHover="hover"
        >
          Sign In
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
