import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity  } from "react-native";
import Carousel from 'react-native-snap-carousel';
import aliments from '../data/aliments.json';

const List = ({ aliment }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
      setExpanded(!expanded);
    };

    return (
      <TouchableOpacity onPress={handlePress}>
      <View>
        <Image source={{uri: aliment.image}} style={{ width: 150, height: 150 }}  />
        <Text>{aliment.name}</Text>
        {expanded && (
          <View >
            {aliment.ingredients.map((ingredient, index) => (
              <Text key={index}>
                {`${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`}
              </Text>
            ))}
          </View>
        )}
      </View>
      </TouchableOpacity>
    );
};

const HorizontalList = () => {
    return (
    <View >
      <Carousel
        data={aliments}
        renderItem={({ item }) => <List aliment={item} />}
        sliderWidth={300}
        itemWidth={200}
        layout={'default'}
        loop
      />
    </View>
  );
};

export default HorizontalList;