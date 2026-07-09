import Layout from "./components/common/Layout"

import Home from "./pages/Home"

import CursorGlow from "./components/common/CursorGlow"

import ScrollProgress from "./components/common/ScrollProgress"


function App(){


return(

<>

<ScrollProgress/>


<CursorGlow/>


<Layout>


<Home />


</Layout>


</>

)


}



export default App