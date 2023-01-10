import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./shared/Layout";

export interface ApplicationProps {}

const Application: FunctionComponent<ApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
          <Route path=":beheading_count" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
