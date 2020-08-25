/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import MedicationListItem from '../components/MedicationListItem';
import { withMeds } from '../queries';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

const MedList = ({navigation, withMeds, meds}) => {
  const onPress = (med) => navigation.navigate('MedDetails', med);
  const medicaments = _.get(meds, ['meds', 'nodes'], []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.chartWrapper} /> */}
        <View style={styles.MedicationListWrapper}>
          <FlatList
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}, idx) => (
              <MedicationListItem key={1} medicament={item} onPress={onPress} />
            )}
            data={medicaments}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const ConnectedMedList = withMeds(MedList);
class MedListWithUserId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    }
  }
  async componentDidMount() {
    const user = await AsyncStorage.getItem('user');
    this.setState({userId: parseInt(user)});
  }
  render() {
    const { userId } = this.state;
    return <ConnectedMedList {...this.props} userId={userId}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartWrapper: {
    backgroundColor: 'red',
    flex: 1,
  },
  MedicationListWrapper: {
    height: '70%',
    width: '100%',
  },
});

export default withMeds(MedListWithUserId);
