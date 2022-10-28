import { View, Text, SafeAreaView, ScrollView,  } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur'
import SPACING from '../config/SPACING'
import {Ionicons} from '@expo/vector-icons'
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import SearchField from '../components/SearchField'
import Categories from '../components/Categories'
import coffees from "../config/coffees";
import { Dimensions } from 'react-native'

const avatar = require('../../assets/avatar.jpg')

const { width } = Dimensions.get("window");

const HomeScreen = () => {

  const [activeCategoryId, setActiveCategoryId] = useState(null);


    return (
        <SafeAreaView style={{marginTop:30}}>
          <ScrollView
            style={{
              padding: SPACING,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: SPACING,
                  overflow: "hidden",
                  width: SPACING * 4,
                  height: SPACING * 4,
                }}
              >
                <BlurView
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="menu"
                    size={SPACING * 2.5}
                    color={colors.secondary}
                  />
                </BlurView>
              </TouchableOpacity>
              <View
                style={{
                  width: SPACING * 4,
                  height: SPACING * 4,
                  overflow: "hidden",
                  borderRadius: SPACING,
                }}
              >
                <BlurView
                  style={{
                    height: "100%",
                    padding: SPACING / 2,
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: SPACING,
                    }}
                    source={avatar}
                  />
                </BlurView>
              </View>
            </View>
            <View style={{ width: "90%", marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 3.5,
                  fontWeight: "600",
                }}
              >
                Encontre o que combina com você
              </Text>
            </View>
            <SearchField />
            <Categories onChange={(id) => setActiveCategoryId(id)} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {coffees
                .filter((coffee) => {
                  if (activeCategoryId === null) {
                    return true;
                  }
                  return coffee.categoryId === activeCategoryId;
                })
                .map((coffee) => (
                  <View
                    key={coffee.id}
                    style={{
                      width: width / 2 - SPACING * 2,
                      marginBottom: SPACING,
                      borderRadius: SPACING * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={95}
                      style={{
                        padding: SPACING,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: 150,
                          width: "100%",
                        }}
                      >
                        <Image
                          source={coffee.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: SPACING * 2,
                          }}
                        />
                        <View
                          style={{
                            position: "absolute",
                            right: 0,
                            borderBottomStartRadius: SPACING * 3,
                            borderTopEndRadius: SPACING * 2,
                            overflow: "hidden",
                          }}
                        >
                          <BlurView
                            tint="dark"
                            intensity={70}
                            style={{
                              flexDirection: "row",
                              padding: SPACING - 2,
                            }}
                          >
                            <Ionicons
                              style={{
                                marginLeft: SPACING / 2,
                              }}
                              name="star"
                              color={colors.primary}
                              size={SPACING * 1.7}
                            />
                            <Text
                              style={{
                                color: colors.white,
                                marginLeft: SPACING / 2,
                              }}
                            >
                              {coffee.rating}
                            </Text>
                          </BlurView>
                        </View>
                      </TouchableOpacity>
                      <Text
                        numberOfLines={2}
                        style={{
                          color: colors.white,
                          fontWeight: "600",
                          fontSize: SPACING * 1.7,
                          marginTop: SPACING,
                          marginBottom: SPACING / 2,
                        }}
                      >
                        {coffee.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{ color: colors.secondary, fontSize: SPACING * 1.2 }}
                      >
                        {coffee.included}
                      </Text>
                      <View
                        style={{
                          marginVertical: SPACING / 2,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              color: colors.primary,
                              marginRight: SPACING / 2,
                              fontSize: SPACING * 1.6,
                            }}
                          >
                            $
                          </Text>
                          <Text
                            style={{ color: colors.white, fontSize: SPACING * 1.6 }}
                          >
                            {coffee.price}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: colors.primary,
                            padding: SPACING / 2,
                            borderRadius: SPACING,
                          }}
                        >
                          <Ionicons
                            name="add"
                            size={SPACING * 2}
                            color={colors.white}
                          />
                        </TouchableOpacity>
                      </View>
                    </BlurView>
                  </View>
                ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };

export default HomeScreen