import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          Please go to the sub page here
          <br />
          <IonButton routerLink="/tab1/sub1/">To sub page 1</IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

export const Tab1Sub1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Sub 1</IonTitle>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 Sub 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer>
          This is a subpage. If you click the "Open single modal" button here, a
          modal will appear. If you close this modal and then click on the
          IonBackButton, the page transition animation will be broken.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};
