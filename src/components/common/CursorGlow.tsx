import { motion } from "framer-motion"
import { useEffect, useState } from "react"


function CursorGlow(){

const [isDesktop,setIsDesktop]=useState(false)

const [position,setPosition]=useState({
x:0,
y:0
})


useEffect(()=>{

const check=()=>{

setIsDesktop(window.innerWidth > 768)

}

check()

window.addEventListener("resize",check)

return()=>window.removeEventListener("resize",check)

},[])



useEffect(()=>{

if(!isDesktop) return


const move=(e:MouseEvent)=>{

setPosition({
x:e.clientX,
y:e.clientY
})

}


window.addEventListener("mousemove",move)

return()=>{

window.removeEventListener("mousemove",move)

}

},[isDesktop])



if(!isDesktop) return null


return(

<>

<motion.div

className="
fixed
top-0
left-0
w-20
h-20
rounded-full
pointer-events-none
z-[999]
border
border-cyan-400/40
shadow-[0_0_40px_rgba(34,211,238,.6)]
"

animate={{
x:position.x-40,
y:position.y-40
}}

transition={{
type:"spring",
stiffness:120,
damping:20
}}

/>


<motion.div

className="
fixed
top-0
left-0
w-3
h-3
rounded-full
pointer-events-none
z-[1000]
bg-cyan-300
shadow-[0_0_20px_#22d3ee]
"

animate={{
x:position.x-6,
y:position.y-6
}}

transition={{
duration:.05
}}

/>

</>

)

}

export default CursorGlow