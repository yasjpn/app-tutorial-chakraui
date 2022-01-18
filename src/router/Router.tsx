import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoute } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home">
        {homeRoute.map((route) => (
          <Route
            path={route.path}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
