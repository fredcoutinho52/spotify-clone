import React from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles'

const searchList = [
    ['Brasil', 'Funk'],
    ['Sertanejo', 'Cristã'],
    ['Seu astral', 'Relaxante'],
    ['Pop', 'Festa'],
    ['Rock', 'Hip Hop']
]

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Feather name="search" size={25} color="black" />
                <Text style={styles.searchBarText}>Busque artistas, músicas e playlists</Text>
            </View>

            <View style={styles.cardsSection}>
                {searchList.map(item => (
                    <View style={styles.cardsSectionRow}>
                        <LinearGradient colors={['#8360c3', '#2ebf91']} style={styles.gradientView}>
                            <View style={styles.card}>
                                <Text style={styles.cardText}>{item[0]}</Text>
                            </View>
                        </LinearGradient>

                        <LinearGradient colors={['#8360c3', '#2ebf91']} style={styles.gradientView}>
                            <View style={styles.card}>
                                <Text style={styles.cardText}>{item[1]}</Text>
                            </View>
                        </LinearGradient>
                    </View>
                ))}
            </View>
        </View>
    )
}