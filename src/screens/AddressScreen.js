import React, { Component } from 'react';
import _ from 'lodash';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class AddressScreen extends Component {
  render() {
    const onAddressSelected = (data) => {
      _.get(this.props, ['route', 'params', 'onAddressSelected'], () => {})(data);
      this.props.navigation.goBack();
    }
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        query={{
          key: 'AIzaSyCH3uGh1D8wrG0yM7OF6gIjJ1SDgxSI08M',
          language: 'en',
        }}
        styles={{
          container: {
            backgroundColor: '#fff',
          },
          textInput: {
            color: 'black',
          },
        }}
        //currentLocation={!address}
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        fetchDetails={true}
        onPress={onAddressSelected}
        //getDefaultValue={() => address}
        currentLocation={false}
        debounce={120}
      />
    );
  }
}

export default AddressScreen;