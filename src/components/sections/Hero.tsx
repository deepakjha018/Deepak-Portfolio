import { TypeAnimation } from "react-type-animation"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import Button from "../ui/Button"

import FadeIn from "../animations/FadeIn"

import profile from "../../assets/profile/deepak-profile.jpeg"


function Hero(){


return(

<section

id="home"

className="

min-h-[90vh]

flex

items-center

justify-center

px-6

pt-20

"

>


<div

className="

max-w-7xl

w-full

grid

md:grid-cols-2

gap-16

items-center

"

>


{/* LEFT CONTENT */}


<FadeIn>


<p className="text-cyan-400 text-xl mb-4">

Hi 👋 I'm

</p>


<h1

className="

text-5xl

md:text-7xl

font-bold

gradient-text

mb-6

"

>

Deepak Kumar Jha

</h1>



<TypeAnimation


sequence={[


"AI & Data Science Engineer",

2000,


"Machine Learning Developer",

2000,


"Full Stack Developer",

2000,


"Problem Solver",

2000,


]}


speed={50}


repeat={Infinity}


className="

text-2xl

text-white

font-semibold

"

/>



<p

className="

text-gray-400

mt-6

max-w-xl

text-lg

"

>


Building intelligent AI-powered applications using Machine Learning,
Deep Learning and modern software technologies.


</p>



<div className="flex gap-5 mt-8">


<Button>

View Projects

</Button>


<a

href="/Deepak-Kumar-Jha-Resume.pdf"

>


<Button>

Resume

</Button>


</a>


</div>



<div

className="

flex

gap-6

mt-8

text-cyan-400

"

>


<FaGithub size={30}/>

<FaLinkedin size={30}/>

<MdEmail size={30}/>


</div>


</FadeIn>




{/* RIGHT IMAGE */}


<FadeIn delay={0.3}>


<div

className="

relative

flex

justify-center

"

>


<div

className="

absolute

w-80

h-80

bg-cyan-500/30

blur-[120px]

"

/>



<img

src={profile}

className="

relative

w-80

h-80

object-cover

rounded-full

neon-border

float-animation

"

/>


</div>


</FadeIn>



</div>


</section>


)


}


export default Hero