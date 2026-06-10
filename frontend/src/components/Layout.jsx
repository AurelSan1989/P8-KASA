import Header from "./Header"
import Footer from './Footer'
import { BrowserRouter } from "react-router-dom"

export default function Layout({ children }) {
    return (
        <BrowserRouter>
            <Header />
            <main>                
                { children }
            </main>
            <Footer />
        </BrowserRouter>
    )
}