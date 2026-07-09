import { TypeAnimation } from "react-type-animation"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import Button from "../ui/Button"

import FadeIn from "../animations/FadeIn"

import profile from "../../assets/profile/deepak-profile.jpeg"

import { motion } from "framer-motion"

function Hero(){


return(

<motion.section

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1
}}

id="home"

className="

min-h-[90vh]

flex

items-center

justify-center

px-6

pt-20

"

>


<div

className="

max-w-7xl

w-full

grid

md:grid-cols-2

gap-16

items-center

"

>


{/* LEFT CONTENT */}


<FadeIn>


<p className="text-cyan-400 text-xl mb-4">

Hi 👋 I'm

</p>


<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8,
delay:.3
}}

className="

text-5xl

md:text-7xl

font-bold

gradient-text

mb-6

"

>

Deepak Kumar Jha

</motion.h1>



<TypeAnimation


sequence={[


"AI & Data Science Engineer",

2000,


"Machine Learning Developer",

2000,



"Problem Solver",

2000,


]}


speed={50}


repeat={Infinity}


className="

text-2xl

text-white

font-semibold

"

/>



<p

className="

text-gray-400

mt-6

max-w-xl

text-lg

"

>


Building intelligent AI-powered applications using Machine Learning,
Deep Learning and modern software technologies.


</p>



<div className="flex gap-5 mt-8">


<Button>

View Projects

</Button>


<a

href="/Deepak-Kumar-Jha-Resume.pdf"

>


<Button>

Resume

</Button>


</a>


</div>



<div

className="

flex

gap-6

mt-8

text-cyan-400

"

>


<FaGithub size={30}/>

<FaLinkedin size={30}/>

<MdEmail size={30}/>


</div>


</FadeIn>




{/* RIGHT IMAGE */}


<FadeIn delay={0.3}>


<div

className="

relative

flex

justify-center

items-center

"

>


{/* Outer Aura */}

<motion.div

animate={{

scale:[1,1.08,1],

opacity:[0.5,0.9,0.5]

}}

transition={{

duration:4,

repeat:Infinity,

ease:"easeInOut"

}}

className="

absolute

w-[390px]

h-[390px]

rounded-full

bg-gradient-to-r

from-cyan-400

via-blue-500

to-purple-600

blur-3xl

opacity-50

"

/>



{/* Rotating Gradient Ring */}

<motion.div


animate={{

rotate:360

}}


transition={{

duration:20,

repeat:Infinity,

ease:'linear'

}}


className="

absolute

w-[365px]

h-[365px]

rounded-full

bg-gradient-to-r

from-cyan-400

via-transparent

to-purple-500

p-[3px]

"

>


<div

className="

w-full

h-full

rounded-full

bg-[#050816]

"

/>


</motion.div>




{/* Profile Image */}

<motion.div


animate={{

y:[0,-12,0]

}}


whileHover={{

scale:1.06

}}


transition={{

duration:5,

repeat:Infinity,

ease:'easeInOut'

}}


className="

relative

z-10

rounded-full

p-2

bg-white/5

backdrop-blur-md

"

>


<img

src={profile}

className="

w-80

h-80

rounded-full

object-cover

shadow-[0_0_60px_rgba(34,211,238,.45)]

"

/>


</motion.div>




{/* Small Shine Dot */}

<motion.div

animate={{

opacity:[0.2,1,0.2],

scale:[1,1.5,1]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="

absolute

top-12

right-28

w-3

h-3

rounded-full

bg-cyan-300

shadow-[0_0_20px_#22d3ee]

"

/>


</div>


</FadeIn>



</div>


</motion.section>


)


}


export default Hero