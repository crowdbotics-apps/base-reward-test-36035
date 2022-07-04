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
      <View style={styles.View_565_4775}>
        <View style={styles.View_565_4776} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/450c272e-9cbb-47b4-9145-ccb3439f52d7"
          }}
          style={styles.ImageBackground_565_4777}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df3b5d92-2349-4267-81e9-4bebb44fc51c"
          }}
          style={styles.ImageBackground_565_4781}
        />
      </View>
      <View style={styles.View_565_4782}>
        <View style={styles.View_565_4783}>
          <Text style={styles.Text_565_4783}>9:41</Text>
        </View>
        <View style={styles.View_565_4784}>
          <View style={styles.View_565_4785}>
            <View style={styles.View_565_4786} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7523a50d-7397-400c-b9c9-97d9b272ab73"
              }}
              style={styles.ImageBackground_565_4787}
            />
            <View style={styles.View_565_4788} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35c5cd53-b9ee-48f3-9ae8-dbb21b20eb05"
              }}
              style={styles.ImageBackground_565_4789}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de8bdece-0d14-439b-931b-dceff0017035"
              }}
              style={styles.ImageBackground_565_4790}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e02b9917-5f57-4e17-b168-d59272016804"
              }}
              style={styles.ImageBackground_565_4791}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/907a9e0a-a8b6-4fcd-929e-0b220f9083ea"
              }}
              style={styles.ImageBackground_565_4792}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faff54be-5e99-4bb2-a7b2-a70728be8864"
              }}
              style={styles.ImageBackground_565_4793}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8edb762-532d-4f2e-9099-dc39dff143ea"
              }}
              style={styles.ImageBackground_565_4794}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d6acbc7-4711-47da-9c62-873bd3b7100c"
              }}
              style={styles.ImageBackground_565_4795}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_565_4803}>
        <Text style={styles.Text_565_4803}>Card</Text>
      </View>
      <View style={styles.View_565_4804}>
        <Text style={styles.Text_565_4804}>My Cards</Text>
      </View>
      <View style={styles.View_565_4805}>
        <View style={styles.View_565_4806}>
          <Text style={styles.Text_565_4806}>New Card</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58ed7092-3e84-4a7d-a50d-98938d67e519"
          }}
          style={styles.ImageBackground_565_4807}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_565_4810}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_4958"))
        }
      >
        <View style={styles.View_565_4811}>
          <View style={styles.View_565_4812}>
            <View style={styles.View_565_4813}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bbac9dd-44fb-46ed-9aef-e08a4570b2b7"
                }}
                style={styles.ImageBackground_565_4814}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05277a90-6531-43d4-99fb-61329ca70df9"
                }}
                style={styles.ImageBackground_565_4815}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72e1492a-9347-4f58-87bc-a4ece85289ec"
                }}
                style={styles.ImageBackground_565_4816}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1443f866-5fdd-465b-9d5f-6cd68ea8c5a7"
                }}
                style={styles.ImageBackground_565_4817}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bea6c44-17f1-49d4-a3be-a54e572e179c"
                }}
                style={styles.ImageBackground_565_4818}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc97fec8-6d48-4a63-aa55-da509728c8ff"
                }}
                style={styles.ImageBackground_565_4819}
              />
              <View style={styles.View_565_4820}>
                <View style={styles.View_565_4821}>
                  <View style={styles.View_565_4822}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/463d9c79-962e-4022-b7b1-2450c609c0ad"
                      }}
                      style={styles.ImageBackground_565_4823}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/324355a3-c7a3-4238-8880-99e13c780ccd"
                      }}
                      style={styles.ImageBackground_565_4825}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/099d5acf-653e-48db-9b8e-93f57be042aa"
                      }}
                      style={styles.ImageBackground_565_4827}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0c4cd7a-aef9-44ea-b97b-57070e5c7e15"
                      }}
                      style={styles.ImageBackground_565_4829}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05aa2f65-7ce9-4f3a-93d0-ffc0bbd7d5d7"
                      }}
                      style={styles.ImageBackground_565_4831}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_565_4833}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25295248-f5b0-4e02-ac88-394bad06299b"
                }}
                style={styles.ImageBackground_565_4834}
              />
              <View style={styles.View_565_4835}>
                <View style={styles.View_565_4836}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d716040-3b8e-445e-83e3-dd16bfbc9245"
                    }}
                    style={styles.ImageBackground_565_4837}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5944fe89-0ef1-451f-97e9-9ed067127bc5"
                    }}
                    style={styles.ImageBackground_565_4839}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3487756a-b6e6-430d-b6ef-99d14f9aa8c6"
                    }}
                    style={styles.ImageBackground_565_4841}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33d1264f-da47-4da6-875c-3d9f23a9449d"
                    }}
                    style={styles.ImageBackground_565_4843}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42ea38d7-8622-4e1f-8961-df82fbe777b2"
                    }}
                    style={styles.ImageBackground_565_4845}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d4afb35-ba18-4342-b448-d92d03a45e0d"
                    }}
                    style={styles.ImageBackground_565_4847}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26ecfd62-859d-4dcb-a69d-d3f830d94192"
                    }}
                    style={styles.ImageBackground_565_4849}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/091260ec-69e0-4892-81eb-edc86134374d"
            }}
            style={styles.ImageBackground_565_4851}
          />
        </View>
        <View style={styles.View_565_4852}>
          <View style={styles.View_565_4853}>
            <View style={styles.View_565_4854}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d203e191-b289-4da7-969e-faa2baad9ce7"
                }}
                style={styles.ImageBackground_565_4855}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6d1ee80-dab3-4f55-bc6d-1db18594c746"
                }}
                style={styles.ImageBackground_565_4856}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ed7d651-454b-4af8-9cfc-9e33761d054c"
                }}
                style={styles.ImageBackground_565_4857}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af8c979a-8460-4cc7-aa09-6568798b89be"
                }}
                style={styles.ImageBackground_565_4858}
              />
              <View style={styles.View_565_4859}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5b89984-efa6-48a0-a00c-f3555248e106"
                  }}
                  style={styles.ImageBackground_565_4860}
                />
                <View style={styles.View_565_4861}>
                  <View style={styles.View_565_4862}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/750aa103-5f1c-4469-befa-92078892a37b"
                      }}
                      style={styles.ImageBackground_565_4863}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e23b7645-cdc2-4d42-870e-7965df277472"
                      }}
                      style={styles.ImageBackground_565_4865}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d418dbf-9d8e-466b-aeae-7d0f1d9c0854"
                      }}
                      style={styles.ImageBackground_565_4867}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a77061d-b762-4084-8176-97746b4db3a2"
                      }}
                      style={styles.ImageBackground_565_4869}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86122f3-bf14-4aa4-a0e6-e33355ea98ae"
                      }}
                      style={styles.ImageBackground_565_4871}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17a76f3f-8b66-4eaa-befa-4aac55e1f7a7"
                      }}
                      style={styles.ImageBackground_565_4873}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6df81534-0e88-48ec-afb9-79849a75646b"
                      }}
                      style={styles.ImageBackground_565_4875}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29579716-b2bf-469e-ac58-87b42eaa4cc7"
              }}
              style={styles.ImageBackground_565_4877}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1f057b4-9d71-4a24-b8d8-740e578f238d"
            }}
            style={styles.ImageBackground_565_4880}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_565_4899}>
        <View style={styles.View_565_4900}>
          <Text style={styles.Text_565_4900}>Transcation</Text>
        </View>
        <View style={styles.View_565_4901} />
        <View style={styles.View_565_4902}>
          <View style={styles.View_565_4903}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb1ff92c-8974-4094-9e5a-5276daf8a0f9"
              }}
              style={styles.ImageBackground_565_4904}
            />
            <View style={styles.View_565_4906} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/513ada7c-e638-45d5-9b18-0d9878af0a15"
          }}
          style={styles.ImageBackground_565_4907}
        />
        <View style={styles.View_565_4908} />
        <View style={styles.View_565_4909} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0df794f-a1e0-442c-a094-1176b9cd9f4b"
          }}
          style={styles.ImageBackground_565_4910}
        />
        <View style={styles.View_565_4911}>
          <Text style={styles.Text_565_4911}>BTC 100.00</Text>
        </View>
        <View style={styles.View_565_4912}>
          <Text style={styles.Text_565_4912}>BTC 100.00</Text>
        </View>
        <View style={styles.View_565_4913}>
          <Text style={styles.Text_565_4913}>BTC 100.00</Text>
        </View>
        <View style={styles.View_565_4914}>
          <Text style={styles.Text_565_4914}>Lorem</Text>
        </View>
        <View style={styles.View_565_4915}>
          <Text style={styles.Text_565_4915}>December 28, 2021</Text>
        </View>
        <View style={styles.View_565_4916}>
          <Text style={styles.Text_565_4916}>Lorem</Text>
        </View>
        <View style={styles.View_565_4917}>
          <Text style={styles.Text_565_4917}>Lorem</Text>
        </View>
        <View style={styles.View_565_4918}>
          <Text style={styles.Text_565_4918}>December 26, 2021</Text>
        </View>
        <View style={styles.View_565_4919}>
          <Text style={styles.Text_565_4919}>December 26, 2021</Text>
        </View>
        <View style={styles.View_565_4920}>
          <View style={styles.View_565_4921}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a1be2dc-509d-4bda-a09d-29c1839ed2ed"
              }}
              style={styles.ImageBackground_565_4922}
            />
            <View style={styles.View_565_4924} />
          </View>
        </View>
        <View style={styles.View_565_4925}>
          <View style={styles.View_565_4926}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7269ba0-ddb3-4ca5-b3ad-0e8c2e84f110"
              }}
              style={styles.ImageBackground_565_4927}
            />
            <View style={styles.View_565_4929} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38700075-0a45-4339-8a75-e257f2cfe765"
          }}
          style={styles.ImageBackground_565_4930}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edaadb9b-416d-44d3-93ef-c83a7ae3894e"
          }}
          style={styles.ImageBackground_565_4931}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98f4e86e-a74a-48ac-a3f4-b1d874ee9c76"
          }}
          style={styles.ImageBackground_565_4932}
        />
      </View>
      <View style={styles.View_565_4933} />
      <View style={styles.View_565_4934} />
      <View style={styles.View_565_4935}>
        <Text style={styles.Text_565_4935}>Physical Card</Text>
      </View>
      <View style={styles.View_565_4936}>
        <Text style={styles.Text_565_4936}>Virtual Card</Text>
      </View>
      <View style={styles.View_565_4937}>
        <View style={styles.View_565_4938}>
          <View style={styles.View_565_4939} />
          <View style={styles.View_565_4940} />
          <View style={styles.View_565_4941}>
            <Text style={styles.Text_565_4941}>Freeze</Text>
          </View>
          <View style={styles.View_565_4942}>
            <Text style={styles.Text_565_4942}>Unfreeze</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_565_4943}>
        <View style={styles.View_565_4944}>
          <View style={styles.View_565_4945}>
            <View style={styles.View_565_4946}>
              <Text style={styles.Text_565_4946}>Transfer</Text>
            </View>
            <View style={styles.View_565_4947} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/591c30d5-1649-48b4-8514-c96725621bd6"
              }}
              style={styles.ImageBackground_565_4948}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_640_189}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_490"))
        }
      >
        <View style={styles.View_640_190}>
          <View style={styles.View_640_191} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ae8e462-b388-487f-b2bc-27669ec116da"
          }}
          style={styles.ImageBackground_640_192}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_640_255}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_6315"))
        }
      >
        <View style={styles.View_640_256}>
          <View style={styles.View_640_257} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af791b9a-8e49-4652-91f2-91918ad37da3"
            }}
            style={styles.ImageBackground_640_258}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_640_259}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("565_1598"))
        }
      >
        <View style={styles.View_640_260}>
          <View style={styles.View_640_261}>
            <View style={styles.View_640_262} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/774202fe-883f-47e0-8c43-3ad33ec2f111"
          }}
          style={styles.ImageBackground_640_263}
        />
      </TouchableOpacity>
      <View style={styles.View_729_1443}>
        <View style={styles.View_729_1444}>
          <View style={styles.View_729_1445}>
            <Text style={styles.Text_729_1445}>Deposit</Text>
          </View>
          <View style={styles.View_729_1446}>
            <View style={styles.View_729_1447} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f379c9bd-4b20-47e6-9b4e-239ac7cf12c5"
              }}
              style={styles.ImageBackground_729_1448}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_640_368}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecc47f28-9e18-4bf7-82c4-5ef897f93e49"
          }}
          style={styles.ImageBackground_640_369}
        />
        <View style={styles.View_640_370}>
          <View style={styles.View_640_371}>
            <Text style={styles.Text_640_371}>Market</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d503b71-f8a8-4e95-8383-9716a61a46ff"
            }}
            style={styles.ImageBackground_640_372}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_640_373}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_3083"))
          }
        >
          <View style={styles.View_640_374}>
            <Text style={styles.Text_640_374}>Reward</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60b0b07c-4287-4004-9ca2-3ccb84880217"
            }}
            style={styles.ImageBackground_640_375}
          />
        </TouchableOpacity>
        <View style={styles.View_640_376}>
          <View style={styles.View_640_377}>
            <Text style={styles.Text_640_377}>Card</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b57d3af2-0e5e-43a7-b205-df91c2a51089"
            }}
            style={styles.ImageBackground_640_378}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_640_379}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_780"))
          }
        >
          <View style={styles.View_640_380}>
            <View style={styles.View_640_381}>
              <Text style={styles.Text_640_381}>Wallet</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daedbff7-a50d-4198-b6a2-74d5f5c785c0"
            }}
            style={styles.ImageBackground_640_382}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_640_383}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("565_897"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a752e61f-f57a-4b40-9084-cbfb96d56026"
            }}
            style={styles.ImageBackground_640_384}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f27f9bb-f4b3-429a-84e3-81b6c5145ef0"
            }}
            style={styles.ImageBackground_640_385}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("159%") },
  View_565_4775: {
    width: wp("111%"),
    minWidth: wp("111%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-18%")
  },
  View_565_4776: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 28
  },
  ImageBackground_565_4777: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_565_4781: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("37%")
  },
  View_565_4782: {
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
  View_565_4783: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_565_4784: {
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
  View_565_4785: {
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
  View_565_4786: {
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
  ImageBackground_565_4787: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_565_4788: {
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
  ImageBackground_565_4789: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_565_4790: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_4791: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_565_4792: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_565_4793: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_565_4794: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_565_4795: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_565_4803: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_4803: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4804: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_565_4804: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_565_4805: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("23%")
  },
  View_565_4806: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4806: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_565_4807: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_565_4810: {
    width: wp("168%"),
    minWidth: wp("168%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%")
  },
  View_565_4811: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4812: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_4813: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4814: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4815: {
    width: wp("39%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_565_4816: {
    width: wp("81%"),
    height: hp("19%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4817: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4818: {
    width: wp("81%"),
    height: hp("13%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4819: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_4820: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_565_4821: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_4822: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_565_4825: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_4827: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_565_4829: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4831: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4833: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_4834: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_4835: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4836: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4837: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_565_4839: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4841: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4843: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_565_4845: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_565_4847: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_565_4849: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_565_4851: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  View_565_4852: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%")
  },
  View_565_4853: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4854: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_4855: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4856: {
    width: wp("81%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4857: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_4858: {
    width: wp("150%"),
    minWidth: wp("150%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-102%"),
    top: hp("-11%")
  },
  View_565_4859: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_565_4860: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_565_4861: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4862: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4863: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_565_4865: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4867: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_565_4869: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_565_4871: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_565_4873: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_565_4875: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_565_4877: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_565_4880: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  View_565_4899: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("100%")
  },
  View_565_4900: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_565_4900: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4901: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(44, 44, 78, 1)"
  },
  View_565_4902: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(222, 35, 68, 1)"
  },
  View_565_4903: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_565_4904: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4906: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_4907: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_565_4908: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_565_4909: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_565_4910: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  View_565_4911: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_565_4911: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4912: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_565_4912: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4913: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_565_4913: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4914: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_565_4914: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4915: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_565_4915: {
    color: "rgba(133, 140, 148, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4916: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_565_4916: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4917: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_565_4917: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4918: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_565_4918: {
    color: "rgba(133, 140, 148, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4919: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_565_4919: {
    color: "rgba(133, 140, 148, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_565_4920: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(88, 189, 125, 1)"
  },
  View_565_4921: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_565_4922: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4924: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_565_4925: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(222, 35, 68, 1)"
  },
  View_565_4926: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_565_4927: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_565_4929: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_565_4930: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_565_4931: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_565_4932: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_565_4933: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%")
  },
  View_565_4934: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("30%")
  },
  View_565_4935: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_565_4935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4936: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_565_4936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4937: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("89%")
  },
  View_565_4938: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4939: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4940: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_565_4941: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4941: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4942: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_565_4942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.84,
    textTransform: "none"
  },
  View_565_4943: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("72%")
  },
  View_565_4944: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4945: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_565_4946: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_565_4946: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_565_4947: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_565_4948: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_640_189: {
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
  View_640_190: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_640_191: {
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
  ImageBackground_640_192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_640_255: {
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
  View_640_256: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_640_257: {
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
  ImageBackground_640_258: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_640_259: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("9%")
  },
  View_640_260: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_640_261: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_640_262: {
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
  ImageBackground_640_263: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_729_1443: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("72%")
  },
  View_729_1444: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_729_1445: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_729_1445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_729_1446: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_729_1447: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_729_1448: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_640_368: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("147%")
  },
  ImageBackground_640_369: {
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
  View_640_370: {
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
  View_640_371: {
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
  Text_640_371: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_640_372: {
    width: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  TouchableOpacity_640_373: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("5%")
  },
  View_640_374: {
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
  Text_640_374: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_640_375: {
    width: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_640_376: {
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
  View_640_377: {
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
  Text_640_377: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_640_378: {
    width: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_640_379: {
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
  View_640_380: {
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
  View_640_381: {
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
  Text_640_381: {
    color: "rgba(44, 44, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_640_382: {
    width: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  TouchableOpacity_640_383: {
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
  ImageBackground_640_384: {
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
  ImageBackground_640_385: {
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
