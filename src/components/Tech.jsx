import React from 'react';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant} from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <div className="mb-20">
        <p className={styles.sectionSubText}>Software that I use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </div>
    </motion.div>
    <div className="flex flex-wrap flex-row gap-10 justify-center">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Tech, "");