import React from 'react';

import { Feather } from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import avatarImg from '../../assets/avatar01.png';

import levelGood from '../../assets/Good.png';
import levelModerate from '../../assets/Moderate.png';
import levelBad from '../../assets/Bad.png';

import styles from'./styles';

export default function News(){
  return (
    <View style={styles.container}>
      <Text style={styles.textDay}>Hoje</Text>

      <View style={styles.postCard}>

        <View style={styles.postHeader}>
          <Image source={avatarImg}/>
          <Text style={styles.textName}>@HudsonNoticias</Text>
          <Text style={styles.textLevel}>Noticiador de primeira viagem</Text>
          <Image source={levelModerate}/>
          <Text style={styles.textHour}>2h</Text>
        </View>

        <View style={styles.postNotice}>
          <Text style={styles.textTitleNotice}>Secretaria de Saúde confirma primeira morte pelo coronavírus no Piauí</Text>
          <Text style={styles.textBodyNotice}>A Secretaria de Estado da Saúde (Sesapi) confirmou neste sábado (28) a primeira morte pelo novo coronavírus no Piauí. O paciente que morreu por conta da Covid-19, doença...</Text>
          <TouchableOpacity style={styles.detailsButton}
                                onPress={() => {}}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041"/>
              </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}