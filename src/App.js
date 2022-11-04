import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/Home.scss";
import "./styles/mediaquery.scss";


function App() {
  return (
    
    <Router>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>} />

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
