import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  ModalView,
} from '../components'
import { Alert,Modal, Text, TouchableHighlight, View } from 'react-native';

 const Container = styled.View`
   width: 100%;
   margin-top: 30px;
   display: flex;
   background-color: #fff;
 `

 class Prueba extends Component {
   constructor() {
     super()
     this.state = {
       modalVisible: false,
     }
   }
   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }

   render() {
     const ViewOpacity = styled.View`
       z-index: 2;
       background-color: rgba(0,0,0,0.45);
       display: ${()=>this.state.modalVisible == true ? 'flex': 'none'};
       width: 100%;
       height: 100%;
     `
     return(
       <Container style={{marginTop: 22}}>
         <ViewOpacity></ViewOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          style={{width:'50%', borderColor:'black',borderWidth:1,}}
          >
         <View style={{width:'50%', borderColor:'black',borderWidth:1,backgroundColor:'#fff'}}>
          <View style={{zIndex:3,}}>
            {Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},

              ],
              {cancelable: false}
          )
          }
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
       </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </Container>
     )
   }
 }
export default Prueba
