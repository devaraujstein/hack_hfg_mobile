import React from 'react';

import { Feather } from '@expo/vector-icons';
import {View, SafeAreaView, ScrollView  , Image, Text, TouchableOpacity} from 'react-native';

import avatarImg01 from '../../assets/avatar01.png';
import avatarImg02 from '../../assets/avatar02.png';
import avatarImg03 from '../../assets/avatar03.png';

import levelGood from '../../assets/Good.png';
import levelModerate from '../../assets/Moderate.png';
import levelBad from '../../assets/Bad.png';

import styles from'./styles';

export default function News(){
  return (
    <View style={styles.container}>
      <Text style={styles.textDay}>Hoje</Text>
        <SafeAreaView >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.postCard}>

              <View style={styles.postHeader}>
                <Image source={avatarImg01}/>
                <Text style={styles.textName}>@HudsonNoticias</Text>
                <Image source={levelModerate}/>
                
                <Text style={styles.textLevel}>Noticiador de primeira viagem</Text>
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
            
            <View style={styles.postCard}>

              <View style={styles.postHeader}>
                <Image source={avatarImg02}/>
                <Text style={styles.textName}>@PauloBonner</Text>
                <Image source={levelGood}/>
                
                <Text style={styles.textLevel}>Noticiador Junior</Text>
                <Text style={styles.textHour}>2h</Text>
              </View>

              <View style={styles.postNotice}>
                <Text style={styles.textTitleNotice}> Brasil registra 3.417 casos confirmados do novo coronavírus e que já foram registradas 92 mortes</Text>
                <Text style={styles.textBodyNotice}>As secretarias estaduais de Saúde divulgaram, até 13h00 deste sábado (28), 3.546 casos confirmados do novo coronavírus (Sars-Cov-2) no Brasil com 94 mortos, 68 deles em São Paulo, de acordo com a secretaria de Saúde do estado...</Text>
                <TouchableOpacity style={styles.detailsButton}
                                      onPress={() => {}}
                    >
                      <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                      <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
              </View>
            </View>

            <View style={styles.postCard}>

              <View style={styles.postHeader}>
                <Image source={avatarImg03}/>
                <Text style={styles.textName}>@HudsonNoticias</Text>
                <Image source={levelBad}/>
                
                <Text style={styles.textLevel}>Noticiador de primeira viagem</Text>
                <Text style={styles.textHour}>2h</Text>
              </View>

              <View style={styles.postNotice}>
                <Text style={styles.textTitleNotice}>Maranhão registra a primeira morte pelo novo coronavírus</Text>
                <Text style={styles.textBodyNotice}>O secretário estadual de Saúde, Carlos Eduardo Lula, confirmou no início da tarde deste domingo (29) a primeira morte pelo novo coronavírus no Maranhão. A informação foi divulgada por meio de uma rede social...</Text>
                <TouchableOpacity style={styles.detailsButton}
                                      onPress={() => {}}
                    >
                      <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                      <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
}