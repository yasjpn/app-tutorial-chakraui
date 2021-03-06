import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoute } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <LoginUserProvider>
        <Route path="/" element={<Login />} />
        <Route path="home">
          {homeRoute.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={<HeaderLayout>{route.children}</HeaderLayout>}
            />
          ))}
        </Route>
      </LoginUserProvider>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
