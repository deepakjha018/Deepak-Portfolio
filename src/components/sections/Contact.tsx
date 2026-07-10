import { useState } from "react"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import { motion } from "framer-motion"

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

import emailjs from "@emailjs/browser"



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

function handleSubmit(e:React.FormEvent){

e.preventDefault()


emailjs.send(

import.meta.env.VITE_EMAILJS_SERVICE_ID,

import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

{

from_name: form.name,

from_email: form.email,

message: form.message,

},

import.meta.env.VITE_EMAILJS_PUBLIC_KEY

)

.then(()=>{


alert("Message sent successfully 🚀")


setForm({

name:"",

email:"",

message:""

})


})


.catch(()=>{


alert("Something went wrong. Please try again.")


})


}



function copyEmail(){

navigator.clipboard.writeText(

"deepak2004jha@gmail.com"

)


alert("Email copied 📧")

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


<div

className="

relative

z-10

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


<motion.a

href="https://github.com/deepakjha018"

target="_blank"

whileHover={{
scale:1.25,
y:-5
}}

className="

w-14

h-14

rounded-full

flex

items-center

justify-center

bg-cyan-500/10

border

border-cyan-400/30

hover:shadow-[0_0_25px_rgba(34,211,238,.5)]

transition

"

>

<FaGithub size={35}/>

</motion.a>


<motion.a

href="https://www.linkedin.com/in/deepak-kumar-jha-a64855328"

target="_blank"

whileHover={{
scale:1.25,
y:-5
}}

className="

w-14

h-14

rounded-full

flex

items-center

justify-center

bg-cyan-500/10

border

border-cyan-400/30

hover:shadow-[0_0_25px_rgba(34,211,238,.5)]

transition

"

>

<FaLinkedin size={35}/>

</motion.a>


<motion.a

href="#"

onClick={(e)=>{

e.preventDefault()

copyEmail()

}}

whileHover={{
scale:1.25,
y:-5
}}

className="

w-14

h-14

rounded-full

flex

items-center

justify-center

bg-cyan-500/10

border

border-cyan-400/30

hover:shadow-[0_0_25px_rgba(34,211,238,.5)]

transition

"

>

<FaEnvelope size={30}/>

</motion.a>


</div>



</motion.div>





<motion.form

onSubmit={handleSubmit}

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

type="submit"

whileHover={{
scale:1.08,
y:-4
}}

whileTap={{
scale:.95
}}

className="

px-10

py-4

rounded-full

bg-gradient-to-r

from-cyan-400

to-purple-500

font-bold

text-white

shadow-[0_0_25px_rgba(34,211,238,.35)]

hover:shadow-[0_0_40px_rgba(34,211,238,.7)]

transition

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