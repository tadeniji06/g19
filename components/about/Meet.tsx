"use client";

import { motion } from "framer-motion";
import React from "react";

const animationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
} as const;

const textAnimationVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
} as const;

interface MeetProps {
  className?: string;
}

const Meet: React.FC<MeetProps> = ({ className = "" }) => {
  return (
    <section className={`bg-light-gray/30 py-16 ${className}`.trim()}>
      <div className='container mx-auto px-6 text-center md:text-left'>
        <motion.h2
          className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={animationVariants}
        >
          MEET GARETH WILLIAMS
        </motion.h2>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto'>
          {/* Text Section */}
          <motion.div
            className='w-full md:w-2/3 text-gray-700 leading-relaxed'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textAnimationVariants}
          >
            <p className='mb-4'>
              Gareth Williams is the Director of G19 Global
              Consultancy, bringing over 30 years of experience in
              device distribution and the global recommerce space.
              Throughout his career, he has played a key role in
              shaping the secondary market for telecom equipment,
              guiding businesses in asset recovery, resale strategy,
              and international distribution.
            </p>
            <p className='mb-4'>
              His expertise spans the design of recommerce
              infrastructures, including warehouse operations, supply
              chain optimization, and technology integration. Gareth's
              achievements include leading large-scale distribution
              projects across multiple continents, building efficient
              operational frameworks, and advising global partners on
              sustainable, scalable business growth.
            </p>
            <p>
              With a reputation for integrity, global reach, and
              practical solutions, Gareth continues to support
              businesses and investors seeking to unlock value in used
              telecoms and recommerce markets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Meet;