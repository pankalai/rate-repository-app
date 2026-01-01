import { View, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  item: {
    alignSelf: 'center'
  }
});

const formatCount = (number) => {
    if (number > 1000) {
        return `${(number/1000).toFixed(1)}k`
    }
    return number
}

const CountItem = ({ text, count }) => {
    return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text fontWeight="bold">{formatCount(count)}</Text>
        </View>
        <View style={styles.item}>
            <Text>{text}</Text>
        </View>
    </View>
    )
}

export default CountItem