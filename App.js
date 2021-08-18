import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import React from "react";
import { FormScreen } from "./screens/form.screen";
import { Details } from "./screens/details.screen";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(false);
  const [subject, setSubject] = useState([]);

  const addDetail = (detail) => {
    setSubject((currentDetail) => {
      return detail;
    });
    setFocusSubject(true);
  };

  const onClear = () => {
    setFocusSubject(false);
    setSubject([]);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Details onClear={onClear} details={subject} />
      ) : (
        <FormScreen addDetail={addDetail} />
      )}
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
