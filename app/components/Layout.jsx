import Header from "./Header"
import HeaderSecondary from "./HeadeSecondary"
import Footer from "./Footer"

const Layout = ({ children, criteria}) => {
  return (
    <div className=" bg-custom font-poppins">
        {criteria ? <Header/> : <HeaderSecondary/>}
        {children}
        <Footer/>
    </div>
  
  )
}

export default Layout