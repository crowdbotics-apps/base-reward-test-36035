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
      <View style={styles.View_565_3956}>
        <View style={styles.View_565_3957} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81a577dc-b820-4412-ac7d-bd20522ece38"
        }}
        style={styles.ImageBackground_565_3958}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10d93d0-9db4-4212-931e-383ff3c3f03a"
        }}
        style={styles.ImageBackground_565_3959}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56350a1b-4210-4d7d-a14a-2d10bee16ad2"
        }}
        style={styles.ImageBackground_565_3960}
      />
      <View style={styles.View_565_3961}>
        <View style={styles.View_565_3962} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfc05a8d-c70a-4db6-b470-95ca645cc1d7"
          }}
          style={styles.ImageBackground_565_3963}
        />
      </View>
      <View style={styles.View_565_3964}>
        <View style={styles.View_565_3965}>
          <Text style={styles.Text_565_3965}>9:41</Text>
        </View>
        <View style={styles.View_565_3966}>
          <View style={styles.View_565_3967}>
            <View style={styles.View_565_3968} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c53fadb-940a-4b24-930c-f21f1d439473"
              }}
              style={styles.ImageBackground_565_3969}
            />
            <View style={styles.View_565_3970} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13b1c5c3-63e2-43d6-8213-e94a07a924d8"
              }}
              style={styles.ImageBackground_565_3971}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc43659f-7af2-4941-a629-245ec97be786"
              }}
              style={styles.ImageBackground_565_3972}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/730d56f9-5d3b-44ae-964a-cd7f68e8bc12"
              }}
              style={styles.ImageBackground_565_3973}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbef5eee-a56a-4016-a57f-33a90fe604a0"
              }}
              style={styles.ImageBackground_565_3974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b36211c-d55c-4bde-906a-0d9917feaf66"
              }}
              style={styles.ImageBackground_565_3975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cba7abf-f42a-4786-9c71-232a387584dc"
              }}
              style={styles.ImageBackground_565_3976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2145de7a-83bd-4c0a-b031-675326994fa3"
              }}
              style={styles.ImageBackground_565_3977}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_3979}>
        <View style={styles.View_565_3980} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27fa1724-051d-4d8c-a66e-ea2566c0998c"
          }}
          style={styles.ImageBackground_565_3981}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efa047d8-00f7-43b0-86d3-ee70115c8cb4"
        }}
        style={styles.ImageBackground_565_3982}
      />
      <View style={styles.View_565_3986}>
        <View style={styles.View_565_3987}>
          <View style={styles.View_565_3988}>
            <View style={styles.View_565_3989}>
              <Text style={styles.Text_565_3989}>Bitcoin</Text>
            </View>
            <View style={styles.View_565_3990}>
              <Text style={styles.Text_565_3990}>(BTC)</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e894cd2-5a59-4964-b057-4e809f0f101d"
              }}
              style={styles.ImageBackground_565_3991}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_3992}>
        <View style={styles.View_565_3993}>
          <Text style={styles.Text_565_3993}>$43,114.57</Text>
        </View>
        <View style={styles.View_565_3994}>
          <Text style={styles.Text_565_3994}>+ 5443.4 (12.63%)</Text>
        </View>
      </View>
      <View style={styles.View_565_3995}>
        <View style={styles.View_565_3996}>
          <Text style={styles.Text_565_3996}>$43,101.74</Text>
        </View>
        <View style={styles.View_565_3997}>
          <Text style={styles.Text_565_3997}>$43,122.43</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3731eb32-37b7-4531-baee-24b3d796ca27"
          }}
          style={styles.ImageBackground_565_3998}
        />
      </View>
      <View style={styles.View_565_3999}>
        <View style={styles.View_565_4000}>
          <Text style={styles.Text_565_4000}>04:16</Text>
        </View>
        <View style={styles.View_565_4001}>
          <Text style={styles.Text_565_4001}>06:54</Text>
        </View>
        <View style={styles.View_565_4002}>
          <Text style={styles.Text_565_4002}>09:18</Text>
        </View>
        <View style={styles.View_565_4003}>
          <Text style={styles.Text_565_4003}>14:57</Text>
        </View>
        <View style={styles.View_565_4004}>
          <Text style={styles.Text_565_4004}>16:29</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d375e803-132e-459c-80f6-5b4cb430dc29"
          }}
          style={styles.ImageBackground_565_4005}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261cc306-36b9-4907-a051-667d6bcb4c72"
          }}
          style={styles.ImageBackground_565_4006}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63daea9d-0789-4e87-a974-41cb3fa08c60"
          }}
          style={styles.ImageBackground_565_4007}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b852807-6bc2-4515-9023-0fa3dbd8cd7b"
          }}
          style={styles.ImageBackground_565_4008}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f70f6b27-87ce-431d-af00-50778f18d47d"
          }}
          style={styles.ImageBackground_565_4009}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ef2daef-efe2-4d0e-9439-7c3aad75b62d"
          }}
          style={styles.ImageBackground_565_4010}
        />
      </View>
      <View style={styles.View_565_4011} />
      <View style={styles.View_565_4012}>
        <View style={styles.View_565_4013}>
          <Text style={styles.Text_565_4013}>1H</Text>
        </View>
      </View>
      <View style={styles.View_565_4014}>
        <Text style={styles.Text_565_4014}>24 H</Text>
      </View>
      <View style={styles.View_565_4015}>
        <Text style={styles.Text_565_4015}>1W</Text>
      </View>
      <View style={styles.View_565_4016}>
        <Text style={styles.Text_565_4016}>1M</Text>
      </View>
      <View style={styles.View_565_4017}>
        <Text style={styles.Text_565_4017}>6M</Text>
      </View>
      <View style={styles.View_565_4018}>
        <Text style={styles.Text_565_4018}>1Y </Text>
      </View>
      <View style={styles.View_565_4019}>
        <Text style={styles.Text_565_4019}>All</Text>
      </View>
      <View style={styles.View_565_4020}>
        <Text style={styles.Text_565_4020}>Market Data</Text>
      </View>
      <View style={styles.View_565_4021}>
        <Text style={styles.Text_565_4021}>Info</Text>
      </View>
      <View style={styles.View_565_4022}>
        <Text style={styles.Text_565_4022}>Recurring Buy</Text>
      </View>
      <View style={styles.View_565_4023}>
        <View style={styles.View_565_4024}>
          <View style={styles.View_565_4025}>
            <Text style={styles.Text_565_4025}>Market Cap</Text>
          </View>
          <View style={styles.View_565_4026}>
            <Text style={styles.Text_565_4026}>$833.63 B +14.49%</Text>
          </View>
        </View>
        <View style={styles.View_565_4027}>
          <View style={styles.View_565_4028}>
            <Text style={styles.Text_565_4028}>Low (24h)</Text>
          </View>
          <View style={styles.View_565_4029}>
            <Text style={styles.Text_565_4029}>$37,961.10</Text>
          </View>
        </View>
        <View style={styles.View_565_4030}>
          <View style={styles.View_565_4031}>
            <Text style={styles.Text_565_4031}>High (24h)</Text>
          </View>
          <View style={styles.View_565_4032}>
            <Text style={styles.Text_565_4032}>Rank</Text>
          </View>
          <View style={styles.View_565_4033}>
            <Text style={styles.Text_565_4033}>$44,435.06</Text>
          </View>
          <View style={styles.View_565_4034}>
            <Text style={styles.Text_565_4034}>#1</Text>
          </View>
        </View>
        <View style={styles.View_565_4035}>
          <View style={styles.View_565_4036}>
            <Text style={styles.Text_565_4036}>Volumn (24h)</Text>
          </View>
          <View style={styles.View_565_4037}>
            <Text style={styles.Text_565_4037}>$33.27 B</Text>
          </View>
        </View>
        <View style={styles.View_565_4038}>
          <View style={styles.View_565_4039}>
            <Text style={styles.Text_565_4039}>Circulating Supply</Text>
          </View>
          <View style={styles.View_565_4040}>
            <Text style={styles.Text_565_4040}>18.97M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_565_4041}>
        <View style={styles.View_565_4042}>
          <View style={styles.View_565_4043}>
            <Text style={styles.Text_565_4043}>Circulating</Text>
          </View>
          <View style={styles.View_565_4044}>
            <Text style={styles.Text_565_4044}>19M BTC</Text>
          </View>
        </View>
        <View style={styles.View_565_4045}>
          <View style={styles.View_565_4046}>
            <Text style={styles.Text_565_4046}>Tatal Supply</Text>
          </View>
          <View style={styles.View_565_4047}>
            <Text style={styles.Text_565_4047}>19M BTC</Text>
          </View>
        </View>
        <View style={styles.View_565_4048}>
          <View style={styles.View_565_4049}>
            <Text style={styles.Text_565_4049}>All-Time High</Text>
          </View>
          <View style={styles.View_565_4050}>
            <Text style={styles.Text_565_4050}>Max Supply</Text>
          </View>
          <View style={styles.View_565_4051}>
            <Text style={styles.Text_565_4051}>$68,435.06</Text>
          </View>
          <View style={styles.View_565_4052}>
            <Text style={styles.Text_565_4052}>21M BTC</Text>
          </View>
        </View>
        <View style={styles.View_565_4053}>
          <View style={styles.View_565_4054}>
            <Text style={styles.Text_565_4054}>ROI</Text>
          </View>
          <View style={styles.View_565_4055}>
            <Text style={styles.Text_565_4055}>+33.27.01%</Text>
          </View>
        </View>
        <View style={styles.View_565_4056}>
          <View style={styles.View_565_4057}>
            <Text style={styles.Text_565_4057}>% of ATH</Text>
          </View>
          <View style={styles.View_565_4058}>
            <Text style={styles.Text_565_4058}>67.19%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_565_4059}>
        <Text style={styles.Text_565_4059}>
          Buying BTC every week performed better than trying to time the Market
          Learn More
        </Text>
      </View>
      <View style={styles.View_565_4060}>
        <Text style={styles.Text_565_4060}>
          About Bitcoin Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </Text>
      </View>
      <View style={styles.View_565_4061}>
        <Text style={styles.Text_565_4061}>Tags</Text>
      </View>
      <View style={styles.View_565_4062}>
        <Text style={styles.Text_565_4062}>Consensus Method</Text>
      </View>
      <View style={styles.View_565_4063}>
        <Text style={styles.Text_565_4063}>Token Type</Text>
      </View>
      <View style={styles.View_565_4064}>
        <Text style={styles.Text_565_4064}>Token Usage</Text>
      </View>
      <View style={styles.View_565_4065}>
        <Text style={styles.Text_565_4065}>Issue Date</Text>
      </View>
      <View style={styles.View_565_4066}>
        <Text style={styles.Text_565_4066}>Website</Text>
      </View>
      <View style={styles.View_565_4067}>
        <Text style={styles.Text_565_4067}>Amet minim mollit non</Text>
      </View>
      <View style={styles.View_565_4068}>
        <Text style={styles.Text_565_4068}>Amet minim mollit non</Text>
      </View>
      <View style={styles.View_565_4069}>
        <Text style={styles.Text_565_4069}>Native</Text>
      </View>
      <View style={styles.View_565_4070}>
        <Text style={styles.Text_565_4070}>Payments</Text>
      </View>
      <View style={styles.View_565_4071}>
        <Text style={styles.Text_565_4071}>2013</Text>
      </View>
      <View style={styles.View_565_4072}>
        <Text style={styles.Text_565_4072}>https://bitcoin.org/</Text>
      </View>
      <View style={styles.View_578_183}>
        <View style={styles.View_565_3949} />
        <View style={styles.View_565_3950}>
          <View style={styles.View_565_3951}>
            <Text style={styles.Text_565_3951}>Bitcoin</Text>
          </View>
          <View style={styles.View_565_3952}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42229cbf-f693-4bb2-89c3-c7dc4e4d0064"
              }}
              style={styles.ImageBackground_565_3953}
            />
            <View style={styles.View_565_3954}>
              <Text style={styles.Text_565_3954}>$0.00</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56763a99-30c4-4124-b51a-4ad1dbae257d"
            }}
            style={styles.ImageBackground_565_3955}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_565_4073}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_4185"))
          }
        >
          <View style={styles.View_565_4074} />
          <View style={styles.View_565_4075}>
            <Text style={styles.Text_565_4075}>Buy</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_565_4076}>
        <View style={styles.View_565_4077} />
        <View style={styles.View_565_4078} />
        <View style={styles.View_565_4079}>
          <Text style={styles.Text_565_4079}>Markets</Text>
        </View>
        <View style={styles.View_565_4080}>
          <Text style={styles.Text_565_4080}>Explorers</Text>
        </View>
      </View>
      <View style={styles.View_565_4081}>
        <View style={styles.View_565_4082} />
      </View>
      <View style={styles.View_565_4083}>
        <View style={styles.View_565_4084} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63af896b-ee5b-405e-8ea9-e97adb407954"
        }}
        style={styles.ImageBackground_565_4085}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05ff8aa7-692e-4c50-9a36-0b173c6326b9"
        }}
        style={styles.ImageBackground_565_4086}
      />
      <View style={styles.View_565_4089}>
        <View style={styles.View_565_4090} />
        <View style={styles.View_565_4091} />
        <View style={styles.View_565_4092} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59355e76-8922-44f5-892a-7f1fd1b3b7bf"
          }}
          style={styles.ImageBackground_565_4093}
        />
      </View>
      <View style={styles.View_565_4094}>
        <View style={styles.View_565_4095}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d22a518-28ce-4633-9d0f-720a2c4c5bce"
            }}
            style={styles.ImageBackground_565_4096}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("241%") },
  View_565_3956: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("128%")
  },
  View_565_3957: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_3958: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%")
  },
  ImageBackground_565_3959: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("154%")
  },
  ImageBackground_565_3960: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("125%")
  },
  View_565_3961: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3962: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 28
  },
  ImageBackground_565_3963: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("24%")
  },
  View_565_3964: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_565_3965: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_3965: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_3966: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  View_565_3967: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3968: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_565_3969: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_3970: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_3971: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_3972: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_3973: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_3974: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_3975: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_3976: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_3977: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_3979: {
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
  View_565_3980: {
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
  ImageBackground_565_3981: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_565_3982: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("-19%")
  },
  View_565_3986: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  View_565_3987: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3988: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_3989: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_3989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.363636016845703,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3990: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_3990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3991: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_565_3992: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  View_565_3993: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_565_3993: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3994: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_565_3994: {
    color: "rgba(33, 191, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3995: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%")
  },
  View_565_3996: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_565_3996: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3997: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_565_3997: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3998: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_565_3999: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("67%")
  },
  View_565_4000: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_565_4000: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4001: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_565_4001: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4002: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_565_4002: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4003: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_565_4003: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4004: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_565_4004: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_4005: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_4006: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_4007: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  ImageBackground_565_4008: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_565_4009: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%")
  },
  ImageBackground_565_4010: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  View_565_4011: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("74%")
  },
  View_565_4012: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_565_4013: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_565_4013: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4014: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4014: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4015: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4015: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4016: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4016: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4017: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4017: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4018: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4018: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4019: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_565_4019: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4020: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_565_4020: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4021: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("149%"),
    justifyContent: "flex-start"
  },
  Text_565_4021: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4022: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_565_4022: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4023: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%")
  },
  View_565_4024: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4025: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4025: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4026: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4026: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4027: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_565_4028: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4028: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4029: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4029: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4030: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_565_4031: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_4031: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4032: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4032: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4033: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_565_4033: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4034: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4034: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4035: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_565_4036: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4036: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4037: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4037: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4038: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("12%")
  },
  View_565_4039: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4039: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4040: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4040: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4041: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("106%")
  },
  View_565_4042: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4043: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4043: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4044: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4044: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4045: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_565_4046: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4046: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4047: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4047: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4048: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_565_4049: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_565_4049: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4050: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4050: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4051: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_565_4051: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4052: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4052: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4053: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_565_4054: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4054: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4055: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4055: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4056: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("12%")
  },
  View_565_4057: {
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
  Text_565_4057: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4058: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4058: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4059: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("135%"),
    justifyContent: "flex-start"
  },
  Text_565_4059: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4060: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("156%"),
    justifyContent: "flex-start"
  },
  Text_565_4060: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4061: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("181%"),
    justifyContent: "flex-start"
  },
  Text_565_4061: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4062: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("186%"),
    justifyContent: "flex-start"
  },
  Text_565_4062: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4063: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("191%"),
    justifyContent: "flex-start"
  },
  Text_565_4063: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4064: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("196%"),
    justifyContent: "flex-start"
  },
  Text_565_4064: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4065: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("201%"),
    justifyContent: "flex-start"
  },
  Text_565_4065: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4066: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("205%"),
    justifyContent: "flex-start"
  },
  Text_565_4066: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4067: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("181%"),
    justifyContent: "flex-start"
  },
  Text_565_4067: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4068: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("186%"),
    justifyContent: "flex-start"
  },
  Text_565_4068: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4069: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("191%"),
    justifyContent: "flex-start"
  },
  Text_565_4069: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4070: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("195%"),
    justifyContent: "flex-start"
  },
  Text_565_4070: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4071: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("200%"),
    justifyContent: "flex-start"
  },
  Text_565_4071: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4072: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("205%"),
    justifyContent: "flex-start"
  },
  Text_565_4072: {
    color: "rgba(23, 116, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_578_183: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("220%")
  },
  View_565_3949: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_3950: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_565_3951: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_565_3951: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_3952: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%")
  },
  ImageBackground_565_3953: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_565_3954: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_565_3954: {
    color: "rgba(23, 116, 255, 1)",
    fontSize: 11.632911682128906,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_3955: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_565_4073: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_565_4074: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4075: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4075: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_4076: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("211%")
  },
  View_565_4077: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4078: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_565_4079: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4079: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_4080: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_4081: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("9%")
  },
  View_565_4082: {
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
  View_565_4083: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("9%")
  },
  View_565_4084: {
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
  ImageBackground_565_4085: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_565_4086: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_565_4089: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("129%")
  },
  View_565_4090: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_4091: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4092: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%")
  },
  ImageBackground_565_4093: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_565_4094: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("129%")
  },
  View_565_4095: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4096: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
