import { useState } from 'react';
import Typewriter from './utils/Typewriter';
import { motion, Variants } from 'framer-motion';
import work from '../images/illustration-intro.png';
import anywhere from '../images/icon-access-anywhere.svg';
import security from '../images/icon-security.svg';
import colab from '../images/icon-collaboration.svg';
import store from '../images/icon-any-file.svg';
import productive from '../images/illustration-stay-productive.png';
import arrow from '../images/icon-arrow.svg';
import quotes from '../images/bg-quotes.png';
import pers1 from '../images/profile-1.jpg';
import pers2 from '../images/profile-2.jpg';
import pers3 from '../images/profile-3.jpg';

export default function Main() {
  const imgVariants: Variants = {
    hidden: {
      rotateY: 0,
      opacity: 0,
    },
    visible: {
      rotateY: -360,
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      backgroundImage:
        'linear-gradient(120deg, rgba(101, 226, 217, 1) 30%, rgb(159, 255, 202) 50%, rgba(101, 226, 217, 1) 70%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '0% 50%',
    },
    visible: {
      backgroundPosition: ['150%', '-50%'],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const linkVariants: Variants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
    },
  };

  const linkVariantsReverse: Variants = {
    hidden: {
      scaleX: 1,
      opacity: 1,
    },
    visible: {
      scaleX: 0,
      opacity: 0,
    },
  };

  const divVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [email, setEmail] = useState('');

  // Form Errors(when email and github username are not correctly typed)
  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  // Regular Expressions(regex)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasErrors = false;
    let errors: { email: string } = { email: '' };

    // Email Validation
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address. Nice try though 😏';
      hasErrors = true;
    }

    // If there are errors, set them and prevent form submission
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    // Reset form errors if everything is fine
    setFormErrors({ email: '' });

    // Handle form submission logic
    console.log('Form submitted with:', { email });
  };

  return (
    <main
      data-testid="main"
      className="mx-auto p-32P xs:p-64P max-w-container-1200 space-y-40"
    >
      {/* INTRO */}
      <section className="flex flex-col justify-center items-center gap-10 text-center">
        <motion.img
          src={work}
          className=""
          alt="illustration-intro"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          drag={true}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        />
        <h1 className="text-xl text-white font-bold md:text-2xl">
          All your files in one secure location, accessible anywhere.
        </h1>

        <div className="relative w-full mb-32M 2xs:mb-16M xs:mb-0">
          <p className="opacity-0 text-center">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <Typewriter
            className="absolute -top-32I left-0 m-32M text-center"
            text="Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers."
          />
        </div>

        <motion.button
          className="text-center font-bold bg-cyan px-32P py-16P rounded-full w-full cursor-pointer hover:bg-cyan-300 xs:w-1/2"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
        >
          Get Started
        </motion.button>
      </section>

      {/* PERKS */}
      <section className="flex flex-col justify-center items-center gap-10 text-center">
        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <motion.img
              src={anywhere}
              alt="access you files, anywhere"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              drag={true}
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
            />
            <h2 className="text-white text-md font-bold md:text-lg">
              Access your files, anywhere
            </h2>

            <div className="relative w-full">
              <p className="opacity-0 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
              <Typewriter
                className="absolute top-0 left-0 text-center"
                text="The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere."
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <motion.img
              src={security}
              alt="Security you can trust"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              drag={true}
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
            />
            <h2 className="text-white text-md font-bold md:text-lg">
              Security you can trust
            </h2>

            <div className="relative w-full">
              <p className="opacity-0 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
              <Typewriter
                className="absolute top-0 left-0 text-center"
                text="2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <motion.img
              src={colab}
              alt="Real-time collaboration"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              drag={true}
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
            />
            <h2 className="text-white text-md font-bold md:text-lg">
              Real-time collaboration
            </h2>

            <div className="relative w-full">
              <p className="opacity-0 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
              <Typewriter
                className="absolute top-0 left-0 text-center"
                text="Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required."
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <motion.img
              src={store}
              alt="Store any type of file"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              drag={true}
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
            />
            <h2 className="text-white text-md font-bold md:text-lg">
              Store any type of file
            </h2>

            <div className="relative w-full">
              <p className="opacity-0 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
              <Typewriter
                className="absolute top-0 left-0 text-center"
                text="Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTIVE */}
      <section className="flex flex-col justify-center items-center gap-10 text-center lg:flex-row">
        <motion.img
          src={productive}
          className="w-full sm:w-3/4 lg:w-1/2"
          alt="stay-productive"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        />
        <aside className="w-full flex flex-col justify-start items-start gap-4 sm:w-3/4 lg:w-1/2">
          <h2 className="text-xl text-start font-bold md:text-2xl">
            Stay productive, wherever you are
          </h2>

          <p className="text-start">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>

          <p className="text-start">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <motion.a
            href="#"
            className="flex gap-4 relative group font-bold w-[198px]"
            initial="hidden"
            whileHover="visible"
          >
            <motion.span
              className="relative top-0 text-white w-full"
              variants={linkVariantsReverse}
              //   initial="hidden"
            >
              See how Fylo works
            </motion.span>
            <motion.img
              src={arrow}
              aria-hidden="true"
              alt=""
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              drag={true}
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
            />
            <motion.span
              className="absolute -left-[21px] top-0 text-cyan-500 w-full"
              variants={linkVariants}
              //   initial="hidden"
            >
              See how Fylo works
            </motion.span>
            {/* Animation from white to cyan when HOVERED */}
            <span className="absolute left-0 -bottom-4I w-full h-[2px] bg-white scale-x-0 duration-300 ease-in-out group-hover:scale-x-100"></span>
          </motion.a>
        </aside>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative flex flex-col justify-center items-center gap-10 text-center">
        <motion.img
          src={quotes}
          className="hidden absolute -top-48I left-0 z-0 lg:block lg:-top-32I lg:-left-16I"
          alt="quotes"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        />

        <div className="relative flex flex-col justify-center items-center gap-10 z-10 lg:flex-row">
          <motion.img
            src={quotes}
            className="absolute -top-48I left-0 z-0 lg:hidden"
            alt="quotes"
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}
          />
          <div className="relative bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className=" opacity-0 text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <motion.div
              className="absolute top-0 left-0 m-32M text-start"
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Typewriter
                text="Fylo has improved our team productivity by an order of magnitude.
      Since making the switch our team has become a well-oiled
      collaboration machine."
              />
            </motion.div>
            <div className="flex gap-4 justify-start items-center">
              <motion.img
                src={pers1}
                className="rounded-full w-48W"
                alt="person 1"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.7}
              />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">Satish Patel</h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="relative bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className=" opacity-0 text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <motion.div
              className="absolute top-0 left-0 m-32M text-start"
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Typewriter
                text="Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine."
              />
            </motion.div>
            <div className="flex gap-4 justify-start items-center">
              <motion.img
                src={pers2}
                className="rounded-full w-48W"
                alt="person 2"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.7}
              />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">
                  Bruce McKenzie
                </h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="relative bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className=" opacity-0 text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <motion.div
              className="absolute top-0 left-0 m-32M text-start"
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Typewriter
                text="Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine."
              />
            </motion.div>
            <div className="flex gap-4 justify-start items-center">
              <motion.img
                src={pers3}
                className="rounded-full w-48W"
                alt="person 3"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.7}
              />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">Iva Boyd</h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section className="relative top-160I -mt-160M flex flex-col justify-center items-center gap-10 text-center p-32P shadow-xl bg-dark-blue-email">
        <h2 className="text-xl text-start font-bold md:text-2xl">
          Get early access today
        </h2>
        <Typewriter
          className="max-w-container-800"
          text="It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you."
        />
        {/* INPUT */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 lg:flex-row w-full"
        >
          <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-2/3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="bg-white px-32P py-16P rounded-full w-full cursor-pointer peer grow input-md border-neutral-500 focus:invalid:border-light-red text-neutral-700 cursor-pointer hover:scale-[1.01] outline-none border-none"
              required
            />
            {formErrors.email && (
              <p className="absolute bottom-4I left-48I text-start text-light-red">
                {formErrors.email}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            className="text-center font-bold bg-cyan px-32P py-16P rounded-full w-full cursor-pointer hover:bg-cyan-300 lg:w-1/3"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
          >
            Get Started For Free
          </motion.button>
        </form>
      </section>
    </main>
  );
}
