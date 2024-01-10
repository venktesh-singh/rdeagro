import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';

import {Block, Button, Text} from 'galio-framework';
import {argonTheme} from '../constants';
import {useNavigation} from '@react-navigation/native';

const OrderCard = ({order, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Block key={`order_${index}`} style={styles.orderContainer}>
        <Block row space="between">
          <Text bold size={17} color={argonTheme.COLORS.WHITE}>
            Order No. {order?.id}
          </Text>
          <Text color={argonTheme.COLORS.WHITE}>
            <Text style={styles.icon}>
              <FAIcon
                size={18}
                name={
                  order?.statuses?.status === 'processing'
                    ? 'clock-o'
                    : order?.statuses?.status === 'in transit'
                    ? 'truck'
                    : order?.statuses?.status === 'delivered'
                    ? 'check-square-o'
                    : order?.statuses?.status === 'ready to pick'
                    ? 'check'
                    : null
                }
                color={argonTheme.COLORS.WHITE}
              />{' '}
            </Text>
            {order?.statuses?.status}
          </Text>
          <Text bold color={argonTheme.COLORS.WHITE}>
            &#8377; {order?.cost}
          </Text>
        </Block>
        <Block row space="between" style={styles.blockRow}>
          <Text size={14} color={argonTheme.COLORS.WHITE}>
            <Text style={styles.icon}>
              <FAIcon size={14} name="user" color={argonTheme.COLORS.MUTED} />
            </Text>
            <Text>
              {' '}
              {order?.user_info.firstName} {order?.user_info.lastName}
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.blockRow}
            onPress={() =>
              navigation.push('Order Details', {
                order_id: order?.id,
                order_cost: order?.cost,
              })
            }>
            <Text italic color={argonTheme.COLORS.WHITE}>
              view details{' '}
            </Text>
            <Button
              onlyIcon
              icon="chevron-right"
              iconFamily="fontAwesome"
              iconSize={18}
              color={argonTheme.COLORS.BLACK}
              iconColor="#fff"
              style={styles.button}
              onPress={() =>
                navigation.push('Order Details', {
                  order_id: order?.id,
                  order_cost: order?.cost,
                })
              }
            />
          </TouchableOpacity>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  button: {margin: 0, width: 20, height: 20},
  orderContainer: {
    padding: 15,
    marginBottom: 2,
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    display: 'flex',
    elevation: 10,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  blockRow: {
    marginTop: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
