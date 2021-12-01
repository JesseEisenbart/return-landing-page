import Nav from "./components/Nav";
import NavFooter from "./components/NavFooter";
import Presskit from "./Pages/Presskit";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='presskit' element={<Presskit />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Copyright />      
    </BrowserRouter>
  );
}

export default App;
