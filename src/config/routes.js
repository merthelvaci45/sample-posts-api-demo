import React, { lazy, Suspense } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { PAGE_ROUTES } from "../utils";

const AllPosts = lazy(() => import("../pages/AllPosts"));
const AddPost = lazy(() => import("../pages/AddPost"));

/**
 * Routing Pages
 * Add all site pages here
 */
export default (
  <Router>
    <Suspense fallback={<small>Loading...</small>}>
      <Switch>
        <Route exact path={PAGE_ROUTES.allPosts} component={AllPosts} />
        <Route path={PAGE_ROUTES.addPost} component={AddPost} />
      </Switch>
    </Suspense>
  </Router>
);
