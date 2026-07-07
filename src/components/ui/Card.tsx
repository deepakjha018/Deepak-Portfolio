import type { ReactNode } from "react"


interface Props{

children:ReactNode
className?:string

}


function Card(
{
children,
className=""
}:Props
){


return(

<div

className={`

glass
card-hover

rounded-3xl

p-10

border
border-cyan-500/20

${className}

`}

>

{children}


</div>


)

}


export default Card