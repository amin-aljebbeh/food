import React, { Component } from 'react';
import { View } from 'react-native';
import  {Button, CardSection, Input, Card}  from './common'
import Canvas   from './Canvas'

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

		
		fetch('http://127.0.0.1:3003/addcustomer', {
			method: 'post',
			header:{
				Accept: 'application/json',
				'Content-type': 'application/json',
			},
			body: console.log(JSON.stringify({
                contractor_id: contractor_id,
                name: name,
                email: email,
                phone: phone,
                notes: notes,
                sketch_link: sketch_link,
			})),
			
		}).then(response => response.json())
        .then(response => {
        
        console.log(response);  
        }
        )
    }
  render() {
    return (
    <View>
        <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          onChangeText= {name => this.setState({name})}
        />
      </CardSection>

       <CardSection>
          <Input
            label="email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText= {email => this.setState({email})}
          />
        </CardSection>

         <CardSection>
          <Input
            label="phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText= {phone => this.setState({phone})}
          />
        </CardSection>

         <CardSection>
          <Input
            label="notes"
            placeholder="Any Text about this customer to remember"
            value={this.props.notes}
            onChangeText= {notes => this.setState({notes})}
          />
        </CardSection>

         <CardSection>
          <Input
            label="link"
            placeholder="www.google.com"
            value={this.props.sketch_link}
            onChangeText= {sketch_link => this.setState({sketch_link})}
          />
        </CardSection>
        <View style={styles.canvasStyle}>
            <Canvas  />
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