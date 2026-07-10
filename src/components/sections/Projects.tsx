import Card from "../ui/Card"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import { projects } from "../../data/projects"

import { FaGithub } from "react-icons/fa"

import { ExternalLink } from "lucide-react"

import { motion } from "framer-motion"

function Projects(){


return(

<section id="projects">


<Container>


<SectionTitle

title="Projects"

subtitle="Building intelligent solutions with AI, data, and modern technologies"

/>


<motion.div

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}

variants={{

hidden:{},

visible:{

transition:{
staggerChildren:.2
}

}

}}

className="
grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-10

"
>


{

projects.map((project)=>(


<motion.div

key={project.title}

variants={{

hidden:{
opacity:0,
y:60
},

visible:{
opacity:1,
y:0
}

}}

transition={{
duration:.6
}}

>


<Card

className="
group
relative
overflow-hidden
"

>
<motion.div

className="
absolute
inset-0

bg-gradient-to-br
from-cyan-500/10
to-purple-500/10

opacity-0

group-hover:opacity-100

transition

duration-500

"

/>

<div

className="
relative
overflow-hidden
rounded-xl
mb-6
"

>


<motion.img

whileHover={{

scale:1.12

}}

transition={{

duration:.5

}}

src={project.image}

className="

h-40

w-full

object-cover

transition

duration-500

"

/>


<div

className="

absolute

inset-0

bg-gradient-to-t

from-black/70

via-transparent

to-transparent


opacity-0

group-hover:opacity-100

transition

duration-500

"

/>


</div>


<h3

className="
text-xl
font-bold
text-white
mb-3

group-hover:text-cyan-400

transition

duration-300
"

>

{project.title}

</h3>



<p 
className="
text-gray-400
leading-7
"
>

{project.description}

</p>



<div className="flex flex-wrap gap-2 mt-5">


{

project.tech.map(item=>(


<span

className="
text-cyan-400
text-sm
"

key={item}

>

#{item}


</span>


))


}


</div>



<div 

className="
flex
gap-5
mt-8
relative
z-10
"

>


<a 
href={project.github}
target="_blank"
rel="noopener noreferrer"
>

<motion.div

whileHover={{

scale:1.25,

y:-5,

rotate:8

}}

>

<FaGithub size={24}/>

</motion.div>

</a>


<a 
href={project.demo}
target="_blank"
rel="noopener noreferrer"
>

<motion.div

whileHover={{

scale:1.25,

y:-5,

rotate:-8

}}

>

<ExternalLink size={24}/>

</motion.div>

</a>


</div>



</Card>


</motion.div>


))

}


</motion.div>


</Container>


</section>


)


}


export default Projects