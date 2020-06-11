import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },

    searchBar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 18,
    },

    cardsSection: {
        width: '100%',
        alignItems: 'center',
    },

    cardsSectionRow: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    gradientView: {
        width: '45%',
        borderRadius: 5
    },

    card: {
        width: '100%',
        height: 100,
        paddingTop: 12,
        paddingLeft: 15,
        borderRadius: 5,
    },

    cardText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})