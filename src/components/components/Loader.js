import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Modal, View} from 'react-native';
var Spinner = require('react-native-spinkit');

export default class Loader extends Component {
  render() {
    return (
      <Modal
        style={styles.modalStyle}
        transparent={true}
        animationType={'none'}
        visible={this.props.isLoading}>
        <View style={styles.modalStyle}>
          <Spinner
            style={styles.loadingIcon}
            isVisible={this.props.isLoading}
            size={this.props.indicatorSize}
            type={'Bounce'}
            color={this.props.indicatorColor}
          />
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  indicatorSize: PropTypes.number,
  indicatorColor: PropTypes.string,
  backGroundColor: PropTypes.string,
};
const styles = StyleSheet.create({
  loadingIcon: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(32, 32, 32, 0.6)',
  },
});
