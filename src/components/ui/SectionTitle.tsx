interface Props{

title:string
subtitle?:string

}


function SectionTitle(
{
title,
subtitle
}:Props
){


return(

<div
className="
text-center
mb-16
"
>

<h2

className="
text-4xl
md:text-6xl
font-bold
gradient-text
"

>

{title}

</h2>


{
subtitle &&

<p
className="
mt-3
text-gray-400
text-lg
"
>

{subtitle}

</p>

}


</div>

)

}


export default SectionTitle