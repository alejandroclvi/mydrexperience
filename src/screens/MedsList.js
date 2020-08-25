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
import { VictoryPie } from 'victory-native';

const MedList = ({navigation, withMeds, meds, userId}) => {
  const onPress = (med) => navigation.navigate('MedDetails', {...med, userId});
  const medicaments = _.get(meds, ['meds', 'nodes'], []);
  const overAllExpenses = medicaments.length ? medicaments.reduce((acc, {cost, dosis}) => acc + (cost * dosis), 0) : 0;
  const graphicData = medicaments.map(({cost, name, dosis}) => {
    const medSpending = 100 * ((cost*dosis)/overAllExpenses);
    return {x: `${name} - ${medSpending}%`, y: medSpending};
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.chartWrapper}>
          <VictoryPie
            data={graphicData}
            width={250}
            height={250}
            innerRadius={50}
            style={{
            labels: {
            fill: 'white', fontSize: 15, padding: 7,
            }, }}
          /> 
        </View>
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
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MedicationListWrapper: {
    height: '60%',
    width: '100%',
  },
});

export default withMeds(MedListWithUserId);
