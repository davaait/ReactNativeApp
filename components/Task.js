import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text>{props.text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    maxWidth: '80%',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    backgroundColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
