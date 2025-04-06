import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Articles from "./pages/Articles"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/sign-in" element={<SignIn />} />
        <Route path= "/sign-up" element={<SignUp />} />
        <Route path= "/dashboard" element={<Dashboard />} />
        <Route path= "/articles" element={<Articles />} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}
