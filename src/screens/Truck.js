import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Switch from '../components/Switch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as truckActions from '../redux/actions/truck-actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomModal from '../components/CustomModal';

import {Block, Button, Text, Toast, Card} from 'galio-framework';
import {Images, argonTheme, baseUrl} from '../constants';
import {LoadingOverlay} from '../components/loader';

const {width, height} = Dimensions.get('screen');

const Truck = props => {
  const [isTruck, setIsTruck] = useState(false);
  const [isApproved, setIsApproved] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [toastInfo, setToastInfo] = useState({color: '', message: ''});
  const [isShow, setShow] = useState(false);
  const [truckData, setTruckData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [truckImgSource, setTruckImgSource] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    let user_info = await getUser();
    console.log('id', user_info.id);
    await props.truckActions.getTruckByVendor(user_info.id, async data => {
      if (data != 'error') {
        // console.log('===>dataTruck', data);
        if (data) {
          setIsTruck(true);
          await getTruckMenu(data.id);
          // console.log(data, 'logData');
          if (data.isApproved) {
            setIsApproved(true);
            await getTruckMenu(data.id);
          }
        }
        setLoading(false);
      } else {
        console.log('===>errorData', data);
        setLoading(false);
        return;
      }
    });
  };
  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [modalVisible, truckImgSource]);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_info');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('UserInfo was not fetched from the AsyncStorage');
      console.log('error in comp', e);
    }
  };

  const handleToast = (message, color) => {
    setShow(true);
    setToastInfo({message, color});
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const getTruckMenu = async truck_id => {
    setLoading(true);
    console.log('truck id +++++++++++++++++++++++++++++++++++');
    await props.truckActions.getTruckMenu(truck_id, data => {
      if (data != 'error') {
        setTruckData(data.data);
        setLoading(false);
      } else {
        console.log('===>error', data);
        setLoading(false);
        return;
      }
    });
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const switchStatus = (status, id) => {
    console.log('status', status);
    props.truckActions.updateTruckStatus(status, id, data => {
      if (data != 'error') {
        const value = status ? 'online' : 'offline';
        handleToast(
          `Your truck is now ${value}.`,
          status ? 'success' : 'warning',
        );
        setIsOffline(status);
      } else {
        handleToast(
          'The truck status was not changed. Try again later.',
          'error',
        );
        return;
      }
    });
  };

  const imageSelect = imageType => {
    launchImageLibrary(
      {
        title: 'You can choose one image',
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          setTruckImgSource(source.uri);
          setPhoto(response.base64);
        }
      },
    );
  };

  const updateTruckPhoto = truck_id => {
    let imageObj = {
      photo: photo,
    };
    props.truckActions.updateTruckPhoto(imageObj, truck_id, data => {
      if (data != 'error') {
        handleToast('Truck photo updated!!', 'success');
        setPhoto(null);
        setTruckImgSource(null);
      } else {
        handleToast('Truck photo was not updated.', 'error');
        return;
      }
    });
  };

  return (
    <>
      <Header title="Your Truck" />
      {loading && <LoadingOverlay />}
      <Block flex>
        <ImageBackground source={Images.DefaultBg} style={{flex: 1, zIndex: 1}}>
          <Block center>
            <Image
              source={
                !truckImgSource
                  ? props.truck_info && props.truck_info.photo
                    ? {uri: `data:image/jpg;base64,${props.truck_info.photo}`}
                    : Images.rdeargoLogo
                  : {uri: truckImgSource}
              }
              style={styles.truckImage}
            />
            {isTruck ? (
              <TouchableOpacity
                onPress={() => imageSelect()}
                style={{
                  position: 'absolute',
                  top: 16,
                  left: truckImgSource ? 150 : 120,
                  elevation: 5,
                  // backgroundColor: argonTheme.COLORS.PRIMARY,
                }}>
                <FAIcon
                  name="edit"
                  size={25}
                  color={argonTheme.COLORS.ORANGE}
                />
              </TouchableOpacity>
            ) : null}
            {props.truck_info && truckImgSource ? (
              <Block row center>
                <Button
                  color={argonTheme.COLORS.ORANGE}
                  onPress={() => updateTruckPhoto(props.truck_info.id)}
                  size="small">
                  <Text bold>Save Photo</Text>
                </Button>
                <Button
                  color={argonTheme.COLORS.SECONDARY}
                  size="small"
                  onPress={() => setTruckImgSource(null)}>
                  <Text bold>Cancel</Text>
                </Button>
              </Block>
            ) : null}
          </Block>
          {!isTruck ? (
            <Block center style={styles.noTruckBlock}>
              <Text bold color={argonTheme.COLORS.WHITE}>
                You have not added a truck yet.
              </Text>
              <Button
                color={argonTheme.COLORS.WARNING}
                onPress={() => props.navigation.push('Add Truck')}>
                <Text bold color={argonTheme.COLORS.WHITE}>
                  Add Truck
                </Text>
              </Button>
            </Block>
          ) : isApproved ? (
            <>
              {props.truck_info && (
                <Block style={styles.truckBlock}>
                  <Block
                    row
                    space="between"
                    style={{
                      paddingLeft: 0,
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingRight: 10,
                    }}>
                    <Text bold size={18} color={argonTheme.COLORS.ORANGE}>
                      {props.truck_info.name}
                    </Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <Text>
                        <FAIcon
                          name="plus"
                          size={25}
                          color={argonTheme.COLORS.ORANGE}
                        />
                      </Text>
                    </TouchableOpacity>
                    <Switch
                      trackColor={{
                        false: 'gray',
                        true: argonTheme.COLORS.PRIMARY,
                      }}
                      value={isOffline}
                      onValueChange={value =>
                        switchStatus(value, props.truck_info.id)
                      }
                    />
                  </Block>
                  <Block row>
                    {props.truck_info.licenseNo ? (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <FAIcon name="drivers-license-o" size={25} />
                        <Text
                          bold
                          size={15}
                          style={{
                            color: argonTheme.COLORS.BLACK,
                            marginLeft: 10,
                          }}>
                          {props.truck_info.licenseNo}
                        </Text>
                      </View>
                    ) : null}
                  </Block>
                  <Block style={{marginTop: 10}}>
                    {truckData &&
                    truckData.menus &&
                    truckData.menus.length == 0 ? (
                      <Block style={styles.NoFoodBlock}>
                        <Text style={{color: argonTheme.COLORS.ORANGE}}>
                          There are no food items in this truck.{' '}
                        </Text>
                        <Text style={{color: argonTheme.COLORS.ORANGE}}>
                          Please add food items.
                        </Text>
                      </Block>
                    ) : (
                      <Block>
                        <ScrollView style={styles.dataContainer}>
                          {truckData &&
                            truckData.menus &&
                            truckData.menus.map((category, id) => (
                              <ScrollView key={`c_${id}`}>
                                <Block style={styles.categoryHeader}>
                                  <Text
                                    size={20}
                                    bold
                                    color={argonTheme.COLORS.SECONDARY}>
                                    {category.name}
                                  </Text>
                                </Block>
                                {category.food_info &&
                                  category.food_info.map((food, idx) => (
                                    <ScrollView key={`f_${idx}`}>
                                      <TouchableOpacity
                                        style={styles.tableRow}
                                        onPress={() =>
                                          props.navigation.push('Edit Menu', {
                                            menu_id: food.id,
                                          })
                                        }>
                                        <Block row center flex space="between">
                                          <Block>
                                            <Image
                                              source={
                                                food.photo
                                                  ? {
                                                      uri: `data:image/jpg;base64,${food.photo}`,
                                                    }
                                                  : Images.NoImage
                                              }
                                              style={styles.foodImage}
                                            />
                                          </Block>
                                          <Block row flex center space="around">
                                            <Block flex={0.5}>
                                              <Text
                                                bold
                                                size={16}
                                                color={
                                                  food.available
                                                    ? argonTheme.COLORS.BLACK
                                                    : argonTheme.COLORS.MUTED
                                                }>
                                                {food.name}
                                              </Text>
                                            </Block>
                                            <Text
                                              bold
                                              color={
                                                food.available
                                                  ? argonTheme.COLORS.PRIMARY
                                                  : argonTheme.COLORS.MUTED
                                              }>
                                              &#8377; {food.cost}
                                            </Text>
                                            <FAIcon
                                              name="edit"
                                              size={20}
                                              color={argonTheme.COLORS.ORANGE}
                                            />
                                          </Block>
                                        </Block>
                                      </TouchableOpacity>
                                    </ScrollView>
                                  ))}
                              </ScrollView>
                            ))}
                        </ScrollView>
                      </Block>
                    )}
                  </Block>
                </Block>
              )}
            </>
          ) : (
            <Block center style={styles.noApproveBlock}>
              <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                Your added truck has not been approved yet. Please wait for its
                approval.
              </Text>
            </Block>
          )}
        </ImageBackground>
        <Toast
          isShow={isShow}
          style={styles.toast}
          positionIndicator="top"
          color={toastInfo.color}>
          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
            {toastInfo.message}
          </Text>
        </Toast>
        {modalVisible ? (
          <CustomModal
            modalVisible={modalVisible}
            hideModal={hideModal}
            truck_id={props.truck_info.id}
          />
        ) : null}
      </Block>
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    borderRadius: 50,
  },
  truckImage: {
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 10,
    marginTop: 10,
    borderColor: argonTheme.COLORS.ORANGE,
    borderWidth: 2,
  },
  noTruckBlock: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'column',
    height: height - 600,
    justifyContent: 'space-evenly',
    elevation: 10,
    marginTop: 10,
  },
  truckBlock: {
    width: width,
    flex: 1,
    height: height * 0.5,
    backgroundColor: '#F4F5F7',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 5,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
    display: 'flex',
    marginTop: 10,
  },
  noApproveBlock: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'column',
    height: height - 750,
    elevation: 10,
    marginTop: 10,
  },
  NoFoodBlock: {
    backgroundColor: argonTheme.COLORS.WHITE,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    height: height - 725,
    elevation: 10,
    marginTop: 10,
  },
  toast: {
    position: 'absolute',
    top: 0,
  },
  dataContainer: {
    height: height * 0.5,
    // marginTop: 10,
    padding: 0,
  },
  tableContainer: {
    flex: 1,
    padding: 5,
    // paddingTop: 5,
    backgroundColor: '#ffffff',
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: argonTheme.COLORS.BORDER_COLOR,
    marginBottom: 3,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: argonTheme.COLORS.WHITE,
  },
  TableText: {
    margin: 10,
  },
  tableData: {
    height: height - 500,
  },
  foodImage: {
    width: 80,
    height: 80,
    position: 'relative',
    alignSelf: 'center',
    borderRadius: 50,
    margin: 10,
    borderWidth: 5,
  },
  categoryHeader: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    padding: 10,
    borderWidth: 2,
    borderColor: argonTheme.COLORS.BORDER_COLOR,
    elevation: 5,
  },
});
const mapStateToProps = (state, props) => {
  return {
    truck_info: state.truckReducer.truck_info,
    menu: state.truckReducer.menu,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    truckActions: bindActionCreators(truckActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Truck);
