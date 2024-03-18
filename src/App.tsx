import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import ChartPage from "./pages/ChartPage";
import EventsPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import StorePage from "./pages/StorePage";
import RechargePage from "./pages/RechargePage";

function App() {
  // const [data, setData] = useState();
  // console.log(data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=8d9fd88b840fea34b2b2c0948bcefa12&limit=10&format=json"
  //     );
  //     const jsonData = await response.json();
  //     setData(jsonData.artists.artist);
  //     console.log("jsonData", jsonData);
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/recharge" element={<RechargePage />} />
      </Routes>
    </>
  );
}

export default App;
