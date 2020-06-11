import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#000'
    },

    albunsList: {
        width: '90%',
        paddingTop: 15,
    },

    albumView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    albumImage: {
        width: 60,
        height: 60,
        marginRight: 25,
        borderRadius: 50
    },

    albumName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})