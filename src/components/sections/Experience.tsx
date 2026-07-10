import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import { motion } from "framer-motion"

import { experiences } from "../../data/experience"



function Experience(){


return(

<section id="experience">


<Container>


<SectionTitle

title="Experience"

subtitle="Internships and professional journey"

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
staggerChildren:.25
}

}

}}

className="

relative

space-y-8

max-w-4xl

mx-auto


before:content-['']

before:absolute

before:-left-8

before:top-0

before:h-full

before:w-[2px]

before:bg-cyan-400/30

"

>


{


experiences.map((item)=>(


<motion.div

key={item.company}

variants={{

hidden:{
opacity:0,
x:-80
},

show:{
opacity:1,
x:0
}

}}

transition={{
duration:.7
}}

className="relative"

>
<motion.div

animate={{

scale:[1,1.3,1]

}}

transition={{

duration:2,

repeat:Infinity

}}

className="

absolute

-left-10

top-8

hidden

md:block

w-5

h-5

rounded-full

bg-cyan-400

shadow-[0_0_30px_#22d3ee]

"

/>

<Card

className="

relative

overflow-hidden

group

"

>
<div

className="

absolute

inset-0

bg-gradient-to-r

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

z-10

flex

justify-between

flex-wrap

gap-4

"

>


<div>


<h3

className="

text-2xl

font-bold

text-white

group-hover:text-cyan-400

transition

duration-300

"

>

{item.role}

</h3>


<h4 className="text-xl mt-2">

{item.company}

</h4>


</div>



<span 

className="

h-fit

px-4

py-2

rounded-full

bg-purple-500/10

border

border-purple-400/30

text-purple-300

"

>


{item.date}


</span>


</div>




<ul 

className="

relative

z-10

mt-6

space-y-3

"

>


{

item.points.map(point=>(


<li

key={point}

className="

text-gray-400

hover:text-white

transition

duration-300

"

>

🚀 {point}

</li>


))

}


</ul>


</Card>


</motion.div>


))


}


</motion.div>



</Container>


</section>


)


}


export default Experience