import Card from "../ui/Card"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import { motion } from "framer-motion"

import { 
FaCode,
FaBrain,
FaTools
} from "react-icons/fa"

const skillGroups = [

{

title:"Languages",

icon:<FaCode/>,

items:[

"Python",

"Java",

"C++",

"JavaScript",

"TypeScript",

"SQL"

]

},


{

title:"AI & Data Science",

icon:<FaBrain/>,

items:[

"Machine Learning",

"Deep Learning",

"TensorFlow",

"Scikit-Learn",

"Pandas",

"NumPy",

"Computer Vision"

]

},


{

title:"Tools & Technologies",

icon:<FaTools/>,

items:[

"React",

"Django",

"FastAPI",

"Git",

"GitHub",

"MySQL",

"MongoDB",

"VS Code"

]

}

]


function Skills(){


return(

<section id="skills">


<Container>


<SectionTitle

title="Skills"

subtitle="Technologies I work with"

/>



<motion.div

initial="hidden"

whileInView="show"

viewport={{
once:true,
amount:.2
}}

variants={{

hidden:{},

show:{

transition:{
staggerChildren:.2
}

}

}}

className="

grid

grid-cols-1

md:grid-cols-3

gap-8

"

>


{


skillGroups.map((group)=>(


<motion.div

key={group.title}

variants={{

hidden:{
opacity:0,
y:50
},

show:{
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

relative

overflow-hidden

group

"

>
    <motion.div

className="

absolute

inset-0

bg-gradient-to-br

from-cyan-400/10

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

z-10

flex

items-center

gap-4

mb-8

"

>


<motion.div

whileHover={{

rotate:360,

scale:1.2

}}

transition={{

duration:.6

}}

className="

text-3xl

text-cyan-400

drop-shadow-[0_0_15px_#22d3ee]

"

>


{group.icon}


</motion.div>



<h3

className="

text-2xl

font-bold

text-white

"

>

{group.title}

</h3>


</div>




<div

className="

relative

z-10

flex

flex-wrap

gap-3

"

>


{


group.items.map(skill=>(


<motion.span

whileHover={{

scale:1.12,

y:-5

}}

whileTap={{

scale:.95

}}

key={skill}

className="

px-4

py-2

rounded-full

bg-cyan-500/10

border

border-cyan-400/30

text-gray-300

hover:bg-cyan-400/20

hover:shadow-[0_0_20px_rgba(34,211,238,.5)]

transition

"

>


{skill}


</motion.span>


))


}


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


export default Skills