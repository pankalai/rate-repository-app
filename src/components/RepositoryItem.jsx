import { Image, View, StyleSheet } from 'react-native';
import CountItem from './countItem';
import Text from './Text'
import theme from '../theme';


const styles = StyleSheet.create({
  listItemContainer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    padding: 5
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  topRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 15,
    rowGap: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10
  },
  avatarImage: {
    width: 50,
    height: 50
  },
  languageItem: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5
  }
});

const RepositoryItem = ({item}) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.topContainer}>
                <View>
                    <Image style={styles.avatarImage} source={{uri: item.ownerAvatarUrl}}/>
                </View>
                <View style={styles.topRightContainer}>
                    <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                    <Text>{item.description}</Text>
                    <View style={styles.languageItem}><Text color="textTertiary">{item.language}</Text></View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <CountItem text="Stars" count={item.stargazersCount}></CountItem>
                <CountItem text="Forks" count={item.forksCount}></CountItem>
                <CountItem text="Reviews" count={item.reviewCount}></CountItem>
                <CountItem text="Rating" count={item.ratingAverage}></CountItem>
            </View>
        </View>
    )
}

export default RepositoryItem