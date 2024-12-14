import { Outlet } from "react-router-dom"
import Header from "../Components/Navbar/Navbar"

export default function DefaultLayout() {
    return (
        <>
            <Header/>
            <Outlet/>            
        </>
    )
}