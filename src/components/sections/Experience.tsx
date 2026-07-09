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


experiences.map((item,index)=>(


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

initial={{
scale:0
}}

whileInView={{
scale:1
}}

transition={{
duration:.5
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

shadow-[0_0_25px_rgba(34,211,238,.8)]

"

/>

<Card>


<div className="flex justify-between flex-wrap">


<div>


<h3

className="
text-2xl
font-bold
text-cyan-400
"

>

{item.role}

</h3>


<h4 className="text-xl mt-2">

{item.company}

</h4>


</div>



<span className="text-purple-400">


{item.date}


</span>


</div>




<ul className="mt-5 space-y-2">


{

item.points.map(point=>(


<li

key={point}

className="text-gray-400"

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