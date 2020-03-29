import React, { useState, useEffect } from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

// FlatList permite a página ser "escollavel"
// 'data' recebe os dado da api
// 'keyExtractor' recebe o valor único do dado para o caso de uma operação de
// deleção
// 'renderItem' retorna um map com todos os item do dado recebido
// 'showsVerticalScrollIndicator={false}' desabilita a visualização da barra
// lateral de escollavel
// TouchableOpacity cria um componente que pode simular um botão ou link
// que diminui sua opacidade quando clicado.
// O Android não suporte a Builtin Intl. Basta então instalar a dependencia
// Intl

export default function Incidents() {
  const [ incidents, setIncidents ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const navigation = useNavigation();

  function navigationToDetail( incident ) {
    navigation.navigate('Detail', { incident }) // precisa ser o mesmo nome definido nas rotas
  }


  async function loadIncidents() {
    const response = await api.get('incidents');
    setIncidents(response.data);
    setTotal(response.headers['x-total-count'])
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image source={ logoImg } />
        <Text style={  styles.headerText }>
          total de <Text style={ styles.headerTextBold } >{total} casos</Text>.
        </Text>
      </View>

      <Text style={ styles.title }>
        Bem-vindo!
      </Text>
      <Text style={ styles.description }>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        style={ styles.incidentList }
        showsVerticalScrollIndicator={false}
        data={incidents}
        keyExtractor={ incident => String(incident.id) }
        renderItem={ ( { item: incident } ) => (
          <View style={ styles.incident }>
            <Text style={ styles.incidentProperty }>ONG:</Text>
            <Text style={ styles.incidentValue }>{incident.name}</Text>
            <Text style={ styles.incidentProperty }>CASO:</Text>
            <Text style={ styles.incidentValue }>{incident.description}</Text>
            <Text style={ styles.incidentProperty }>VALOR:</Text>
            <Text style={ styles.incidentValue }>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={ styles.detailsButton }
              onPress={ () => navigationToDetail(incident) }
            >
              <Text style={ styles.detailsButtonText }>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}
      />

      </View>
  );
}
