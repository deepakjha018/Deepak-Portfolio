import { motion } from "framer-motion"


function Background(){


return (

<div className="fixed inset-0 -z-10 overflow-hidden">


{/* Base Dark */}

<div

className="
absolute
inset-0
bg-[#050816]
"

/>


{/* Grid */}

<div

className="

absolute
inset-0

bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]

bg-[size:60px_60px]

"

/>



{/* Cyan Orb */}

<motion.div

animate={{

x:[0,100,0],

y:[0,80,0],

scale:[1,1.2,1]

}}

transition={{

duration:12,

repeat:Infinity,

ease:"easeInOut"

}}

className="

absolute

top-20
left-20

w-72
h-72

bg-cyan-500/20

rounded-full

blur-[120px]

animate-pulse

"

/>



{/* Purple Orb */}

<motion.div

animate={{

x:[0,-120,0],

y:[0,-70,0],

scale:[1,1.3,1]

}}

transition={{

duration:15,

repeat:Infinity,

ease:"easeInOut"

}}

className="

absolute

bottom-20
right-20

w-96
h-96

bg-purple-600/20

rounded-full

blur-[140px]

animate-pulse

"

/>

{/* Floating AI Particles */}

{

[...Array(25)].map((_,i)=>(


<motion.span

key={i}

className="

absolute

w-1

h-1

rounded-full

bg-cyan-400

shadow-[0_0_10px_#22d3ee]

"


style={{

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`

}}


animate={{

y:[0,-40,0],

opacity:[.2,1,.2]

}}


transition={{

duration:

Math.random()*5+5,


repeat:Infinity,


delay:

Math.random()*5

}}


/>


))

}

</div>


)

}


export default Background