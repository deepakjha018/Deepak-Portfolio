function Background(){


return (

<div className="fixed inset-0 -z-10 overflow-hidden">


{/* Base Dark */}

<div

className="
absolute
inset-0
bg-[#050816]
"

/>


{/* Grid */}

<div

className="

absolute
inset-0

bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]

bg-[size:60px_60px]

"

/>



{/* Cyan Orb */}

<div

className="

absolute

top-20
left-20

w-72
h-72

bg-cyan-500/20

rounded-full

blur-[120px]

animate-pulse

"

/>



{/* Purple Orb */}

<div

className="

absolute

bottom-20
right-20

w-96
h-96

bg-purple-600/20

rounded-full

blur-[140px]

animate-pulse

"

/>



</div>


)

}


export default Background