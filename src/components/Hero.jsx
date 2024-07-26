import { styles } from '../styles';
import { motion } from 'framer-motion';
import { Html } from '@react-three/drei';
import { ComputersCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';
import { linkedinv2 } from '../assets';
import { githubv2 } from '../assets';

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto relative">
      <div className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl flex mx-auto 
      flex-row items-start gap-5`}>
        <div className="items-center justify-center flex flex-col mt-5">
          <div className="h-5 w-5 bg-[#915eff] rounded-full" />
          <div className="h-40 sm:h-80 w-1 violet-gradient" />
        </div>

        <div className="z-20">
          <div className={`${styles.heroAltText}`}>
          <Typewriter
            words={['Hey, I\'m Seb.']}
            loop={5}
            cursor
            cursorColor='#915eff'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1500}
          />
          </div>
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Seb</span>
          </h1> */}
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            A Software Engineer with a passion <br className="sm:block hidden"/> for frontend development.
          </p>
          <div className="flex gap-4 mt-3">
          <a href="https://www.linkedin.com/in/sebastianbury" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinv2}
                alt="Linkedin-Profile-SebastianBury"
                className="w-[50px] h-[50px] xs:w-[80px] xs:h-[80px] social-color icon-glow cursor-pointer"
              />
          </a>
          <a href="https://github.com/SebastianBuryy" target="_blank" rel="noopener noreferrer">
              <img
                src={githubv2}
                alt="Github-Profile-SebastianBury"
                className="w-[60px] h-[60px] xs:w-[90px] xs:h-[90px] -mt-1 social-color icon-glow cursor-pointer"
              />
          </a>
          </div>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="w-full xs:bottom-[5px] absolute
      bottom-32 flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex items-start justify-center p-2 hover:shadow-glow">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary hover:shadow-glow"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero;