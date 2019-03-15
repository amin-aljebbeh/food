import React, { Component } from 'react';
import Sketch from 'react-native-sketch';
import firebase from 'firebase'
import {
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob'


// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class Canvas extends Component {
  state = {
    color: '#FFFFFF',
    path: null,
  };

  onColorChange = (color) => {
    this.setState({ color });
  };

  onChange = () => {
    console.log('onChange event'); 
  };

  clear = () => {
    this.sketch.clear();
  };

  save = () => {
    this.sketch.save().then(({ path }) => {
      this.setState({ path });
      console.log('Image Saved : ' + path);
      alert('Image saved!' + path);
      this.Upload_Image(path);
    });
  };

  renderColorButton = (color) => {
    const active = color === this.state.color;

    return (
      <TouchableOpacity
        onPress={() => this.onColorChange(color)}
        style={[
          styles.colorButton,
          {
            backgroundColor: active ? '#000' : color,
            borderColor: color,
          },
        ]}
      />
    );
  };

  Upload_Image(uri, mime = 'application/octet-stream') {
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      console.log('Image URi is : ' + uri)
      const imageRef = firebase.storage().ref('files').child('file.png')
      console.log('image Ref is : ******** ' + imageRef)
      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((Blob) => {
          uploadBlob = Blob
          return imageRef.put(Blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
          this.props.callback(url)
          console.log(url)

        })
        .catch((error) => {
          reject(error)
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.state.path ? 'default' : 'light-content'} />
        <View style={styles.colorsBar}>
          {this.renderColorButton('#20BBFC')}
          {this.renderColorButton('#2DFD2F')}
          {this.renderColorButton('#FD28F9')}
          {this.renderColorButton('#EA212E')}
          {this.renderColorButton('#FD7E24')}
          {this.renderColorButton('#FFFA38')}
          {this.renderColorButton('#FFFFFF')}
        </View>
        <Sketch
          fillColor="#000"
          imageType="png"
          onChange={this.onChange}
          ref={(sketch) => {
            this.sketch = sketch;
          }}
          strokeColor={this.state.color}
          strokeThickness={3}
          style={styles.sketch}
        />
        <View style={styles.actionsBar}>
          <Button color="#EA212E" onPress={this.clear} title="❌ Clear" />
          <Button color="#1DBD21" onPress={this.save} title="Save  ✅" />
        </View>
        <Modal animationType="slide" visible={!!this.state.path}>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
    paddingTop: 20,
  },
  colorsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  colorButton: {
    borderRadius: 50,
    borderWidth: 8,
    width: 25,
    height: 25,
  },
  sketch: {
    borderRadius: 20,
    margin: 20,
  },
  actionsBar: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  modal: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    flex: 1,
  },
  title: {
    color: '#333333',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    margin: 20,
  },
});