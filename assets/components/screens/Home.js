import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, Items } from '../database/images/Database'
import  {Entypo,MaterialCommunityIcons,FontAwesome}  from "react-native-vector-icons";
const Home = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [accessory, setAccessory] = useState([]);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', ()=>{
            getDataFromDB();
        })
        return unsubscribe;
    },[navigation])

    const getDataFromDB =()=>{
        let productList =[]
        let accessoryList = []
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category=='product') {
                productList.push(Items[index])
            }
            else if(Items[index].category=='accessory'){
                accessoryList.push(Items[index])
            }
            
        }
        setProducts(productList)
        setAccessory(accessoryList)
    };

    // create a product reusable cart

    const Productcard =({data})=>{
        return(
            <TouchableOpacity 
            onPress={()=>navigation.navigate('ProductInfo',{productId:data.id})}
            style={{
                width:'40%',
                marginVertical:14
            }}>
                <View style={{
                    width: '100%',
                    height:100,
                    borderRadius:10,
                    backgroundColor:COLORS.backgroundLight,
                    position:'relative',
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom:8
                }}>
                    {data.isOff ? (<View style={{
                        position:'absolute',
                        width:'24%',
                        height:'24%',
                        backgroundColor:COLORS.green,
                        top:0,
                        left:0,
                        borderTopLeftRadius:10,
                        borderBottomRightRadius:10,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                              <Text style={{
                                fontSize:12,
                                color:COLORS.white,
                                fontWeight:"bold",
                                letterSpacing:1

                              }}>{data.offPercentage}%</Text>
                            </View>) : null}
                            <Image source={data.productImage} style={{
                                width:'80%',height:'80%',resizeMode:'contain'
                            }}/>
                </View>
                <Text style={{
                    fontSize:12,
                    color:COLORS.black,
                    fontWeight:600,
                    marginBottom:2
                }}>{data.productName}</Text>
                {data.category=='accessory' ? data.isAvailable ? (
                    <View style={{
                        flexDirection:'row',alignItems:'center',
                    }}>
                      <FontAwesome name="circle" style={{
                        fontSize:12,
                        marginRight:6,
                        color:COLORS.green
                      }}/>  
                      <Text style={{
                        fontSize:12,
                        color:COLORS.green
                      }}>Available</Text>
                    </View>
                    ) :(
                        <View style={{
                        flexDirection:'row',alignItems:'center',
                    }}>
                      <FontAwesome name="circle" style={{
                        fontSize:12,
                        marginRight:6,
                        color:'red'
                      }}/>  
                      <Text style={{
                        fontSize:12,
                        color:'red'
                      }}>Unavailable</Text>
                    </View>
                    ): null}
                <Text>&#8377;{data.productPrice}</Text>
            </TouchableOpacity>
        )
    }
  return (
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor:COLORS.white
        }}>
            <StatusBar backgroundColor={COLORS.white} barStyle='dark-content'/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{
                    width:'100%',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:16
                }}>
                    <TouchableOpacity>
                        <Entypo name="shopping-bag" style={{
                            fontSize:18,
                            color:COLORS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            backgroundColor:COLORS.backgroundLight
                        }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                        <MaterialCommunityIcons name='cart' style={{
                            fontSize:18,
                            color:COLORS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:COLORS.backgroundLight
                        }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginBottom:10,
                    padding:16
                }}>
                    <Text style={{
                        fontSize:26,
                        fontWeight:500,
                        letterSpacing:4,
                        marginBottom:10
                    }}>JNT Shop &amp; Services
                    </Text>

                    <Text style={{
                        fontSize:14,
                        fontWeight:400,
                        letterSpacing:4,
                        marginBottom:10,
                        lineHeight:24,
                    }}>Mobile Shop On Fatehpur
                    {'\n'}This Shop Offers Both Product And Services
                    </Text>
                </View>
                <View style={{
                    padding:16
                }}>
                <View style={{
                    
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize:18,
                            color:COLORS.black,
                            fontWeight:500,
                            letterSpacing:1
                        }}
                        >Products</Text>
                        <Text
                        style={{
                            fontSize:18,
                            color:COLORS.black,
                            fontWeight:400,
                            opacity:0.5,
                            marginLeft:10,

                        }}
                        >41</Text>
                    </View >
                        <Text style={{
                            fontSize:14,
                            color:COLORS.blue,
                            fontWeight:400
                        }}>See all</Text>
                </View>

                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'space-around',
                }}>
                    {
                        products.map(data=>{
                            return <Productcard data ={data} key={data.id}/>
                        })
                    }
                </View>
                </View> 
                 
                <View style={{
                    padding:16
                }}>
                <View style={{
                    
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize:18,
                            color:COLORS.black,
                            fontWeight:500,
                            letterSpacing:1
                        }}
                        >Accessories</Text>
                        <Text
                        style={{
                            fontSize:18,
                            color:COLORS.black,
                            fontWeight:400,
                            opacity:0.5,
                            marginLeft:10,

                        }}
                        >78</Text>
                    </View >
                        <Text style={{
                            fontSize:14,
                            color:COLORS.blue,
                            fontWeight:400
                        }}>See all</Text>
                </View>

                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'space-around',
                }}>
                    {
                        accessory.map(data=>{
                            return <Productcard data ={data} key={data.id}/>
                        })
                    }
                </View>
                </View> 

            </ScrollView>
        </View>
  )
}

export default Home
