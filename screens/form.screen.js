import React from "react";
import * as Constants from "expo-constants";
import * as Yup from "yup";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import { Formik } from "formik";

const formSchema = Yup.object({
  name: Yup.string().required("Required"),
  stack: Yup.string().required("Required"),
  displayName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
});

export const FormScreen = ({ addDetail }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/hng2.png")} />

        <Text style={styles.title}>Zuri Assignment</Text>
      </View>

      <Formik
        initialValues={{ name: "", stack: "", displayName: "", email: "" }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addDetail(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            {props.touched.name && props.errors.name ? (
              <Text style={styles.error}>{props.errors.name}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Your stack"
              onChangeText={props.handleChange("stack")}
              value={props.values.stack}
            />
            {props.touched.name && props.errors.stack ? (
              <Text style={styles.error}>{props.errors.stack}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Your display name"
              onChangeText={props.handleChange("displayName")}
              value={props.values.displayName}
            />
            {props.touched.name && props.errors.displayName ? (
              <Text style={styles.error}>{props.errors.displayName}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />
            {props.touched.name && props.errors.email ? (
              <Text style={styles.error}>{props.errors.email}</Text>
            ) : null}
            <Button
              title="Submit"
              onPress={props.handleSubmit}
              color="maroon"
              mode="contained"
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
  },
});
