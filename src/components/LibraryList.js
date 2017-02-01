import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};
// CONNECT A COMPONENT TO STATES
export default connect(mapStateToProps)(LibraryList);
