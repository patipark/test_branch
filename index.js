import { View, Text } from 'react-native'
import React from 'react'
import { Sequelize, Model } from 'sequelize';

const sequelize = (sequelize, DataTypes) => {
  class AppsVersion extends Model {

    static associate (models) {

    }
  }
}

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Text>{{sequelize}}</Text>
    </View>
  )
}

export default index;
