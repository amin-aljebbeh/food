import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'


const ContractorCustomerDetail = ({record}) => {
  const {name, email, phone, notes, sketch_link} = record;
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
        source={{uri: 'https://drive.google.com/file/d/1iS_cCulvrbMmUWj1mvv62QfKh_-uoyNJ/view?usp=sharing' }}
         />      
      </View>
      <View style = {headerContentStyle}>
        <Text style={headerTextStyle}>Name  {name}</Text>
        <Text style={headerTextStyle}>Email  {email}</Text>
        <Text style={headerTextStyle}>Phone  {phone}</Text>

      </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: sketch_link}} />
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
export default ContractorCustomerDetail;

