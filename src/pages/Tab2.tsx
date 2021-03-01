import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route, useHistory } from "react-router";
import ExploreContainer from "../components/ExploreContainer";

export const Tab2Base: React.FC = () => {
  const history = useHistory();

  function goBack() {
    history.replace("/tab1/");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={goBack}>To tab 1</IonButton>
        <IonButton routerLink="/tab2/sub/">To sub page</IonButton>
        <ExploreContainer>
          This is a base container. It only uses IonRouterOutlet with the ionPage property.
          <br />
          <br />
          If you click on the "to tab 1" button, the view should switch back to tab 1 w/o animation (this is as expected). However, if you click on the "to sub page" button, then come back here and then click the "to tab 1" button, there will be an animation (this is not expected).
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export const Tab2Sub: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2 Sub</IonTitle>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2 Sub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          This is a subpage. If you click the back button here, the page transition animation is broken in ios mode.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const Tab2Router: React.FC = () => {
  return (
    <IonRouterOutlet ionPage>
      <Route exact path="/tab2/">
        <Tab2Base />
      </Route>
      <Route exact path="/tab2/sub/">
        <Tab2Sub />
      </Route>
    </IonRouterOutlet>
  );
};

export default Tab2Router;
