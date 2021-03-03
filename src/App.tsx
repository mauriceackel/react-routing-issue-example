import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1, { Tab1Sub1 } from "./pages/Tab1";
import Tab2, { Tab2Sub1 } from "./pages/Tab2";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import SignIn from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";

export const AuthContext = React.createContext<{
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  signedIn: false,
  setSignedIn: () => {},
});

const App: React.FC = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ signedIn, setSignedIn }}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                exact
                path="/tab1/"
                render={() => (signedIn ? <Tab1 /> : <SignIn />)}
              />
              <Route
                exact
                path="/tab1/sub1/"
                render={() => (signedIn ? <Tab1Sub1 /> : <SignIn />)}
              />

              <PrivateRoute exact path="/tab2/" component={Tab2} />
              <PrivateRoute exact path="/tab2/sub1/" component={Tab2Sub1} />

              <Route exact path="/">
                <Redirect to="/tab1/" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1/">
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2/">
                <IonIcon icon={triangle} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
