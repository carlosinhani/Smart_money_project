import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, FlatList } from 'react-native';

const App = () => {
 const addEntry = () => {
    alert ("Abrir tela de adicionar lançamento.");
  }
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Saldo: R$2.102,45</Text>
      <Button onPress={addEntry} title="Adicionar"></Button>

      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Categorias</Text>

      <FlatList data={[
        {key: "Alimentação: R$200"},
        {key: "Combustível: R$12"},
        {key: "Aluguel: R$120"},
        {key: "Lazer: R$250"},
        {key: "Outros: R$1200"},
      ]}
    renderItem={({item}) => <Text>{item.key}</Text> }
      ></FlatList>

      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Ultimos Lançamentos</Text>

      <FlatList data={[
        {key: "Padaria Asa Branca: R$10"},
        {key: "Supermercado Isadora: R$190"},
        {key: "Posto Ipiranga: R$190"},
      ]}
      renderItem={({item}) => <Text>{item.key}</Text> }
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({


});

export default App;