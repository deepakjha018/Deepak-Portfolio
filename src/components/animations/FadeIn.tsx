import type { ReactNode } from "react"

import { motion } from "framer-motion"


interface FadeProps {

children: ReactNode

delay?: number

className?: string

}


function FadeIn({

children,

delay = 0,

className

}: FadeProps){


return (

<motion.div


initial={{

opacity:0,

y:40

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

duration:0.7,

delay,

ease:"easeOut"

}}


viewport={{

once:true

}}


className={className}


>


{children}


</motion.div>


)

}


export default FadeIn