import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";

export default function App() {
  //icon color #8D021F
  return (
    <main className="font-roboto">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
