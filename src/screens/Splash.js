import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Components.
import BaseLayout from '../components/layouts/BaseLayout';

import globalStyles from '../styles/global';

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(() => {}, 1500);
  // }, []);
  return (
    <BaseLayout style={globalStyles.center}>
      <Text style={styles.logo}>
        <Text style={styles.logoSpan}>W</Text>ILL
      </Text>
    </BaseLayout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    color: '#333',
    fontFamily: 'Roboto-Black',
    fontSize: 64,
    padding: 15,
  },
  logoSpan: {
    color: '#07BEB8',
  },
});
