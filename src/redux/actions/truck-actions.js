import * as types from '../action-types';
import axios from 'axios';
import {baseUrl, getHeaders} from '../../constants';

export const getCategories = () => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/category/getall`,
      headers: await getHeaders(),
    })
      .then(async response => {
        if (response) {
          if (response.data) {
            if (response.data.data) {
              console.log('=====>dispatching');
              await dispatch({
                type: types.GET_CATEGORIES,
                payload: response.data.data,
              });
            }
          }
        }
      })
      .catch(error => {
        console.log('====>GetCategoryError', error);

        if (error.response) {
          console.log('error');
          // console.log("error", error.response)
        }
      });
  };
};

export const getTruckByVendor = (id, callback) => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/truck/getbyuser/${id}`,
      headers: await getHeaders(),
    })
      .then(async response => {
        console.log(response, 'respp');
        if (response) {
          if (response.data) {
            if (response.data.data) {
              console.log('=====>dispatching');
              await dispatch({
                type: types.SET_TRUCK_INFO,
                payload: response.data.data,
              });
            }
            callback(response.data.data);
          }
        }
      })
      .catch(error => {
        console.log('Hellooo');
        console.log('====>GetTruckActionError', error);

        if (error.response) {
          callback('error');
        }
      });
  };
};

export const postAddressData = (jsonObj, callback) => {
  return async dispatch => {
    axios({
      method: 'post',
      url: `${baseUrl}/address/add`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        // console.log("response postAddressAction ", response.data)
        callback(response.data);
      })
      .catch(error => {
        // console.log("error postAddressAction ", error)
        callback('error');
      });
  };
};

export const postTruckData = (jsonObj, callback) => {
  return async dispatch => {
    axios({
      method: 'post',
      url: `${baseUrl}/truck/add`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        // console.log("response postTruckDataAction ", response.data)
        callback(response.data);
      })
      .catch(error => {
        // console.log("error postTruckDataAction ", error.response)
        callback('error');
      });
  };
};

export const getTruckMenu = (id, callback) => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/truck/getwithmenu/mobile/${id}`,
      headers: await getHeaders(),
    })
      .then(response => {
        if (response) {
          if (response.data) {
            // console.log("====>", response.data)
            callback(response.data);
          }
        }
      })
      .catch(error => {
        if (error.response) {
          callback('error');
        }
      });
  };
};

export const updateTruckStatus = (status, id, callback) => {
  const jsonObj = {
    offline: status,
  };
  console.log('===>id', id);
  return async dispatch => {
    axios({
      method: 'PUT',
      url: `${baseUrl}/truck/edit/${id}`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        if (response) {
          if (response.data) {
            // console.log("====>", response.data)
            callback(response);
          }
        }
      })
      .catch(error => {
        if (error.response) {
          callback('error');
        }
      });
  };
};

export const updateTruckPhoto = (jsonObj, id, callback) => {
  console.log('===>id', id);
  return async dispatch => {
    axios({
      method: 'PUT',
      url: `${baseUrl}/truck/edit/${id}`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        if (response) {
          if (response.data) {
            // console.log("====>", response.data)
            callback(response);
          }
        }
      })
      .catch(error => {
        if (error.response) {
          callback('error');
        }
      });
  };
};

export const addFoodItem = (jsonObj, callback) => {
  return async dispatch => {
    axios({
      method: 'post',
      url: `${baseUrl}/menu/add`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        console.log('-=-=-=response caught-=-=-= ', response.data);
        callback(response.data);
      })
      .catch(error => {
        console.log('-=-=-=error caught-=-=-= ', error.response);
        callback('error');
      });
  };
};

export const getMenuById = id => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/menu/getbyid/${id}`,
      headers: await getHeaders(),
    })
      .then(async response => {
        if (response) {
          if (response.data) {
            if (response.data.data) {
              console.log('=====>dispatching Menu');
              await dispatch({
                type: types.GET_MENU_ITEM,
                payload: response.data.data,
              });
            }
          }
        }
      })
      .catch(error => {
        console.log('====>GetMenuError', error);

        if (error.response) {
          console.log('error');
        }
      });
  };
};

export const updateMenuItem = (jsonObj, id, callback) => {
  return async dispatch => {
    axios({
      method: 'PUT',
      url: `${baseUrl}/menu/edit/${id}`,
      headers: await getHeaders(),
      data: jsonObj,
    })
      .then(response => {
        if (response) {
          if (response.data) {
            // console.log("====>", response.data)
            callback(response);
          }
        }
      })
      .catch(error => {
        if (error.response) {
          console.log('error======>', error.response);
          callback('error');
        }
      });
  };
};

export const getOrders = (id, callback) => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/order/getbytruck/${id}`,
      headers: await getHeaders(),
    })
      .then(async response => {
        if (response) {
          if (response.data) {
            if (response.data.data) {
              console.log('=====>dispatching Orders');
              await callback(response.data.data);
            }
          }
        }
      })
      .catch(error => {
        console.log('====>GetOrderError', error);

        if (error.response) {
          callback('error');
        }
      });
  };
};

export const getOrderDetails = (id, callback) => {
  return async dispatch => {
    axios({
      method: 'GET',
      url: `${baseUrl}/order/getbyid/${id}`,
      headers: await getHeaders(),
    })
      .then(async response => {
        if (response) {
          if (response.data) {
            if (response.data.data) {
              console.log('=====>dispatching OrderDetails');
              await callback(response.data.data);
            }
          }
        }
      })
      .catch(error => {
        console.log('====>GetOrderDetailError', error);

        if (error.response) {
          callback('error');
        }
      });
  };
};

// export const addFoodCategory = (jsonObj, callback) => {
//     return async dispatch => {
//         axios({
//             method: 'post',
//             url: `${baseUrl}/category/add`,
//             headers: await getHeaders(),
//             data: jsonObj
//         }).then(response => {
//             console.log("response ", response.data)
//             callback(response.data)
//         }).catch(error => {
//             console.log("-=-=-=error caught-=-=-= ", error)
//             callback("error")
//         });
//     }
// }
