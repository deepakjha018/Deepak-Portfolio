import type { ReactNode } from "react"


interface ButtonProps {

children: ReactNode

onClick?: () => void

className?: string

}


function Button({

children,

onClick,

className

}:ButtonProps){


return(

<button

onClick={onClick}

className={`

px-6
py-3

rounded-full

bg-gradient-to-r
from-cyan-400
to-purple-600

text-white

font-semibold

hover:scale-105

transition-all
duration-300

shadow-lg
shadow-cyan-500/20


${className}

`}

>

{children}

</button>

)

}


export default Button