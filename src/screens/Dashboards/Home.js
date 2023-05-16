import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { height, width } from '~/utils/Layouts'
import SquareHeader from '~/components/headers/SquareHeader'
import { JobcenterTab } from '~/navigation/Tabs/JobcenterTabs'

const Home = () => {
  return (
  <SafeAreaView style={{height:height,width:width}}>
    <View style={{height:height,width:width}}>
        <SquareHeader/>
        <JobcenterTab/>
    </View>

  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})