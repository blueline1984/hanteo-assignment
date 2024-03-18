import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" />
        <Route path="/chart" />
        <Route path="/events" />
        <Route path="/news" />
        <Route path="/store" />
        <Route path="/recharge" />
      </Routes>
    </>
  );
}

export default App;
