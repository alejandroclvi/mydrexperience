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
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import AppButton from '../components/AppButton';
import { withUpdateMed, USER_MEDS, withMed } from '../queries';
import _ from 'lodash';

class EditableSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: props.value,
    };
  }
  render() {
    const {newValue} = this.state;
    const {editable, onFocus, value, name, save} = this.props;
    const isBeingEdited = name === editable;
    return (
      <View style={{flexDirection: 'row', borderRadius: 10, marginTop: 10, backgroundColor: '#1e90ff', padding: 10}} onPress={() => {}}>
         <TextInput
          ref='input'
          onFocus={onFocus}
          value={isBeingEdited ? newValue: value}
          style={styles.value}
          autoCapitalize='none'
          onChangeText={text => this.setState({newValue: text})}
        />
        <View style={styles.actionBtn}>
          { isBeingEdited ?
            <Text
              onPress={() => {
                save({[name]: newValue})
                this.refs.input.blur();
              }}
              style={{color: 'white', fontWeight: 'bold'}}
            >
              Save
            </Text>
            :
            <Text onPress={() => this.refs.input.focus()} style={{color: 'white', fontWeight: 'bold'}}>Edit</Text>
          }
        </View>
      </View>
    );
  }
}

function MedicationItem({editable, save, updateState, medById}) {
  const { name, dosis, frequency, cost } = _.get(medById, ['med'], {});
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{name}</Text>
        <Image
          style={styles.img}
          source={require('../assets/ibuprofen.jpg')}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.section}>
          <Text style={styles.subHeader}>Dosage</Text>
          <EditableSection
            save={save}
            onFocus={() => updateState({editable:'dosis'})}
            onEndEditing={() => updateState({editable:''})}
            value={dosis}
            name='dosis'
            editable={editable}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subHeader}>Frequency</Text>
          <EditableSection
            save={save}
            onFocus={() => updateState({editable:'frequency'})}
            onEndEditing={() => updateState({editable:''})}
            value={frequency}
            name='frequency'
            editable={editable}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subHeader}>Cost</Text>
          <Text style={styles.value}>$ {cost}</Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <AppButton title="Re-fill" />
      </View>
    </>
  );
}

const ConnectedMedicationItem = withMed(MedicationItem)

class MedDetails extends Component {
  constructor(props) {
    super(props);
    const { dosis, frequency } = this.props.route.params;
    this.state = {
      dosis,
      frequency,
      editable: '',
    };
  }
  save = (patch) => {
    const { id } = this.props.route.params;
    console.log('jajaja', this.props.route.params);
    const input = { patch, id};
    return this.props.updateMed({
      variables: { input },
      refetchQueries: [{
        query: USER_MEDS,
        variables: { userId: 1 },
      }]
    })
    .then(() => this.setState({editable: ''}));
  }
  render() {
    const { editable } = this.state;
    const { name, dosis, frequency, cost, id } = this.props.route.params;
    const medItemProps = {
      id,
      name,
      dosis,
      frequency,
      cost,
      editable,
      save: this.save,
      updateState: newState => this.setState(newState),
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <ConnectedMedicationItem {...medItemProps}/>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionBtn: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
    paddingRight: 10,
  },
  btnWrapper: {
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  value: {
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
  },
  subHeader: {
    fontWeight: 'bold',
  },
  section: {
    padding: 30,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  headerWrapper: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default withUpdateMed(MedDetails);
