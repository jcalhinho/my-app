import * as React from "react";
import { Routes, Route, Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Container from "./components/Container";
import Nicocarmine from "./components/Nicocarmine";
import Travaux from "./components/Travaux";
import Travaux1 from "./components/Travaux1";
import Travaux10 from "./components/Travaux10";
import Travaux11 from "./components/Travaux11";
import Travaux12 from "./components/Travaux12";
import Travaux13 from "./components/Travaux13";
import Travaux14 from "./components/Travaux14";
import Travaux15 from "./components/Travaux15";
import Travaux16 from "./components/Travaux16";
import Travaux17 from "./components/Travaux17";
import Travaux18 from "./components/Travaux18";
import Travaux19 from "./components/Travaux19";
import Travaux2 from "./components/Travaux2";
import Travaux20 from "./components/Travaux20";
import Travaux3 from "./components/Travaux3";
import Travaux4 from "./components/Travaux4";
import Travaux5 from "./components/Travaux5";
import Travaux6 from "./components/Travaux6";
import Travaux7 from "./components/Travaux7";
import Travaux8 from "./components/Travaux8";
import Travaux9 from "./components/Travaux9";

export default function App() {

    const location = useLocation();


  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Nicocarmine />} />
        </Route>
        <Route path="/travaux" element={<Layout2 />}>
          <Route index element={<Travaux />} />
          <TransitionGroup>
    <CSSTransition key={location.key} className="fade" timeout={3000}>
      <div>
          <Route path="/travaux/1" element={<Travaux1 />} />
          <Route path="/travaux/2" element={<Travaux2 />} />
          <Route path="/travaux/3" element={<Travaux3 />} />
          <Route path="/travaux/4" element={<Travaux4 />} />
          <Route path="/travaux/5" element={<Travaux5 />} />
          <Route path="/travaux/6" element={<Travaux6 />} />
          <Route path="/travaux/7" element={<Travaux7 />} />
          <Route path="/travaux/8" element={<Travaux8 />} />
          <Route path="/travaux/9" element={<Travaux9 />} />
          <Route path="/travaux/10" element={<Travaux10 />} />
          <Route path="/travaux/11" element={<Travaux11 />} />
          <Route path="/travaux/12" element={<Travaux12 />} />
          <Route path="/travaux/13" element={<Travaux13 />} />
          <Route path="/travaux/14" element={<Travaux14 />} />
          <Route path="/travaux/15" element={<Travaux15 />} />
          <Route path="/travaux/16" element={<Travaux16 />} />
          <Route path="/travaux/17" element={<Travaux17 />} />
          <Route path="/travaux/18" element={<Travaux18 />} />
          <Route path="/travaux/19" element={<Travaux19 />} />
          <Route path="/travaux/20" element={<Travaux20 />} />
          </div>
    </CSSTransition>
  </TransitionGroup>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
     
      <Outlet />
    </div>
  );
}
function Layout2() {
  return (
    <div>
     

      <Container />

     
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// import React from "react";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SlideRoutes from 'react-slide-routes';
// // Importer les composants pour chaque route
// import Travaux from "./components/Travaux";
// import Nicocarmine from "./components/Nicocarmine";
// import Contact from "./components/Contact";

// import Travaux1 from "./components/Travaux1";
// import Travaux2 from "./components/Travaux2";
// import Travaux3 from "./components/Travaux3";
// import Travaux4 from "./components/Travaux4";
// import Travaux5 from "./components/Travaux5";
// import Travaux6 from "./components/Travaux6";
// import Travaux7 from "./components/Travaux7";
// import Travaux8 from "./components/Travaux8";
// import Travaux9 from "./components/Travaux9";
// import Travaux10 from "./components/Travaux10";
// import Travaux11 from "./components/Travaux11";
// import Travaux12 from "./components/Travaux12";
// import Travaux13 from "./components/Travaux13";
// import Travaux14 from "./components/Travaux14";
// import Travaux15 from "./components/Travaux15";
// import Travaux16 from "./components/Travaux16";
// import Travaux17 from "./components/Travaux17";
// import Travaux18 from "./components/Travaux18";
// import Travaux19 from "./components/Travaux19";
// import Travaux20 from "./components/Travaux20";
// import { Home } from "@mui/icons-material";

// // Définir les sous-routes de la route "Travaux.tsx" seulement si elle est active

// const toto = window.location.href;
// console.log(toto)
// const App = () => {

// return (
//     <Routes>
//       <Route path="/" element={<Nicocarmine />}>
//       {/* <Route  index  element={<Nicocarmine />} /> */}
//       <Route path="travaux"   element={<Travaux /> } />
//             <Route path="/travaux/1"   element={<Travaux1 /> } />
//             <Route path="/travaux/2"  element={<Travaux2 /> } />
//             <Route path="/travaux/3"  element={<Travaux3 /> } />
//             <Route path="/travaux/4"  element={<Travaux4 /> } />
//             <Route path="/travaux/5"  element={<Travaux5 /> } />
//             <Route path="/travaux/6"  element={<Travaux6 /> } />
//             <Route path="/travaux/7"  element={<Travaux7 /> } />
//             <Route path="/travaux/8"  element={<Travaux8 /> } />
//             <Route path="/travaux/9"  element={<Travaux9 /> } />
//             <Route path="/travaux/10" element={<Travaux10 />} />
//             <Route path="/travaux/11" element={<Travaux11 />} />
//             <Route path="/travaux/12" element={<Travaux12 />} />
//             <Route path="/travaux/13" element={<Travaux13 />} />
//             <Route path="/travaux/14" element={<Travaux14 />} />
//             <Route path="/travaux/15" element={<Travaux15 />} />
//             <Route path="/travaux/16" element={<Travaux16 />} />
//             <Route path="/travaux/17" element={<Travaux17 />} />
//             <Route path="/travaux/18" element={<Travaux18 />} />
//             <Route path="/travaux/19" element={<Travaux19 />} />
//             <Route path="/travaux/20" element={<Travaux20 />} />

//             <Route  path="/contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   );

// {/* <Router>

// //     <SlideRoutes duration={800} animation={"vertical-slide"}>
// //         <Route  path="/" element={<Nicocarmine />} />
// //         <Route  path="/travaux" element={<Travaux />} />

// //         <Route path="/travaux/1"   element={<Travaux1 /> } />
// //         <Route path="/travaux/2"  element={<Travaux2 /> } />
// //         <Route path="/travaux/3"  element={<Travaux3 /> } />
// //         <Route path="/travaux/4"  element={<Travaux4 /> } />
// //         <Route path="/travaux/5"  element={<Travaux5 /> } />
// //         <Route path="/travaux/6"  element={<Travaux6 /> } />
// //         <Route path="/travaux/7"  element={<Travaux7 /> } />
// //         <Route path="/travaux/8"  element={<Travaux8 /> } />
// //         <Route path="/travaux/9"  element={<Travaux9 /> } />
// //         <Route path="/travaux/10" element={<Travaux10 />} />
// //         <Route path="/travaux/11" element={<Travaux11 />} />
// //         <Route path="/travaux/12" element={<Travaux12 />} />
// //         <Route path="/travaux/13" element={<Travaux13 />} />
// //         <Route path="/travaux/14" element={<Travaux14 />} />
// //         <Route path="/travaux/15" element={<Travaux15 />} />
// //         <Route path="/travaux/16" element={<Travaux16 />} />
// //         <Route path="/travaux/17" element={<Travaux17 />} />
// //         <Route path="/travaux/18" element={<Travaux18 />} />
// //         <Route path="/travaux/19" element={<Travaux19 />} />
// //         <Route path="/travaux/20" element={<Travaux20 />} />

// //         <Route  path="/contact" element={<Contact />} />
// //     </SlideRoutes>
// // </Router> */}

// };

// export default App;
