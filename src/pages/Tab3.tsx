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
import { Route } from "react-router";
import ExploreContainer from "../components/ExploreContainer";

const Tab3Base: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/tab1/">To tab 1</IonButton>
        <IonButton routerLink="/tab3/sub/">To sub page</IonButton>
        <ExploreContainer>
          This is a base container. It only uses an IonRouterOutlet wrapped in an IonPage component.
          <br />
          <br />
          Here, to "to tab 1" button uses a router link prop. If you click on it, there will be an animation to tab 1 (this is inconsistent with the way it works with history.push on tab 2)
          <br />
          <br />
          If you click on "to sub page" here, you can navigate back and the animation works as expected. However, if you check the dev tools, you will see that the z-index of the IonPage will change from 101 to 99 when navigating back from the sub page. Although this does not break something here, I don't believe this is an intended behavior.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const Tab3Sub: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3 Sub</IonTitle>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3 Sub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          This is a sub page, check the dev tools and especially the z-index when clicking the back button here. The PARENT page changes its z index from 101 to 99, which is a bug in my opinion.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const Tab3Router: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/tab3/">
          <Tab3Base />
        </Route>
        <Route exact path="/tab3/sub/">
          <Tab3Sub />
        </Route>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default Tab3Router;
