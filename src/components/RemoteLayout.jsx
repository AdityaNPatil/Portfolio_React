import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import "./Header.css"
import "./Footer.css"

export default function RemoteLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}