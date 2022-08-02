import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }, props) => {
    return ( 
        <>
            <Head>
                <title>Shahryar Valizadeh - {props.title}</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
export default Layout;