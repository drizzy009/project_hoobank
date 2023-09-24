import { Route, Routes } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import HomePage from "../../pages/HomePage/HomePage";
import ContactPage from './../../pages/Contact/ContactPage';

const CustomRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/" exact element={< HomePage/>} />
        <Route path="/contact" exact element={< ContactPage/>} />
      </Routes>
    </>
  );
};

export default CustomRoute;
