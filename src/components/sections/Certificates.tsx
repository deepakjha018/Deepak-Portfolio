import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import { motion } from "framer-motion"

import { certificates } from "../../data/certificates"




function Certificates(){


return(

<section id="certificates">


<Container>


<SectionTitle

title="Certificates"

subtitle="Professional certifications, achievements and continuous learning"

/>


<motion.div

initial="hidden"

whileInView="show"

viewport={{
once:true,
amount: 0.05
}}

variants={{

hidden:{},

show:{

transition:{
staggerChildren:.15
}

}

}}

className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-8

"

>

{

certificates.map((item)=>(


<motion.div

key={item.title}

variants={{

hidden:{
opacity:0,
scale:.85,
y:40
},

show:{
opacity:1,
scale:1,
y:0
}

}}

transition={{
duration:.6
}}

viewport={{
  once:true,
  amount:0.05
}}

>


<Card

className="

relative

overflow-hidden

group

p-0

"

>


<motion.div

className="

absolute

inset-0

bg-gradient-to-br

from-cyan-500/10

via-transparent

to-purple-500/10

opacity-0

group-hover:opacity-100

transition

duration-500

"

/>



<a

href={item.image}

target="_blank"

rel="noopener noreferrer"

className="

block

relative

z-10

h-56

overflow-hidden

rounded-t-3xl

cursor-pointer

"

>


<img

src={item.image}

alt={item.title}

className="

w-full

h-full

object-cover

transition-transform

duration-500

group-hover:scale-110

"

/>


</a>




<div

className="

relative

z-10

p-7

"

>



<p

className="

text-cyan-400

text-sm

mb-3

"

>

{item.category}

</p>




<h3

className="

text-xl

font-bold

text-white

group-hover:text-cyan-400

transition

duration-300

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

text-gray-300

text-sm

mt-4

"

>

{item.highlight}

</p>




<p

className="

inline-block

mt-5

px-4

py-2

rounded-full

bg-purple-500/10

border

border-purple-400/30

text-purple-300

text-sm

"

>

{item.year}

</p>


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


export default Certificates