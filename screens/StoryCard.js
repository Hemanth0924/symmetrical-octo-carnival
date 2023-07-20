import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, Image, Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontSize";
import * as Font from "export-font";
import * as SplashScreen from "expo-splash-screen";


export default class StoryCard extends Component {

  constructor( props){
    super(props);
    this.state = {
fontsLoaded: false
    };
  }

  ComponentDidMount(){
      this.loadFontsAsync();
  }

  render(){
    return(
        <View style = {styles.container}>
            <View style = {styles.CardContainer}>
<Image

source = {require("../assests/story_image_1.png")}
style = {styles.storyImage}
></Image>

<View style = {styles.TitleContainer}>
  
  <Text style = {styles.StoryTitleText}>
    {this.props.story.title}
  </Text>
  
  <Text style = {styles.StoryAuthorText}>
    {this.props.story.author}
  </Text>

  <Text style = {styles.StoryDescriptionText}>
    {this.props.story.description}
  </Text>

  </View>

  <View style = {styles.actionContainer}>
      <View style = {styles.LikeButton}>
        <Ionicons name = {"Heart"}
        size = {RFValue(30)}></Ionicons>
      </View>
  </View>
            </View>
        </View>
    )
  }
 
}
const styles = StyleSheet.create({
  container:{
    flex:1
    
  },
  CardContainer:{
    margin:RFValue(13),
    backgroundColor:"#2F345D",
    borderRadius:RFValue(20),
  },
  
  storyImage: {
    height:RFValue(250),
    alignSelf:"center",
    width: 95,
  },
storyImage: {
  height:RFValue(250),
  margin:RFValue(13),
},

  StoryTitleText: {
    fontSize:RFValue(25),

  },

  StoryAuthorText: {
    fontSize:RFValue(25),
    
  },
  
  StoryDescriptionText: {
    fontSize:RFValue(25),
    
  }
})