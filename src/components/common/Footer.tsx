import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"


function Footer(){


const year = new Date().getFullYear()


return(

<footer className="relative border-t border-cyan-500/20 py-10">


<div className="max-w-7xl mx-auto px-6">


<motion.div

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}

className="
flex flex-col items-center gap-5
text-center
"

>


<h2 className="
text-3xl font-bold 
bg-gradient-to-r from-cyan-400 to-purple-500 
text-transparent bg-clip-text
">

Deepak.dev

</h2>


<p className="text-gray-400 max-w-xl">

Building intelligent AI-powered solutions with Machine Learning,
Data Science and modern software technologies.

</p>



<div className="flex gap-5">


<a
href="https://github.com/deepakjha018"
target="_blank"
className="text-cyan-400 hover:scale-125 transition"
>

<FaGithub size={26}/>

</a>


<a
href="https://www.linkedin.com/in/deepak-kumar-jha-a648553288"
target="_blank"
className="text-cyan-400 hover:scale-125 transition"
>

<FaLinkedin size={26}/>

</a>


<a
href="mailto:deepak2004jha@gmail.com"
className="text-cyan-400 hover:scale-125 transition"
>

<MdEmail size={28}/>

</a>


</div>


<div className="text-gray-500 text-sm flex items-center gap-2 mt-5">

© {year} Deepak Kumar Jha. Built with

<FaHeart size={15} className="text-cyan-400"/>

React + TypeScript

</div>


</motion.div>


</div>


</footer>


)


}


export default Footer