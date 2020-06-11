import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

import styles from './styles'

import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'

const data = [
    { id: 1, image: one, name: 'Ed Sheeran' },
    { id: 2, image: two, name: 'Pink Floyd' },
    { id: 3, image: three, name: 'Guns N Roses' },
    { id: 4, image: four, name: 'Dream Catcher' },
    { id: 5, image: five, name: 'Radio Head' },
]

export default function Library() {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.albunsList}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.albumView}>
                        <Image style={styles.albumImage} source={item.image}/>
                        <Text style={styles.albumName}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}