import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import { motion } from "framer-motion"

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

certificates.map((item,index)=>(


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

>


<Card>


<motion.div

whileHover={{

rotate:360,

scale:1.2

}}

transition={{

duration:.6

}}

>


<Award

className="
text-cyan-400
mb-5
drop-shadow-[0_0_15px_rgba(34,211,238,.8)]
"

size={45}

/>


</motion.div>

<h3

className="

text-xl

font-bold

transition

hover:text-cyan-400

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


</motion.div>


))

}


</motion.div>


</Container>


</section>


)


}


export default Certificates