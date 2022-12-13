import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import {
  FrontPage,
  WorksPage,
  StackPage,
  DetailWorksPage,
  NotFoundPage,
  LoginPage,
  DashboardPage,
  AddWorkPage,
} from "../Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/works" exact>
          <WorksPage />
        </Route>
        <Route path="/techstacks" exact>
          <StackPage />
        </Route>
        <Route path="/works/:id">
          <DetailWorksPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute path="/dashboard" component={DashboardPage} exact />
        <ProtectedRoute path="/dashboard/add-work" component={AddWorkPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
