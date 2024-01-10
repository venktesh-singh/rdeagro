import React, {useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as truckActions from '../redux/actions/truck-actions';
import {Block, theme, Button, Input, Radio, Text, Toast} from 'galio-framework';
import {Images, argonTheme, baseUrl} from '../constants';
import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get('screen');

const EditMenu = props => {
  const menu_id = props?.route?.params?.menu_id;
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [soldCount, setSoldCount] = useState('');
  const [category, setCategory] = useState('');
  const [available, setAvailable] = useState('');
  const [toastInfo, setToastInfo] = useState({color: '', message: ''});
  const [isShow, setShow] = useState(false);
  const [foodImgSource, setFoodImgSource] = useState(null);
  const [photo, setPhoto] = useState('');
  const selectPlaceholder = {
    label: 'Choose a category...',
    value: null,
    color: argonTheme.COLORS.PRIMARY,
  };

  useEffect(() => {
    (async () => {
      await props.truckActions.getMenuById(menu_id);
      await props.truckActions.getCategories();
      //    setFoodImgSource(foodImgSource);
    })();
  }, [foodImgSource]);

  useEffect(() => {
    if (props.menu_item && props.categories) {
      setName(props.menu_item.name);
      setCost(props.menu_item.cost);
      setSoldCount(props.menu_item.soldCount.toString());
      setCategory(props.menu_item.category_id);
      setAvailable(props.menu_item.available);
      if (!foodImgSource) {
        setPhoto(props.menu_item.photo);
      }
      // setFoodImgSource(foodImgSource)
    }
  }, [props.menu_item, props.categories]);

  const categoryList = () => {
    //  console.log("menu_id", name, category)

    let categoryArray =
      props.categories &&
      props.categories.map(el => {
        return {
          label: el.name,
          value: el.id,
        };
      });
    return categoryArray || [];
  };

  const handleToast = (message, color) => {
    setShow(true);
    setToastInfo({message, color});
    setTimeout(() => {
      setShow(false);
    }, 3000);
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
          setFoodImgSource(source.uri);
          setPhoto(response.base64);
        }
      },
      // err => {
      //   console.log(err, 'errrr');
      // },
    );
  };

  const clearForm = () => {
    setCost('');
    setName('');
    setCategory('');
    setSoldCount('');
    setFoodImgSource(null);
    setPhoto(null);
  };

  const editFoodItem = () => {
    let itemObj = {
      name: name,
      photo: photo,
      category_id: category,
      soldCount: soldCount,
      available: available,
      cost: cost,
    };
    //   console.log(itemObj)
    props.truckActions.updateMenuItem(itemObj, menu_id, data => {
      if (data != 'error') {
        handleToast('Food Item updated!', 'success');
        clearForm();
        setTimeout(() => {
          props.navigation.push('Your Truck');
        }, 2000);
        setPhoto(null);
      } else {
        //   console.log("===>error", data)
        handleToast('Food Item was not updated.', 'error');
        return;
      }
    });
  };

  return (
    <>
      <Header title="Edit Food Item" />
      <ScrollView contentContainerStyle={styles.editContainer}>
        <Block
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Block width={width * 0.5}>
            <Input
              border
              placeholder="Food Item Name"
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              color={argonTheme.COLORS.BLACK}
              value={name}
              onChangeText={text => setName(text)}
            />
          </Block>
          <Block width={width * 0.4}>
            <Input
              border
              placeholder="Cost"
              keyboardType="numeric"
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              color={argonTheme.COLORS.BLACK}
              value={cost}
              onChangeText={text => setCost(text)}
            />
          </Block>
        </Block>
        <Block
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Block width={width * 0.5}>
            <RNPickerSelect
              label={category}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              value={category}
              placeholder={selectPlaceholder}
              onValueChange={value => setCategory(value)}
              items={categoryList()}
            />
          </Block>
          <Block width={width * 0.4}>
            <Input
              border
              placeholder="Sold Count"
              keyboardType="numeric"
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              color={argonTheme.COLORS.BLACK}
              value={soldCount}
              onChangeText={text => setSoldCount(text)}
            />
          </Block>
        </Block>
        <Block center>
          <Button
            color={argonTheme.COLORS.SECONDARY}
            onPress={() => imageSelect()}>
            <Text bold color={argonTheme.COLORS.PRIMARY}>
              {photo ? 'Edit Image' : 'Add Image'}
            </Text>
          </Button>
          <Block row>
            <Image
              source={
                !foodImgSource
                  ? photo
                    ? {uri: `data:image/jpg;base64,${photo}`}
                    : null
                  : {uri: foodImgSource}
              }
              style={photo ? styles.truckImage : null}
            />

            {foodImgSource ? (
              <TouchableOpacity
                onPress={() => setFoodImgSource(null)}
                style={{
                  position: 'absolute',
                  top: 15,
                  left: 172,
                  elevation: 5,
                  backgroundColor: argonTheme.COLORS.SECONDARY,
                }}>
                <FAIcon
                  name="close"
                  size={30}
                  color={argonTheme.COLORS.BLACK}
                />
              </TouchableOpacity>
            ) : null}
          </Block>
        </Block>
        <Block row center style={{marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={() => setAvailable(!available)}>
            <Text>
              {available ? (
                <FAIcon
                  size={20}
                  name="check-square-o"
                  color={argonTheme.COLORS.PRIMARY}
                />
              ) : (
                <FAIcon
                  size={20}
                  name="square-o"
                  color={argonTheme.COLORS.PRIMARY}
                />
              )}
            </Text>
          </TouchableOpacity>
          <Text bold size={18} color={argonTheme.COLORS.PRIMARY}>
            {available ? ' Available' : ' Not Available'}
          </Text>
        </Block>
      </ScrollView>
      <Block row center>
        <Button
          onPress={() => {
            clearForm();
            props.navigation.push('Your Truck');
          }}>
          <Text bold size={20} color={argonTheme.COLORS.WHITE}>
            Cancel{' '}
            <FAIcon name="close" size={20} color={argonTheme.COLORS.WHITE} />
          </Text>
        </Button>
        <Button onPress={() => editFoodItem()}>
          <Text bold size={20} color={argonTheme.COLORS.WHITE}>
            Edit{' '}
            <FAIcon name="edit" size={20} color={argonTheme.COLORS.WHITE} />
          </Text>
        </Button>
      </Block>
      <Toast
        isShow={isShow}
        style={styles.toast}
        positionIndicator="top"
        color={toastInfo.color}>
        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
          {toastInfo.message}
        </Text>
      </Toast>
    </>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  truckImage: {
    width: 200,
    height: 200,
    // zIndex: 2,
    position: 'relative',
    borderRadius: 10,
    marginTop: 10,
    borderColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 5,
  },
  toast: {
    position: 'absolute',
    top: 60,
  },
});
const pickerSelectStyles = StyleSheet.create({
  // inputIOS: {
  //   fontSize: 16,
  //   paddingVertical: 12,
  //   paddingHorizontal: 10,
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   borderRadius: 4,
  //   color: 'black',
  //   paddingRight: 30, // to ensure the text is never behind the icon
  // },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: argonTheme.COLORS.BORDER_COLOR,
    borderRadius: 8,
    color: argonTheme.COLORS.BLACK,
    backgroundColor: argonTheme.COLORS.WHITE,
    marginLeft: 4,
    paddingLeft: 15,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

function mapStateToProps(state, props) {
  return {
    categories: state.truckReducer.categories,
    menu_item: state.truckReducer.menu_item,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    truckActions: bindActionCreators(truckActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMenu);
