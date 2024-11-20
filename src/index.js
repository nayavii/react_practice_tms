import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

import { MainLayout } from "./components/MainLayout";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MainLayout>
      <Router />
    </MainLayout>
  </BrowserRouter>
);


