// Importa o React para construir componentes
import React from 'react';

// Importa o componente createBottomTabNavigator do pacote @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa o componente Ionicons para ícones vetoriais
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importa os componentes de tela Feed e CreateStory da pasta ../screens


// Cria um objeto Tab utilizando o createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Define o componente funcional BottomTabNavigator
const BottomTabNavigator = () => {
  return (
    // Renderiza o Tab.Navigator que configura a navegação por abas na parte inferior

  );
}

// Exporta o componente BottomTabNavigator para ser utilizado em outras partes do aplicativo
export default BottomTabNavigator;
