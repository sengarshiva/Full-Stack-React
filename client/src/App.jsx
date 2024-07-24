import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Home from "./Component/Home"
import FontSize from "./Component/Tailwind/FontSize"
import MarginPaddingBorders from "./Component/Tailwind/MarginPaddingBorders"
import Backgroundcolor from "./Component/Tailwind/Backgroundcolor"
import Backgroundimage from "./Component/Tailwind/Backgroundimage"
import SquarBracketNotation from "./Component/Tailwind/SquarBracketNotation"
import ResponsiveDesign from "./Component/Tailwind/ResponsiveDesign"
import CustomizingTailwind from "./Component/Tailwind/CustomizingTailwind"
import FlexBox from "./Component/Tailwind/FlexBox"
import FlexBox1 from "./Component/Tailwind/FlexBox1"
import Navbar from "./Component/Tailwind/Navbar"


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
      <FontSize/>
      <MarginPaddingBorders/>
      <Backgroundcolor/>
      <Backgroundimage/>
      <SquarBracketNotation/>
      <ResponsiveDesign/>
      <CustomizingTailwind/>
      <FlexBox/>
      <FlexBox1/>
      <Navbar/>
    </div>
  )
}

export default App