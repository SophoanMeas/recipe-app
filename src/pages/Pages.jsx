import Home from "./Home";
import Cuisine from "./Cuisine";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />}/>
      <Route path="/search/:search" element={<Search />}/>
    </Routes>
  );
}
