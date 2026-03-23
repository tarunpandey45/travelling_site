
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Attendence from "./components/Attendence";
import Student from "./components/Student";
import Syllabus from "./components/Syllabus";
import Categories from "./components/Categories";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  const data =
    "hello , dervs you are learning react Js learning React js and the topic is props ";
  const sidebar = [
    { id: 1, title: "", url: "/" },
    { id: 2, title: "", url: "/" },
    { id: 3, title: "", url: "/" },
    { id: 4, title: "", url: "/" },
    { id: 5, title: "", url: "/" },
    { id: 6, title: "", url: "/" },
    { id: 7, title: "", url: "/" },
    { id: 8, title: "", url: "/" },
    { id: 9, title: "", url: "/" },
  ];

  return (
    <>
      {/*ye ek  bada pura section hai hai  */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 sidebar p-0 pos">
            {/*ye side bar  ka section  hai  */}
            <Sidebar menus={sidebar} />
          </div>
          <div className="col-lg-10 dashboard">
            <Navbar />   
            {/*ROUTES */}
            <Routes>
              {/* <Route path="/" element={< defaultpage />} /> */}
              <Route path="/course" element={<Course />} />
              <Route path="/dashboard" element={<Dashboard val={data} />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/attendence" element={<Attendence />} />
              <Route path="/student" element={<Student />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products/:id" element={<AllProducts />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            {/*ye dashboard ka section  hai  */}
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
      {/*ye footer section hai  */}
    </>
  );
}
export default App;
