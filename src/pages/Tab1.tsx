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
          <br />
          <br />
          <IonButton routerLink="/tab1/sub2/">To sub page 2</IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

export const Tab1Sub1: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLIonModalElement>(null);

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

        <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} />

        <IonButton onClick={() => setIsOpen(true)}>Open single modal</IonButton>

        <ExploreContainer>
          This is a subpage. If you click the "Open single modal" button here, a
          modal will appear. If you close this modal and then click on the
          IonBackButton, the page transition animation will be broken.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export const Tab1Sub2: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Sub 2</IonTitle>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 Sub 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <NestedModal isOpen={isOpen} onDismiss={() => setIsOpen(false)} />

        <IonButton onClick={() => setIsOpen(true)}>Open nested modal</IonButton>

        <ExploreContainer>
          This is a subpage. If you click the "Open nested modal" button here, a
          nested modal will appear. If you close this modal and then click on
          the IonBackButton, routing will be broken.
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}
function Modal({ isOpen, onDismiss }: ModalProps) {
  const modalRef = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal ref={modalRef} isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonButton onClick={() => modalRef.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </IonModal>
  );
}

function NestedModal({ isOpen, onDismiss }: ModalProps) {
  const modalRef = useRef<HTMLIonModalElement>(null);

  const [childOpen, setChildOpen] = useState<boolean>(false);

  return (
    <IonModal ref={modalRef} isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonButton onClick={() => modalRef.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Modal isOpen={childOpen} onDismiss={() => setChildOpen(false)} />
        </IonContent>
      </IonPage>
    </IonModal>
  );
}