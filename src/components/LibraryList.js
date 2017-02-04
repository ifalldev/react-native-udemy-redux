import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { ListItem } from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
    console.log('library list will mount test', this.dataSource);
  }

  renderRow(library) {
    console.log('render row test', library);
    return <Text>{library.title}</Text>;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};
// CONNECT A COMPONENT TO STATES
export default connect(mapStateToProps)(LibraryList);
