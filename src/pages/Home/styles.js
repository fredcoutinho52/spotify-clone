import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#000'
    },

    section: {
        width: '90%',
        alignItems: 'center',
        marginBottom: 60,
    },

    sectionTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    albumSection: {
        alignItems: 'center',
        marginRight: 25,
    },

    albumImage: {
        width: 150,
        height: 150,
    },

    albumArtist: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    }
})