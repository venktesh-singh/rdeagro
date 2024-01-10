
const initialState = {
    remember_token: '',
    business_id: '',
    location_id: '',
    start_date: '',
    end_date: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;