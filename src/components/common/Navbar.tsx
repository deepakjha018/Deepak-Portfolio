import { Menu } from "lucide-react"

import { useState } from "react"


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


return(


<nav

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


<a

href="#home"

className="

text-2xl

font-bold

gradient-text

"

>

Deepak.dev

</a>




<div className="hidden md:flex gap-8">


{

links.map((item)=>(


<a

key={item.name}

href={item.path}

className="

text-gray-300

hover:text-cyan-400

transition

"

>

{item.name}


</a>


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




{


open &&


<div

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


</div>


}


</nav>


)


}


export default Navbar