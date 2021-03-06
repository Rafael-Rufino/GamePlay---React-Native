import React from 'react'


import {styles} from './styles';
import {Avatar} from '../Avatar';
import {View, Text} from 'react-native';
import { theme } from '../../global/styles/theme';
export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps;
}

export function Member({data}: Props) {
  const {on, primary} = theme.colors;
  const IsOnline = data.status === 'online';
  return (
    <View style = {styles.container}>
      <Avatar urlImage={data.avatar_url}/>

      <View>
        <Text style = {styles.title}>
          {data.username}
        </Text>


        <View style = {styles.status}>
        <View
            style={[
              styles.bulletStatus,
             {
               backgroundColor: IsOnline? on : primary,
             }
            ]}
        />

    
          
          <Text style={styles.nameStatus}>
            {IsOnline ? 'Disponivel' : 'Ocupado'}
          </Text>
      

        </View>
      </View>
      
    </View>
  )
}
