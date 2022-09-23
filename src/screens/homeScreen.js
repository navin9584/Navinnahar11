import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableHighlight, Image, Dimensions, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Carousel from "../components/carousel.js";
import { dummydata, homedata } from "../data/data.js";
import { Colors } from "../assets/styles/color.js";
import Headings from "../components/heading.js";
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window')
const HomeScreen = ({ navigation, data, props }) => {
    const [liked, setLiked] = useState(false)
    const propOwn = Object.keys(homedata).length;
    console.log('propOwn', propOwn); // 1

    const heart = <Icon name="heart" size={30} color="#900" />
    const fillheart = <Icon name="heart-o" size={30} color="#900" />
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousel data={dummydata} />

                <View>
                    <FlatList
                        data={homedata}
                        // ref={(flatList) => { this.flatList = flatList }}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={'fast'}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ top: 10 }}>
                                    <View item={item} style={styles.categoryview} >
                                        <Image style={styles.image} source={{ uri: item.url }} />
                                    </View>
                                    <View style={styles.categorytitle}>
                                        <Text>{item.title}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
                <Headings
                    offerText={'OFFERS'}
                    viewAlltext={"View All"}
                    onPressViewAll={() => navigation.navigate('AllOffer')}
                />
                {homedata != '' || homedata[0] != null ?
                <FlatList
                    data={homedata}
                    // ref={(flatList) => { this.flatList = flatList }}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{}}>
                                <View item={item} style={styles.offerView} >
                                    <Image style={styles.offerimage} source={{ uri: item.url }} />
                                </View>
                                <TouchableOpacity style={styles.shopnow}>
                                    <Text>shop now</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />:
                // <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>No data found</Text>
                // </View>
            }

                <Headings
                    offerText={'Best selling products'}
                    viewAlltext={"View All"}
                    onPressViewAll={() => navigation.navigate('AllProduct')}
                />
                <Text style={{ marginLeft: 10 }}> {Object.keys(homedata) ? Object.keys(homedata).length : 0} items Found</Text>

                {homedata != '' || homedata[0] != null ?
                    <FlatList
                        data={homedata}
                        // ref={(flatList) => { this.flatList = flatList }}
                        keyExtractor={(item, index) => 'key' + index}
                        // horizontal
                        pagingEnabled
                        scrollEnabled
                        numColumns={2}
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={'fast'}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.cardView} onPress={() => {
                                    setLiked(!liked)
                                }}>
                                    <View item={item} >
                                        <Image style={styles.cardImage} source={{ uri: item.url }} />
                                    </View>
                                    <Text style={{ color: '#111', marginLeft: 5 }}>{item.title}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                    {item.discount_price ?
                                        <Text style={{ color: '#111', marginLeft: 5 }}>Rs.{item.discount_price}</Text> :
                                        <Text style={{ color: '', marginLeft: 5 }}>{''}</Text>}
                                    {item.discount_price ?
                                        <Text style={{ color: 'red', marginLeft: 5, textDecorationLine: 'line-through', fontSize: 12 }}>Rs.{item.price}</Text> :
                                        <Text style={{ color: '#111', marginLeft: 5, bottom: 10 }}>Rs.{item.price}</Text>
                                    }
                                    </View>
                                    <TouchableOpacity style={styles.shopnow1}>
                                    <Text>shop now</Text>
                                </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', marginHorizontal: 5 }}>
                                        <Icon name={liked ? "heart" : "heart-o"} size={20} color="#111"
                                        />

                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    /> :
                    // <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>No data found</Text>
                    // </View>
                }



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryview: {
        width: 70,
        height: 70,
        borderWidth: 1.5,
        borderRadius: 35,
        borderColor: Colors.Pink,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    categorytitle: {
        width: 70,
        height: 70,
        marginHorizontal: 5,
        alignItems: 'center',
        top: -5
    },
    offerView: {
        width: width / 1.4,
        height: height / 5,
        borderWidth: 1.5,
        borderRadius: 35,
        borderColor: Colors.Pink,
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    offerimage: {
        width: width / 1.4,
        height: height / 5,
        borderRadius: 25
    },
    shopnow: {
        top: -40,
        left: 5,
        backgroundColor: '#F4880B',
        width: 70,
        height: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    shopnow1: {
        top:10,
        left: 30,
        backgroundColor: '#F4880B',
        width: 70,
        height: 20,
        borderRadius: 10,
        // alignItems: 'center'
    },
    cardView: {
        // flex:1,
        left: 5,
        right: 5,
        width: '47%',
        height: height / 2.5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        margin: 3,
        top: 10,


    },
    cardImage: {
        width: '100%',
        height: height / 3.2,
        borderRadius: 5,
        borderBottomWidth: 1,

    }
})
export default HomeScreen;