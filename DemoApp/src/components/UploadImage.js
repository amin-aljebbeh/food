import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
import { resolve } from 'path';
import { url } from 'inspector';


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob



export const uploadImage = (uri,mime = 'application/octet-stream') => {
    return(dispatch) => {
        return new Promise((resolve,reject) => {
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://','') : uri
            const sessionId = new Date().getTime()
            let uploadBlob = null 

            const imageREf = firebase.storage().ref('files').child('upload.jpg')
            fs.readFile(uploadUri,'base64')
            .then((data) => {
                return Blob.build  (data, {type: `${mime};BASE64`})
            })
            .then(() => {
            uploadBlob.close() 
            return imageREf.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
                storeREfrence(url,sessionId)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}