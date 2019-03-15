import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
import { Actions } from 'react-native-router-flux';


const CustomersDetail = ({record}) => {
  const {contractor_id, name, email, phone, notes, sketch_link} = record;
  const {
        headerContentStyle,
        cardStyle,
        headerTextStyle,
        imageStyle,
        thumbnailStyle,thumnailContainerStyle } = styles;
  return (
    <Card styles={cardStyle}>
      <CardSection>
      <View style={thumnailContainerStyle}>
        <Image style={thumbnailStyle}
        source={{uri: "/Users/amin/Desktop/react/contractors/angstron_interview20/DemoApp/src/components/info.png" }}
         />
      </View>
      <View style = {headerContentStyle}>
        <Text style={headerTextStyle}>Name  {name}</Text>
        <Text style={headerTextStyle}>Email  {email}</Text>
      </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: sketch_link}} />
      </CardSection>
      <CardSection> 
        <Button whenClicked={() => Actions.contractorcustomerview()}>
            View Full Details 
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize:18,
    flex:1
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  cardStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
  }
};
export default CustomersDetail;
