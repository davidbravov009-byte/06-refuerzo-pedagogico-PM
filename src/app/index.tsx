 import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import {
  calcularValor,
  estadoUI,
  type ContadorConfig,
} from '@/domain/counter';

import { ContadorDisplay } from '@/components/ContadorDisplay';
import { BotonContador } from '@/components/BotonContador';

export default function CounterScreen() {
  const [valor, setValor] = useState(0);
  const [empanadas, setEmpanadas] = useState(0);
  const [jugos, setJugos] = useState(0);

  const config: ContadorConfig = {
    valor,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const configEmpanadas: ContadorConfig = {
    valor: empanadas,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const configJugos: ContadorConfig = {
    valor: jugos,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estado = estadoUI(valor, config);
  const estadoEmpanadas = estadoUI(
    empanadas,
    configEmpanadas
  );
  const estadoJugos = estadoUI(
    jugos,
    configJugos
  );

  const incrementar = () => {
    setValor(
      calcularValor(config, 'incrementar')
    );
  };

  const decrementar = () => {
    setValor(
      calcularValor(config, 'decrementar')
    );
  };

  const reiniciar = () => {
    setValor(0);
  };

  const aumentarEmpanadas = () => {
    setEmpanadas(
      calcularValor(
        configEmpanadas,
        'incrementar'
      )
    );
  };

  const reducirEmpanadas = () => {
    setEmpanadas(
      calcularValor(
        configEmpanadas,
        'decrementar'
      )
    );
  };

  const resetearEmpanadas = () => {
    setEmpanadas(0);
  };

  const aumentarJugos = () => {
    setJugos(
      calcularValor(
        configJugos,
        'incrementar'
      )
    );
  };

  const reducirJugos = () => {
    setJugos(
      calcularValor(
        configJugos,
        'decrementar'
      )
    );
  };

  const resetearJugos = () => {
    setJugos(0);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
      >

        <ContadorDisplay
          valor={valor}
          etiqueta="Sanduches"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementar}
            variante="primary"
            disabled={estado === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementar}
            variante="secondary"
            disabled={estado === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciar}
            variante="danger"
          />
        </View>

        <ContadorDisplay
          valor={empanadas}
          etiqueta="Empanadas"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={aumentarEmpanadas}
            variante="primary"
            disabled={
              estadoEmpanadas === 'MAXIMO'
            }
          />

          <BotonContador
            label="-1"
            onPress={reducirEmpanadas}
            variante="secondary"
            disabled={
              estadoEmpanadas === 'MINIMO'
            }
          />

          <BotonContador
            label="Reiniciar"
            onPress={resetearEmpanadas}
            variante="danger"
          />
        </View>

        <ContadorDisplay
          valor={jugos}
          etiqueta="Jugos"
        />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={aumentarJugos}
            variante="primary"
            disabled={
              estadoJugos === 'MAXIMO'
            }
          />

          <BotonContador
            label="-1"
            onPress={reducirJugos}
            variante="secondary"
            disabled={
              estadoJugos === 'MINIMO'
            }
          />

          <BotonContador
            label="Reiniciar"
            onPress={resetearJugos}
            variante="danger"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    padding: 20,
    gap: 20,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});