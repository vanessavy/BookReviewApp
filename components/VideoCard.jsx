import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image, Alert, ImageBackground } from "react-native";
import { deletePost } from "../lib/appwrite";

import { icons } from "../constants";
import CustomButton from "./CustomButton";
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const VideoCard = ({ title, creator, avatar, prompt, id, rating, thumbnail}) => {
  const hasImage = thumbnail ? true : false;

  const submit = async () => {
    try {
      await deletePost(id);
      Alert.alert("Success", "Post deleted successfully");
    } catch (error) {
      Alert.alert("Error", error.message);
    } 
  };

  var stars =  <StarRatingDisplay rating={rating} starSize={22}/>;


  return (
    <View className="flex flex-col items-center px-4 rounded-2xl border-2 border-secondary-200 mt-2">
      <View className="flex flex-row gap-3 items-start">
          <View className="flex justify-center items-center flex-row flex-1">
            <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5 mt-2">
              <Image
                source={{ uri: avatar }}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
              />
            </View>

            <View className="flex justify-center flex-1 ml-3 gap-y-1 mt-1">
              <Text
                className="font-psemibold text-sm text-white"
                numberOfLines={1}
              >
                {title} <Text className="font-pregular text-sm text-gray-100 ">| {rating} </Text>
              </Text>
              
              <Text
                className="font-psemibold text-sm text-white"
                numberOfLines={1}
              >
                Stars: {stars}
              </Text>
            </View>
          </View> 
          <TouchableOpacity activeOpacity={0.3} onPress={submit}>
            <Image source={icons.deleteIcon} className="w-7 h-7 mt-4" resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-3 items-start">
          <View className="flex justify-center flex-1 ml-3 gap-y-1 mb-2">
            {hasImage ? (<>
            <TouchableOpacity
                resizeMode={ResizeMode.CONTAIN}
                activeOpacity={1}
                className="w-full h-60 rounded-xl mt-3 mb-3 relative flex justify-center items-center"
              >
                <Image
                  source={{ uri: thumbnail }}
                  className="w-full h-full rounded-xl mt-3"
                  resizeMode="cover" />
              </TouchableOpacity>
              <Text
                className="font-psemibold text-sm text-white"
              >
                  Reviews 
                </Text>
                <Text
                  className="font-pregular text-md text-white"
                >
                  {prompt}
                </Text></>) : (<>
                <Text
                  className="font-psemibold text-sm text-white"
                >
                  Reviews
                </Text>
                <Text
                  className="font-pregular text-md text-white"
                >
                    {prompt}
                </Text></>)}     
          </View>
        </View>
    </View> );
};
      {/*      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : ( 
        <TouchableOpacity
          resizeMode={ResizeMode.CONTAIN}
          activeOpacity={0.7}
          //onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          /> 
        </TouchableOpacity>
        */}
      {/* )} */}

export default VideoCard;