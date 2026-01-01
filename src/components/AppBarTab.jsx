import { Pressable, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10
  }
});

const AppBarTab = ({ children }) => {
    return (
        <Pressable>
            <Text color="textTertiary" fontWeight="bold" fontSize="subheading" style={styles.item}>{children}</Text>
        </Pressable>
    )
}

export default AppBarTab