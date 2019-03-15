import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import  {Button, CardSection, Input}  from './common'
import Canvas   from './Canvas'
import axios from 'axios'

export default class AddNewCustomer extends Component {

    constructor(props){
		super(props)
		this.state={
            contractor_id:'',
			name:'',
			email:'', 
            phone:'',
            notes:'',
            sketch_link:''			
		}
    }


    addCustomer = () =>{
		alert('ok'); // version 0.48
		const{contractor_id} = this.state;
		const {name} = this.state;
		const {email} = this.state;
		const {phone} = this.state;
        const {notes} = this.state;
        const {sketch_link} = this.state;
        
        console.log("Contractor id : " + contractor_id + " name " + name + " email :" + email + "phone : " + phone + " notes : " + notes + " link : " + sketch_link);

        
        const params = {
            contractor_id: contractor_id,
            name: name,
            email: email,
            phone: phone,
            notes: notes,
            sketch_link: sketch_link
  };

  axios.post('http://127.0.0.1:3003/addcustomer', params, {
       headers: {
            'content-type': 'application/x-www-form-urlencoded',
       },
  })
    }

    getLinkToSave(sketch_link){
        this.setState({sketch_link});
    }


  render() {
    return (
    <View>

    <CardSection>
        <Input
          label="ID"
          placeholder="1"
          onChangeText= {contractor_id => this.setState({contractor_id})}
        />
      </CardSection>

        <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          onChangeText= {name => this.setState({name})}
        />
      </CardSection>

       <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText= {email => this.setState({email})}
          />
        </CardSection>

         <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText= {phone => this.setState({phone})}
          />
        </CardSection>

         <CardSection>
          <Input
            label="Notes"
            placeholder="Any Text about this customer to remember"
            value={this.props.notes}
            onChangeText= {notes => this.setState({notes})}
          />
        </CardSection>
        <View style={styles.canvasStyle}>
            <Canvas  callback={this.getLinkToSave.bind(this)} />
        </View>
        <CardSection>
            <Button onPress={this.addCustomer}>
                Create
            </Button>
        </CardSection>  

    </View>
    );
  }
}

const styles = {
    canvasStyle: {
        padding: 5,
        height:400,
      
    }
  };