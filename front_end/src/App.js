import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import { Navbar } from "./components/Navbar";
import { SendInvoice } from "./components/SendInvoice";
import { Confirmation } from "./components/Confirmation";
import { RenderInvoice } from "./components/RenderInvoice";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Registration" element={<Registration />}></Route>
        <Route path="SendInvoice" element={<SendInvoice />}></Route>
        <Route path="Confirmation" element={<Confirmation />}></Route>
        <Route path="RenderInvoice" element={<RenderInvoice />}></Route>
      </Routes>
    </>
  );
}

export default App;
