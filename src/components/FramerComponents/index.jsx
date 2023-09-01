import React from 'react'
import { motion } from 'framer-motion'

export const FadeInComponent = () => {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1}}
        className="bg-black text-white"
    >
        TEST FADE IN
    </motion.div>
  )
}
