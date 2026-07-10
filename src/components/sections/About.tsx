import Card from "../ui/Card"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import FadeIn from "../animations/FadeIn"



const stats=[

{
number:"6+",
label:"Live Projects"
},

{
number:"5",
label:"Internships"
},

{
number:"10+",
label:"Technologies"
}

]


function About(){


return(

<section id="about">


<Container>


<SectionTitle

title="About Me"

subtitle="Who I am and what I build"

/>



<FadeIn>


<div

className="

grid

grid-cols-1

lg:grid-cols-2

gap-16

items-center

"

>


<div>


<h3

className="

text-3xl

font-bold

mb-5

"

>

AI Developer & Data Science Engineer

</h3>



<p

className="

text-gray-400

text-lg

leading-8

mt-5

"

>

I have hands-on experience through multiple internships and
projects, building AI-powered applications involving predictive
analytics, computer vision, NLP, automation, and full-stack
development.

</p>


<p

className="

text-gray-400

text-lg

leading-8

mt-5

"

>

I enjoy solving real-world problems and developing
AI-powered solutions that combine creativity,
engineering and innovation.


</p>


</div>




<div

className="

grid

gap-5

"

>


{

stats.map((item)=>(


<Card

key={item.label}

className="text-center"

>


<h2

className="

text-5xl

font-bold

gradient-text

"

>

{item.number}

</h2>



<p className="text-gray-300 mt-2">


{item.label}


</p>



</Card>


))

}


</div>



</div>


</FadeIn>


</Container>


</section>

)


}


export default About