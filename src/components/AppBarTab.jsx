import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text'

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10
  }
});

const AppBarTab = ({ to, pressFunction, children }) => {
  const content = (
    <Text color="textTertiary" fontWeight="bold" fontSize="subheading" style={styles.item}>
      {children}
    </Text>
  )
    return (
      <Pressable onPress={pressFunction}>
        {to ? <Link to={to}>{content}</Link> : content}
      </Pressable>
    )
}


export default AppBarTab