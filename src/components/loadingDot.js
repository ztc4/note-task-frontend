import {motion} from "framer-motion"

function LoadingDot({num}){
    
    return( 
<motion.div
    style={{
      borderRadius: '50%',
      width: 6,
      height: 6,
      backgroundColor: '#333',
    }}
    initial={{
        opacity:0.3,
        y:12
    }}
    animate={{
      scale: [1, 1.5, 1],
      opacity:1
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay:num
    }}
    />)
}

export default LoadingDot;