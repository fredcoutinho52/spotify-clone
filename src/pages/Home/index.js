import React from 'react'
import { View, Text, ScrollView, Image, StatusBar } from 'react-native'

import styles from './styles'

import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tocadas Recentemente</Text>

                <ScrollView horizontal={true}>
                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={one}/>
                        <Text style={styles.albumArtist}>Ed Sheeran</Text>
                    </View>

                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={two}/>
                        <Text style={styles.albumArtist}>Pink Floyd</Text>
                    </View>

                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={three}/>
                        <Text style={styles.albumArtist}>Ed Sheeran</Text>
                    </View>

                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={four}/>
                        <Text style={styles.albumArtist}>Dream Catcher</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Feito para você</Text>

                <ScrollView horizontal={true}>
                <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={three}/>
                        <Text style={styles.albumArtist}>Guns N' Roses</Text>
                    </View>

                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={two}/>
                        <Text style={styles.albumArtist}>Pink Floyd</Text>
                    </View>

                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={one}/>
                        <Text style={styles.albumArtist}>Ed Sheeran</Text>
                    </View>
                    
                    <View style={styles.albumSection}>
                        <Image style={styles.albumImage} source={five}/>
                        <Text style={styles.albumArtist}>Radio Head</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}