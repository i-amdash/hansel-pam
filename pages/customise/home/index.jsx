import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../../../config/motion';

import state from '../store';
import Image from 'next/image';
import CustomButton from '../../../components/CustomButton';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    {/* <Image 
                        src={'/ai.png'}
                        alt='logo'
                        width={80}
                        height={80}
                        className='w-8 h-8 object-contain'
                    /> */}
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <motion.h2 
                        
                        className='h2 mt-16 '>
                            get <br className='xl:block hidden'/> <span className="text-accent"> creative. </span> 
                        </motion.h2>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-white text-base' >
                            create your unique and exclusive shirt with our 3D customization tool 
                            <strong> unleash your imagination </strong> { " " }
                            and define your own style.
                        </p>
                        <CustomButton 
                            type='filled'
                            title='customize..'
                            handleClick={() => state.intro = false}
                            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home;