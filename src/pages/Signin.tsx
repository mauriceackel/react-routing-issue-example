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
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../App";
import ExploreContainer from "../components/ExploreContainer";

const SignIn: React.FC = () => {
  const { setSignedIn } = useContext(AuthContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SignIn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SignIn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer>
          1.Open the browser dev tools.
          <br />
          2. Click on tab 2 to make sure it is added to the DOM.
          <br />
          3. Click the signin button.
          <br />
          <br />
          Both conditional routes will change which page they render. They will
          end up having weird states in the ion-router-outlet, which leads to
          display issues when switching the tabs now.
          <br />
          <br />
          <IonButton onClick={() => setSignedIn(true)}>SignIn</IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
