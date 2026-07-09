import type { ReactNode } from "react"
import { motion } from "framer-motion"


interface Props{

children:ReactNode
className?:string

}


function Card({
children,
className=""
}:Props){


return(

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:0.2
}}

transition={{
duration:0.6,
ease:"easeOut"
}}


whileHover={{
y:-10,
scale:1.02
}}


className={`

glass
card-hover
rounded-3xl
p-8
border
border-white/10

${className}

`}


>


{children}


</motion.div>


)


}


export default Card