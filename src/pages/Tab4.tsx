import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route } from "react-router";
import ExploreContainer from "../components/ExploreContainer";

const Tab4Base: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/notab/">To no tab</IonButton>
        <ExploreContainer>
          This is again a nested route where an IonRouterOutlet is nested in an IonPage component. If you click on the "to no tab" button, the router will redirect to a route that is defined in the router outlet of the tab view but that is not listed as tab button.
          <br />
          <br />
          The page transition animation is broken in ios mode.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const Tab4Router: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/tab4/">
          <Tab4Base />
        </Route>
      </IonRouterOutlet>
    </IonPage>
  );
};
export default Tab4Router;
