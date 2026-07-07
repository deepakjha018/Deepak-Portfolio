import type { ReactNode } from "react"


function Container(
{
children,
className=""
}:{
children:ReactNode
className?:string
}
){


return(

<section
className={`
relative
w-full
py-24
${className}
`}
>


<div
className="

max-w-7xl

mx-auto

px-6

sm:px-8

lg:px-12

"
>


{children}


</div>


</section>


)


}


export default Container