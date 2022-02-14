import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./components/createBlog/CreateBlog";
import FullBlog from "./components/home/fullblog/FullBlog";
import Home from "./components/home/Home";
import Footer from "./components/shared/footer/Footer";
import Header from "./components/shared/header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/createblog" element={<CreateBlog></CreateBlog>}></Route>
          <Route path="/bloglist/:id" element={<FullBlog></FullBlog>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
