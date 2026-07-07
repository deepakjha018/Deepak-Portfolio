import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import FadeIn from "../animations/FadeIn"

import { experiences } from "../../data/experience"



function Experience(){


return(

<section id="experience">


<Container>


<SectionTitle

title="Experience"

subtitle="Internships and professional journey"

/>



<div

className="

space-y-8

max-w-4xl

mx-auto

"

>


{


experiences.map((item,index)=>(


<FadeIn

key={item.company}

delay={index*0.2}

>


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


</FadeIn>


))


}


</div>



</Container>


</section>


)


}


export default Experience