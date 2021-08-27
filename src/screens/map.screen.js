import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return (
    <SafeAreaView>
      <Map
        showsUserLocation={true}
        initialRegion={{
          latitude: 30.266921,
          longitude: -97.738265,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: 30.27081, longitude: -97.738265 }} />
      </Map>
    </SafeAreaView>
  );
};

export default MapScreen;
