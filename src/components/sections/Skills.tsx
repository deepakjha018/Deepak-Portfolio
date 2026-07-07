import Card from "../ui/Card"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import FadeIn from "../animations/FadeIn"



const skillGroups = [

{

title:"Languages",

items:[

"Python",

"Java",

"TypeScript",

"JavaScript",

"SQL"

]

},


{

title:"AI & Data Science",

items:[

"Machine Learning",

"Deep Learning",

"TensorFlow",

"Data Analysis",

"Computer Vision"

]

},


{

title:"Tools & Technologies",

items:[

"React",

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



<div

className="

grid

grid-cols-1

md:grid-cols-3

gap-8

"

>


{


skillGroups.map((group,index)=>(


<FadeIn

key={group.title}

delay={index*0.2}

>


<Card>


<h3

className="

text-2xl

font-bold

mb-6

text-cyan-400

"

>

{group.title}

</h3>




<div

className="flex flex-wrap gap-3"

>


{


group.items.map(skill=>(


<span

key={skill}

className="

px-4

py-2

rounded-full

bg-cyan-500/10

border

border-cyan-400/30

text-gray-300

hover:bg-cyan-400

hover:text-black

transition

"

>


{skill}


</span>


))


}


</div>


</Card>


</FadeIn>


))

}


</div>


</Container>


</section>


)

}


export default Skills