import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text'

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10
  }
});

const AppBarTab = ({ to, children }) => {
    return (
      <Pressable>
        <Link to={to}>
          <Text color="textTertiary" fontWeight="bold" fontSize="subheading" style={styles.item}>{children}</Text>
        </Link>
      </Pressable>
    )
}

export default AppBarTab