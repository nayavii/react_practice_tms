import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import ConditionalRenderingContainer from "../pages/ConditionalRendering/containers/ConditionalRenderingContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.CONDITIONAL_RENDERING} element={<ConditionalRenderingContainer />} />

      <Route path='*' element={<h1>404 not found</h1>} />
    </Routes>
  );
};
