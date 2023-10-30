import { View, Text } from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";

export default function TestSwipe() {
  const data = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    // Add more items as needed
  ];

  const renderedItems = data.map((item, index) => (
    <View key={index} style={{ backgroundColor: "black", padding: 20 }}>
      <Text style={{ color: "white" }}>{item.text}</Text>
    </View>
  ));
  return (
    <SwipeListView
      data={data}
      renderItem={({ item, index }) => renderedItems[index]}
      renderHiddenItem={({ item }) => (
        <View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <Text style={{ color: "white" }}>Swipe Actions</Text>
        </View>
      )}
      rightOpenValue={-75}
      disableRightSwipe={true}
    />
  );
}
