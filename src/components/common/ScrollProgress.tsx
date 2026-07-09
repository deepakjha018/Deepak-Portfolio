import { motion, useScroll } from "framer-motion"


function ScrollProgress(){


const { scrollYProgress } = useScroll()


return(

<motion.div

className="

fixed

top-0

left-0

right-0

h-1

z-[9999]

origin-left

bg-gradient-to-r

from-cyan-400

to-purple-500

shadow-[0_0_20px_rgba(34,211,238,.8)]

"


style={{

scaleX:scrollYProgress

}}


/>

)


}


export default ScrollProgress