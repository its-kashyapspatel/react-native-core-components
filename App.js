import {View, Text, Image, ImageBackground, ScrollView, Button} from 'react-native';
import { Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  return (

    // View Component

    // <View style={{flex:1, backgroundColor:"plum"}}></View>

    <View style={{flex:1, backgroundColor:"plum"}}>
      <View style={{width:200, height:200, backgroundColor:"lightblue"}}>
      </View>
      <View style={{width:200, height:200, backgroundColor:"lightgreen"}}>
      </View>
    </View>

    // Text Component

    // <View style={{flex:1, backgroundColor:"plum", alignItems:"center", paddingTop:100}}>
    //   {/* <Text>Namaste</Text> */}
      
    //   {/* <Text>
    //     <Text style={{color:"purple"}}>Hello </Text>
    //     <Text style={{color:"white"}}>World</Text>
    //   </Text> */}
    // </View>

    // Image Component

    // <View style={{flex:1, backgroundColor:"plum"}}>
    //   <Image source={logoImg} style={{width:200, height:200}}/>
    //   <Image source={{uri:'https://picsum.photos/200'}} style={{width:200, height:200}}/>
    // </View>

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <ImageBackground source={logoImg} style={{flex:1}}>
    //     <Text>IMAGE TEXT</Text>
    //   </ImageBackground>
    // </View>

    // Scroll View Component

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <ScrollView>
    //     <Image source={logoImg} style={{width:200, height:200}}/>
    //     <Text>Chandrayaan-3 (pronunciationi; from Sanskrit: Chandra, "Moon" and yāna, "craft, vehicle"), is the third mission in the Chandrayaan programme, a series of lunar-exploration missions developed by the Indian Space Research Organisation (ISRO).[7] Launched in July 2023, the mission consists of a lunar lander named Vikram and a lunar rover named Pragyan, similar to those launched aboard Chandrayaan-2 in 2019.</Text>
    //     <Text>Chandrayaan-3 (pronunciationi; from Sanskrit: Chandra, "Moon" and yāna, "craft, vehicle"), is the third mission in the Chandrayaan programme, a series of lunar-exploration missions developed by the Indian Space Research Organisation (ISRO).[7] Launched in July 2023, the mission consists of a lunar lander named Vikram and a lunar rover named Pragyan, similar to those launched aboard Chandrayaan-2 in 2019.</Text>
    //     <Image source={logoImg} style={{width:200, height:200}}/>
    //   </ScrollView>
    // </View>

    // Button Component

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <Button title="Press" onPress={() => console.log("Button Pressed.")} color="midnightblue" disabled={false}/>
    // </View>

    // Pressable

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <Pressable onPress={() => console.log("Image Pressed.")}>
    //     <Image source={logoImg} style={{width:200, height:200}}/>
    //   </Pressable>
    //   <Pressable onPress={() => console.log("Text Pressed.")}>
    //     <Text>Chandrayaan-3 (pronunciationi; from Sanskrit: Chandra, "Moon" and yāna, "craft, vehicle"), is the third mission in the Chandrayaan programme, a series of lunar-exploration missions developed by the Indian Space Research Organisation (ISRO).[7] Launched in July 2023, the mission consists of a lunar lander named Vikram and a lunar rover named Pragyan, similar to those launched aboard Chandrayaan-2 in 2019.</Text>
    //   </Pressable>
    // </View>

    // Modal Component

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <Button
    //     title="Press"
    //     onPress={() => setIsModalVisible(true)}
    //     color="midnightblue">
    //   </Button>
    //   <Modal 
    //     visible={isModalVisible}
    //     onRequestClose={() => setIsModalVisible(false)}
    //     animationType="slide"
    //     presentationStyle="pageSheet" // only affects ios devices
    //   >
    //     <View style={{flex:1, backgroundColor:"lightblue", padding:60}}>
    //       <Text>
    //         Modal Content
    //       </Text>
    //       <Button title="Close"
    //         color="midnightblue"
    //         onPress={()=>setIsModalVisible(false)}
    //       >
    //       </Button>
    //     </View>
    //   </Modal>
    // </View>

    // Status Bar Component

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <Button
    //     title="Press"
    //     onPress={() => setIsStatusBarVisible(true)}
    //   />
    //   <Button
    //     title="Press To Show"
    //     onPress={() => setIsStatusBarVisible(false)}
    //   />
    //   <StatusBar 
    //     backgroundColor="lightgreen" // only for android device
    //     barStyle="light-content"
    //     hidden={isStatusBarVisible}
    //   />
    // </View>

    // Activity Indicator Component

    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <ActivityIndicator/>
    //   <ActivityIndicator size="large"/>
    //   <ActivityIndicator size="large" color="white"/>
    //   <ActivityIndicator size="large" color="white" animating={false}/>
    // </View>

    // Alert Component
    
    // <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    //   <Button title="Alert" onPress={() => Alert.alert("Invalid Data.")}/>
    //   <Button title="Alert 2" onPress={() => Alert.alert("Invalid Data.", "DOB in correct.")}/>
    //   <Button title="Alert 2" onPress={() => Alert.alert("Invalid Data.", "DOB in correct.", [{text: 'Cancel', onPress: ()=>console.log("Cancel Pressed.")}, {text: 'Ok', onPress: ()=>console.log("Ok Pressed.")}])}/>
    // </View>
  );
}