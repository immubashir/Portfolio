import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className= "xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src = {icon} alt = {title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary tect-[17px] max-w-3xl leading-[30px]"
    >
      Welcome to my digital realm! I'm a full stack developer fueled by a passion for creating innovative solutions that seamlessly bridge the gap between front-end and back-end development. With a strong foundation in various programming languages including C, C++ and Python and frameworks, I thrive in crafting robust and user-friendly applications. From designing captivating user interfaces to architecting efficient databases, I love immersing myself in every aspect of the development process. Join me on this coding adventure, where I strive to build dynamic and cutting-edge solutions that enhance the digital landscape. Let's transform ideas into reality, one line of code at a time!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard
          key = {service.title} index = {index} {...service}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");