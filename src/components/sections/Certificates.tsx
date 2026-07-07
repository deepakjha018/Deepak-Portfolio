import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import FadeIn from "../animations/FadeIn"

import { certificates } from "../../data/certificates"

import { Award } from "lucide-react"



function Certificates(){


return(

<section id="certificates">


<Container>


<SectionTitle

title="Certificates"

subtitle="Achievements and recognitions"

/>


<div

className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-8

"

>

{

certificates.map((item,index)=>(


<FadeIn

key={item.title}

delay={index*0.15}

>


<Card>


<Award

className="
text-cyan-400
mb-5
"

size={45}

/>


<h3

className="
text-xl
font-bold
"

>

{item.title}

</h3>



<p

className="
text-gray-400
mt-3
"

>

{item.issuer}

</p>



<p

className="
text-purple-400
mt-4
"

>

{item.year}

</p>



</Card>


</FadeIn>


))

}


</div>


</Container>


</section>


)


}


export default Certificates