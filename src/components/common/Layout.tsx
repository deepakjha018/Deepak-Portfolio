import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Background from "./Background"


function Layout({

children

}:{children:ReactNode}){


return(

<div className="relative min-h-screen overflow-hidden">


<Background />

<Navbar />

<div className="relative z-10">


{children}


</div>


</div>


)


}


export default Layout