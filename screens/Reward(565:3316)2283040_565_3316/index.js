import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1201_193} />
      <View style={styles.View_1201_187} />
      <View style={styles.View_565_3317}>
        <View style={styles.View_565_3318} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/372c3621-a077-425a-92f5-2f1df8c8e34b"
          }}
          style={styles.ImageBackground_565_3319}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43d9d92a-1184-4e8b-bae9-44d88421f58c"
          }}
          style={styles.ImageBackground_565_3323}
        />
      </View>
      <View style={styles.View_565_3338}>
        <Text style={styles.Text_565_3338}>Referral Bonus</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_565_3340}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_3083"))
        }
      >
        <View style={styles.View_565_3341} />
      </TouchableOpacity>
      <View style={styles.View_565_3481}>
        <Text style={styles.Text_565_3481}>My Rewards</Text>
      </View>
      <View style={styles.View_1199_162}>
        <Text style={styles.Text_1199_162}>Overview</Text>
      </View>
      <View style={styles.View_1201_200}>
        <Text style={styles.Text_1201_200}>Rules :</Text>
      </View>
      <View style={styles.View_1201_188}>
        <Text style={styles.Text_1201_188}>My Referals</Text>
      </View>
      <View style={styles.View_565_3483}>
        <Text style={styles.Text_565_3483}>3 Friends</Text>
      </View>
      <View style={styles.View_565_3482}>
        <Text style={styles.Text_565_3482}>Refer &amp; Get $5 USD</Text>
      </View>
      <View style={styles.View_565_3502}>
        <Text style={styles.Text_565_3502}>
          Unlimited Bonus for you and your friends
        </Text>
      </View>
      <View style={styles.View_565_3504} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ad6c063-b184-435b-922b-48dbb60d1f89"
        }}
        style={styles.ImageBackground_1199_157}
      />
      <View style={styles.View_565_3505}>
        <Text style={styles.Text_565_3505}>BRW_HPA25</Text>
      </View>
      <View style={styles.View_1197_365}>
        <View style={styles.View_565_3343}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fed00c9b-85a9-49e3-aa62-951dc60ad511"
            }}
            style={styles.ImageBackground_565_3344}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/478c3f70-1c01-4660-96d6-0b008caa5e9b"
            }}
            style={styles.ImageBackground_565_3345}
          />
          <View style={styles.View_565_3346}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b18556f8-a00d-4bf5-b2ff-df8472bc66a3"
              }}
              style={styles.ImageBackground_565_3347}
            />
            <View style={styles.View_565_3379}>
              <View style={styles.View_565_3380}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe9e50e5-fe57-4168-9db8-b15817e5eff6"
                  }}
                  style={styles.ImageBackground_565_3381}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26cb0f32-32a2-4415-ae44-7275218287e3"
                }}
                style={styles.ImageBackground_565_3473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a5b85b9-eb57-4132-aa83-5d86ee6aac40"
                }}
                style={styles.ImageBackground_565_3474}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e704520-d3a1-465b-b0e9-113b05bcf5eb"
                }}
                style={styles.ImageBackground_565_3475}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c415d83a-f899-4276-bbff-85d62476a1f9"
                }}
                style={styles.ImageBackground_565_3476}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6be014d7-a1c6-43aa-92e9-a55e11e7197a"
              }}
              style={styles.ImageBackground_565_3477}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1199_160}>
        <View style={styles.View_565_3324}>
          <View style={styles.View_565_3325}>
            <Text style={styles.Text_565_3325}>9:41</Text>
          </View>
          <View style={styles.View_565_3326}>
            <View style={styles.View_565_3327}>
              <View style={styles.View_565_3328} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c86ff92c-ae7b-4327-9051-d66d81958f22"
                }}
                style={styles.ImageBackground_565_3329}
              />
              <View style={styles.View_565_3330} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f2c5b0f-9328-4ae3-a854-7254d5bcf460"
                }}
                style={styles.ImageBackground_565_3331}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d9da11b-0dc0-426c-9abb-a1a176c2c52e"
                }}
                style={styles.ImageBackground_565_3332}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36f67ea6-1a87-420d-9fc5-3151f405c3c4"
                }}
                style={styles.ImageBackground_565_3333}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5d358ee-e117-4bff-917b-1fa48dfc1c53"
                }}
                style={styles.ImageBackground_565_3334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c1b84dd-9a25-441e-8bc7-fce0840bf0a7"
                }}
                style={styles.ImageBackground_565_3335}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c0e8f55-4367-4fa5-aaef-d292d77b21a7"
                }}
                style={styles.ImageBackground_565_3336}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8595139-af1c-46fc-b82b-582a25865d36"
                }}
                style={styles.ImageBackground_565_3337}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_565_3478} />
        <View style={styles.View_565_3479}>
          <Text style={styles.Text_565_3479}>Total Earned</Text>
        </View>
        <View style={styles.View_565_3480}>
          <Text style={styles.Text_565_3480}>$75.00 USD</Text>
        </View>
      </View>
      <View style={styles.View_1197_364}>
        <View style={styles.View_565_3484}>
          <View style={styles.View_565_3485} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0383057a-cfe1-41ea-ac96-3825b35cec87"
            }}
            style={styles.ImageBackground_565_3486}
          />
          <View style={styles.View_565_3487}>
            <Text style={styles.Text_565_3487}>$25.00</Text>
          </View>
          <View style={styles.View_565_3488}>
            <Text style={styles.Text_565_3488}>Jane Cooper activted c </Text>
          </View>
          <View style={styles.View_565_3489}>
            <Text style={styles.Text_565_3489}>Crypto Reward</Text>
          </View>
        </View>
        <View style={styles.View_565_3490}>
          <View style={styles.View_565_3491} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02f1fdb3-2b83-4df1-b6f2-c54cf14e64f6"
            }}
            style={styles.ImageBackground_565_3492}
          />
          <View style={styles.View_565_3493}>
            <Text style={styles.Text_565_3493}>$25.00</Text>
          </View>
          <View style={styles.View_565_3494}>
            <Text style={styles.Text_565_3494}>Jane Cooper Signed up</Text>
          </View>
          <View style={styles.View_565_3495}>
            <Text style={styles.Text_565_3495}>Crypto Reward</Text>
          </View>
        </View>
        <View style={styles.View_565_3496}>
          <View style={styles.View_565_3497} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e058c1-5b7f-4f75-8408-d4b2e341d131"
            }}
            style={styles.ImageBackground_565_3498}
          />
          <View style={styles.View_565_3499}>
            <Text style={styles.Text_565_3499}>$25.00</Text>
          </View>
          <View style={styles.View_565_3500}>
            <Text style={styles.Text_565_3500}>Jane Cooper Signed up</Text>
          </View>
          <View style={styles.View_565_3501}>
            <Text style={styles.Text_565_3501}>Crypto Reward</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_565_3503}>
        <Text style={styles.Text_565_3503}>Your Referral ID</Text>
      </View>
      <View style={styles.View_1199_161}>
        <View style={styles.View_565_3518}>
          <View style={styles.View_565_3519} />
        </View>
        <View style={styles.View_565_3510}>
          <Text style={styles.Text_565_3510}>Share invite link</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b238b96-b926-476d-b547-e3df7432d82c"
        }}
        style={styles.ImageBackground_565_3511}
      />
      <View style={styles.View_1199_164}>
        <Text style={styles.Text_1199_164}>Total referal bonus (BUSD) </Text>
      </View>
      <View style={styles.View_1201_170}>
        <View style={styles.View_1201_168}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/182dec6a-9faa-47f3-a06b-e3f9ad65f6f6"
            }}
            style={styles.ImageBackground_1201_166}
          />
          <View style={styles.View_1201_167}>
            <Text style={styles.Text_1201_167}>?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1201_183}>
        <View style={styles.View_1201_173}>
          <View style={styles.View_1201_174}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38c38df8-ae07-47e1-b952-7b1fba04bb11"
              }}
              style={styles.ImageBackground_1201_175}
            />
            <View style={styles.View_1201_176}>
              <Text style={styles.Text_1201_176}>?</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1201_172}>
          <Text style={styles.Text_1201_172}>Total sucessful </Text>
        </View>
      </View>
      <View style={styles.View_1201_182}>
        <View style={styles.View_1201_177}>
          <Text style={styles.Text_1201_177}>Total Referal </Text>
        </View>
        <View style={styles.View_1201_178}>
          <View style={styles.View_1201_179}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82e993af-4735-44cd-a8f0-3136ce50fba5"
              }}
              style={styles.ImageBackground_1201_180}
            />
            <View style={styles.View_1201_181}>
              <Text style={styles.Text_1201_181}>?</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1201_184}>
        <Text style={styles.Text_1201_184}>0</Text>
      </View>
      <View style={styles.View_1201_185}>
        <Text style={styles.Text_1201_185}>0</Text>
      </View>
      <View style={styles.View_1201_186}>
        <Text style={styles.Text_1201_186}>0</Text>
      </View>
      <View style={styles.View_1201_189}>
        <Text style={styles.Text_1201_189}>users</Text>
      </View>
      <View style={styles.View_1201_190}>
        <Text style={styles.Text_1201_190}>signup</Text>
      </View>
      <View style={styles.View_1201_191}>
        <Text style={styles.Text_1201_191}>activate</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c76a186d-4984-49e3-8276-1d6dc260149e"
        }}
        style={styles.ImageBackground_1201_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/435ada90-945a-430a-81c6-4b524e1ed88f"
        }}
        style={styles.ImageBackground_1201_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ace7f94-662b-47c7-9305-ea513ba5c450"
        }}
        style={styles.ImageBackground_1201_195}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65239a43-d623-4365-81fe-2d9bda4fa6f0"
        }}
        style={styles.ImageBackground_1201_196}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0605317b-0ef3-486e-9a45-d1e99e6f528c"
        }}
        style={styles.ImageBackground_1201_199}
      />
      <View style={styles.View_1201_198}>
        <Text style={styles.Text_1201_198}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b1a75a5-9590-4cde-a4cb-9640cfcd47b1"
        }}
        style={styles.ImageBackground_1201_201}
      />
      <View style={styles.View_565_3524}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fda5693-5df7-4cbf-905e-528eae79cb55"
          }}
          style={styles.ImageBackground_565_3525}
        />
        <View style={styles.View_565_3526}>
          <View style={styles.View_565_3527}>
            <Text style={styles.Text_565_3527}>Market</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a62c179-7220-4c91-95a8-6699b0cec9dd"
            }}
            style={styles.ImageBackground_565_3528}
          />
        </View>
        <View style={styles.View_565_3529}>
          <View style={styles.View_565_3530}>
            <Text style={styles.Text_565_3530}>Reward</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b39cf59-0d02-4e37-ad0e-c64b41aba963"
            }}
            style={styles.ImageBackground_565_3531}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_565_3532}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_5097"))
          }
        >
          <View style={styles.View_565_3533}>
            <Text style={styles.Text_565_3533}>Card</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8960ffb4-b0c9-4f13-a96f-61713b665432"
            }}
            style={styles.ImageBackground_565_3534}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_565_3535}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_780"))
          }
        >
          <View style={styles.View_565_3536}>
            <View style={styles.View_565_3537}>
              <Text style={styles.Text_565_3537}>Wallet</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/810b0146-a0b0-4b24-bb8e-9a8c90319643"
            }}
            style={styles.ImageBackground_565_3538}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_565_3539}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_897"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a6da68a-5c79-415e-b8d0-07b43667fe5c"
            }}
            style={styles.ImageBackground_565_3540}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6b4153d-9f79-4208-93aa-7cb5f8d0c57e"
            }}
            style={styles.ImageBackground_565_3541}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("261%") },
  View_1201_193: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("174%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_1201_187: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("139%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_565_3317: {
    width: wp("111%"),
    minWidth: wp("111%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-23%")
  },
  View_565_3318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 28
  },
  ImageBackground_565_3319: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_565_3323: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("40%")
  },
  View_565_3338: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_3338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_565_3340: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_565_3341: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_3481: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_565_3481: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1199_162: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_1199_162: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_200: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("211%"),
    justifyContent: "flex-start"
  },
  Text_1201_200: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_188: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("169%"),
    justifyContent: "flex-start"
  },
  Text_1201_188: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3483: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_565_3483: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3482: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_565_3482: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3502: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_565_3502: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3504: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("107%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_1199_157: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_565_3505: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("109%"),
    justifyContent: "center"
  },
  Text_565_3505: {
    color: "rgba(133, 133, 153, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1197_365: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("21%")
  },
  View_565_3343: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3344: {
    width: wp("36%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_565_3345: {
    width: wp("31%"),
    height: hp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_565_3346: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3347: {
    width: wp("74%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_3379: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_565_3380: {
    width: wp("26%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_3381: {
    width: wp("26%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_3473: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_565_3474: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_565_3475: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_565_3476: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_565_3477: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_1199_160: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("97%")
  },
  View_565_3324: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_565_3325: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_3325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_3326: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%")
  },
  View_565_3327: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3328: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_565_3329: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_565_3330: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_3331: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_3332: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_3333: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_565_3334: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_3335: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_3336: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_565_3337: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_3478: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_565_3479: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_3479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3480: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_3480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1197_364: {
    width: wp("109%"),
    minWidth: wp("109%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("69%")
  },
  View_565_3484: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3485: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3486: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_565_3487: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_3487: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3488: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_565_3488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_565_3489: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_565_3489: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3490: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  View_565_3491: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3492: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_565_3493: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_3493: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3494: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_565_3494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_565_3495: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_565_3495: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3496: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%")
  },
  View_565_3497: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3498: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_565_3499: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_3499: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3500: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_565_3500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_565_3501: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_565_3501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3503: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("109%"),
    justifyContent: "flex-start"
  },
  Text_565_3503: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_1199_161: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("118%")
  },
  View_565_3518: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3519: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3510: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_3510: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  ImageBackground_565_3511: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1199_164: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("140%"),
    justifyContent: "flex-start"
  },
  Text_1199_164: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_170: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("140%")
  },
  View_1201_168: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1201_166: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1201_167: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1201_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_183: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("147%")
  },
  View_1201_173: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  View_1201_174: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1201_175: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1201_176: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1201_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_172: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1201_172: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_182: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("147%")
  },
  View_1201_177: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1201_177: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_178: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%")
  },
  View_1201_179: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1201_180: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1201_181: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1201_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_184: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_1201_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_185: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("150%"),
    justifyContent: "flex-start"
  },
  Text_1201_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_186: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("151%"),
    justifyContent: "flex-start"
  },
  Text_1201_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_189: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("176%"),
    justifyContent: "flex-start"
  },
  Text_1201_189: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_190: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("176%"),
    justifyContent: "flex-start"
  },
  Text_1201_190: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1201_191: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("176%"),
    justifyContent: "flex-start"
  },
  Text_1201_191: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1201_194: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("176%")
  },
  ImageBackground_1201_197: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("176%")
  },
  ImageBackground_1201_195: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("176%")
  },
  ImageBackground_1201_196: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("179%")
  },
  ImageBackground_1201_199: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("184%")
  },
  View_1201_198: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("180%"),
    justifyContent: "flex-start"
  },
  Text_1201_198: {
    color: "rgba(147, 137, 137, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1201_201: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_565_3524: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%")
  },
  ImageBackground_565_3525: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3526: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("5%")
  },
  View_565_3527: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_3527: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3528: {
    width: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_565_3529: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("5%")
  },
  View_565_3530: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_3530: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3531: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  TouchableOpacity_565_3532: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("5%")
  },
  View_565_3533: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_565_3533: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3534: {
    width: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_565_3535: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_565_3536: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_565_3537: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_3537: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3538: {
    width: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  TouchableOpacity_565_3539: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  ImageBackground_565_3540: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3541: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
