import React, {ReactNode} from 'react';
import {Background} from '../../components/Background';
import {styles} from './styles';

import { View, Modal, ModalProps } from 'react-native';


type Props = ModalProps & {
  children: ReactNode;
}
export function ModalView({children, ...rest}: Props){
  return(
    <Modal
      transparent
      animationType="slide"
      {...rest}
      >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}/>
            {children}
          </Background>
        
        </View>

      </View>
    </Modal>
    
  );
}