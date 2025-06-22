import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider.jsx";
import ProjectProvider from "./context/ProjectProvider";

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
  console.log(e);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProjectProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProjectProvider>
    </UserProvider>
  </StrictMode>
);
