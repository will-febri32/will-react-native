import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const BaseLayout = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
