import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  FrontPage,
  WorksPage,
  StackPage,
  DetailWorksPage,
  NotFoundPage,
  LoginPage,
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
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
