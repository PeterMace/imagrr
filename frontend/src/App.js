import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PhotoBrowser from "./components/PhotoBrowser";
import PhotoDetail from './components/PhotoDetail';
import LandingPage from './components/LandingPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route
            path="/photos"exact
          >
            <PhotoBrowser />
          </Route>
          <Route path="/photos/:photoId">
            <PhotoDetail />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;