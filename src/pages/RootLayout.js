import { Outlet } from "react-router-dom";
const RootLayout=()=>{
    return(
        // <Navbar>
// {/* <Navbar/> here it will be navbar*/}

<main>
<Outlet/>
</main>
        // </Navbar>
    )
}
export default RootLayout;