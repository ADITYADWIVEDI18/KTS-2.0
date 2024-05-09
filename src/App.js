import React from "react";
import Body from "./components/Body";
import Navigation from "./components/Navigation Bar/Navigation";
import Domains from "./components/Domain Center/Domains";
import Events from "./components/Event Center/Events";
import Team from "./components/Team Center/Team";
import Projects from "./components/Project Center/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import TeamPage from "./components/Team Center/TeamPage";


import {
  createBrowserRouter,
  // Outlet,
  // useRouteError,
} from "react-router-dom";
import KTSteam from "./components/Team Center/KTSteam";

// Routing 
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/ktsfamily",
    element: <KTSteam />,
  },
]);

function App() {
  return (
    <div className="App">
      <Body/>
      <Domains/>
      <Events/>
      <Team />
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;