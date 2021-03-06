import React, {ReactNode} from 'react';
import {Background} from '../../components/Background';
import {styles} from './styles';

import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';


type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}
export function ModalView(
  {children,
    closeModal,
    ...rest}: Props){
  return(
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}/>
            {children}
          </Background>
        
        </View>

      </View>
      </TouchableWithoutFeedback>
    </Modal>
    
  );
}