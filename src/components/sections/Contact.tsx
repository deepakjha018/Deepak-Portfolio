import { useState } from "react"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import { motion } from "framer-motion"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { MdEmail } from "react-icons/md"



function Contact(){


const [form,setForm]=useState({

name:"",

email:"",

message:""

})


function handleChange(

e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

){

setForm({

...form,

[e.target.name]:e.target.value

})

}



return(

<section id="contact">


<Container>


<SectionTitle

title="Contact Me"

subtitle="Let's build something amazing together"

/>



<motion.div

initial={{
opacity:0,
y:70
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

>


<Card>


<div

className="

grid

grid-cols-1

lg:grid-cols-2

gap-12

items-start

"

>



<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.7,
delay:.2
}}

>


<h3

className="
text-3xl
font-bold
gradient-text
mb-5
"

>

Get In Touch 🚀


</h3>


<p className="text-gray-400">

Interested in AI, Data Science, Machine Learning or Full Stack projects?
Feel free to connect with me.

</p>



<div

className="
flex
gap-6
mt-8
text-cyan-400
"

>


<motion.div
whileHover={{scale:1.25,y:-5}}
>

<FaGithub size={35}/>

</motion.div>


<motion.div
whileHover={{scale:1.25,y:-5}}
>

<FaLinkedin size={35}/>

</motion.div>


<motion.div
whileHover={{scale:1.25,y:-5}}
>

<MdEmail size={35}/>

</motion.div>


</div>



</motion.div>





<motion.form

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.7,
delay:.3
}}

className="space-y-5">


<input

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-white/5
border
border-white/10
outline-none

focus:border-cyan-400

focus:shadow-[0_0_20px_rgba(34,211,238,.35)]

transition
"

/>



<input

name="email"

placeholder="Your Email"

value={form.email}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-white/5
border
border-white/10
outline-none

focus:border-cyan-400

focus:shadow-[0_0_20px_rgba(34,211,238,.35)]

transition
"

/>




<textarea

name="message"

placeholder="Your Message"

value={form.message}

onChange={handleChange}

rows={5}

className="
w-full
p-4
rounded-xl
bg-white/5
border
border-white/10
outline-none

focus:border-cyan-400

focus:shadow-[0_0_20px_rgba(34,211,238,.35)]

transition
"

/>



<motion.button

whileHover={{
scale:1.08,
y:-4
}}

whileTap={{
scale:.95
}}

className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500
font-bold
"

>


Send Message


</motion.button>



</motion.form>



</div>


</Card>


</motion.div>



</Container>


</section>


)


}


export default Contact