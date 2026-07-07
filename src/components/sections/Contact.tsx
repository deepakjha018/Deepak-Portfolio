import { useState } from "react"

import Container from "../ui/Container"

import SectionTitle from "../ui/SectionTitle"

import Card from "../ui/Card"

import FadeIn from "../animations/FadeIn"


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



<FadeIn>


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



<div>


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


<FaGithub size={35}/>

<FaLinkedin size={35}/>

<MdEmail size={35}/>


</div>



</div>





<form className="space-y-5">


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
"

/>



<button

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


</button>



</form>



</div>


</Card>


</FadeIn>



</Container>


</section>


)


}


export default Contact