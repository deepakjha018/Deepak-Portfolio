import Card from "../ui/Card"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import FadeIn from "../animations/FadeIn"

import { projects } from "../../data/projects"

import { FaGithub } from "react-icons/fa"

import { ExternalLink } from "lucide-react"


function Projects(){


return(

<section id="projects">


<Container>


<SectionTitle

title="Projects"

subtitle="AI systems and applications I built"

/>


<div

className="
grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-10

"
>


{

projects.map((project,index)=>(


<FadeIn

key={project.title}

delay={index*0.15}

>


<Card>


<img

src={project.image}

className="
rounded-xl
mb-5
h-44
w-full
object-cover
"

/>



<h3

className="
text-xl
font-bold
text-white
mb-3
"

>

{project.title}

</h3>



<p className="text-gray-400">

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



<div className="flex gap-5 mt-6">


<a href={project.github}>

<FaGithub size={24}/>

</a>


<a href={project.demo}>

<ExternalLink size={24}/>

</a>


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


export default Projects