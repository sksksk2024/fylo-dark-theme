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

  return (
    <main className="mx-auto p-32P xs:p-64P max-w-container-1200 space-y-40">
      {/* INTRO */}
      <section className="flex flex-col justify-center items-center gap-10 text-center">
        <motion.img
          src={work}
          className=""
          alt="illustration-intro"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        />
        <h1 className="text-xl text-white font-bold md:text-2xl">
          All your files in one secure location, accessible anywhere.
        </h1>

        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <button className="text-center font-bold bg-cyan px-32P py-16P rounded-full w-full cursor-pointer hover:bg-cyan-300 xs:w-1/2">
          Get Started
        </button>
      </section>

      {/* PERKS */}
      <section className="flex flex-col justify-center items-center gap-10 text-center">
        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <img src={anywhere} alt="access you files, anywhere" />
            <h2 className="text-white text-md font-bold md:text-lg">
              Access your files, anywhere
            </h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <img src={security} alt="Security you can trust" />
            <h2 className="text-white text-md font-bold md:text-lg">
              Security you can trust
            </h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <img src={colab} alt="Real-time collaboration" />
            <h2 className="text-white text-md font-bold md:text-lg">
              Real-time collaboration
            </h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-container-300">
            <img src={store} alt="Store any type of file" />
            <h2 className="text-white text-md font-bold md:text-lg">
              Store any type of file
            </h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTIVE */}
      <section className="flex flex-col justify-center items-center gap-10 text-center lg:flex-row">
        <img
          src={productive}
          className="w-full sm:w-3/4 lg:w-1/2"
          alt="stay productive"
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

          <a
            href="#"
            className="flex gap-4 relative group text-white font-bold w-[198px]"
          >
            See how Fylo works
            <img src={arrow} aria-hidden="true" alt="" />
            {/* Animation from white to cyan when HOVERED */}
            <span className="absolute left-0 -bottom-4I w-full h-[2px] bg-white scale-x-0 duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </aside>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative flex flex-col justify-center items-center gap-10 text-center">
        <img
          src={quotes}
          className="hidden absolute -top-48I left-0 z-0 lg:block lg:-top-32I lg:-left-16I"
          alt="quotes"
        />

        <div className="relative flex flex-col justify-center items-center gap-10 z-10 lg:flex-row">
          <img
            src={quotes}
            className="absolute -top-48I left-0 z-0 lg:hidden"
            alt="quotes"
          />
          <div className="bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className="text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <img src={pers1} className="rounded-full w-48W" alt="person 1" />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">Satish Patel</h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className="text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <img src={pers2} className="rounded-full w-48W" alt="person 2" />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">
                  Bruce McKenzie
                </h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-blue-testimonials p-32P rounded-10BR max-w-container-400 space-y-5">
            <p className="text-start">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <img src={pers3} className="rounded-full w-48W" alt="person 3" />
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-start font-bold uppercase">Iva Boyd</h3>
                <p className="text-start">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section className="flex flex-col justify-center items-center gap-10 text-center p-32P shadow-xl bg-dark-blue-email">
        <h2 className="text-xl text-start font-bold md:text-2xl">
          Get early access today
        </h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        {/* INPUT */}
        <div className="flex flex-col justify-center items-center lg:flex-row"></div>
        button Get Started For Free
      </section>
    </main>
  );
}
