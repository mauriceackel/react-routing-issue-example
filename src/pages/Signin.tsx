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
          2. Switch between tab 1 and 2.
          <br />
          <br />
          Tab 1 will be kept alive while tab 2 will be removed from the DOM as
          soon as you navigate back to tab 1.
          <br />
          <br />
          <IonButton onClick={() => setSignedIn(true)}>SignIn</IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
