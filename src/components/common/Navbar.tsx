import { Menu } from "lucide-react"

import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"


const links = [

{
name:"Home",
path:"#home"
},

{
name:"About",
path:"#about"
},

{
name:"Skills",
path:"#skills"
},

{
name:"Projects",
path:"#projects"
},

{
name:"Experience",
path:"#experience"
},

{
name:"Contact",
path:"#contact"
}

]


function Navbar(){


const [open,setOpen]=useState(false)

const [active,setActive]=useState("Home")


useEffect(()=>{

const handleScroll=()=>{

links.forEach((link)=>{

const section=document.querySelector(link.path)

if(section){

const rect=section.getBoundingClientRect()

if(
rect.top<=150 &&
rect.bottom>=150
){

setActive(link.name)

}

}

})

}


window.addEventListener("scroll",handleScroll)

handleScroll()


return()=>{

window.removeEventListener("scroll",handleScroll)

}


},[])

return(


<motion.nav

initial={{
y:-80,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.7,
ease:"easeOut"
}}

className="

fixed

top-0

left-0

w-full

z-50

px-6

py-4

backdrop-blur-xl

bg-[#050816]/70

border-b

border-white/10

"

>


<div

className="

max-w-7xl

mx-auto

flex

items-center

justify-between

"

>


<motion.a

whileHover={{
scale:1.08
}}

whileTap={{
scale:.95
}}

href="#home"

className="

text-2xl

font-bold

gradient-text

"

>

Deepak.dev

</motion.a>




<div className="hidden md:flex gap-8">


{

links.map((item)=>(


<motion.a

whileHover={{
y:-3
}}

key={item.name}

href={item.path}

className={`

relative

transition

duration-300

${
active===item.name
?
"text-cyan-400"
:
"text-gray-300 hover:text-cyan-400"
}

`}

>

{item.name}


{
active===item.name && (

<motion.span

layoutId="navbar-line"

className="

absolute

left-0

-right-0

-mx-1

-bottom-2

h-[3px]

rounded-full

bg-cyan-400

shadow-[0_0_15px_#00d9ff]

"

/>

)

}


</motion.a>


))

}


</div>



<button

className="md:hidden text-white"

onClick={()=>setOpen(!open)}

>


<Menu />


</button>


</div>




<AnimatePresence>

{

open &&


<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

transition={{
duration:.3
}}

className="

md:hidden

glass

mt-4

p-5

rounded-xl

flex

flex-col

gap-4

"

>


{


links.map((item)=>(


<a


href={item.path}

key={item.name}

>


{item.name}


</a>


))


}


</motion.div>


}

</AnimatePresence>


</motion.nav>


)


}


export default Navbar