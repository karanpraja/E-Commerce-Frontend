
import Navbar from "../components/nav/Navbar"
import ProductList from "../components/products/components/ProductsList"
import LoginPage from "./LoginPage"
const Homepage=()=>{
    return(
        <Navbar>
            {/* <LoginPage/> */}
            <ProductList/>
        </Navbar>
    )
}
export default Homepage