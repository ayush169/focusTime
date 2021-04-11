import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from "../../components/RoundedButton";
import {fontSizes, spacing} from "../../utils/sizes";
import {colors} from "../../utils/colors";

export const Focus = ({setFocusSubject}) => {

  const [subject, setSubject] = useState(null);

  function handleChange(val){
    setSubject(val)
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you to fucus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex: 1, marginRight: spacing.md}} onChangeText={handleChange} />
          <RoundedButton size={50} title="+" onPress={() => setFocusSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  innerContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
