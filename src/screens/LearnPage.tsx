import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LearnPage =  () => {
  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
        <Text style={tw`p-4 text-blue-500`}> This is Learn Page </Text>
    </SafeAreaView>
  );
}

export default LearnPage;
