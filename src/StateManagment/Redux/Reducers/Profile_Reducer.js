import { isloader,user_Profile,user_Session ,isrepairOrder, isConfirm} from "../Actions/Index";

const initialState = {
  isLoading:false,
  isConfirmed:false,
  user:{},
  isExpired:false,
  isActive:true,
  create_Order_Service:{
    customer:null,
    vehicle:null,
    service:null,
    shedule:null
  }

};

const userprofile_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case user_Profile : {
      const data = action.payload
      return {
        ...state,
        user: action.payload
      };
    } case user_Session: {
      const data = action.payload
      return {
        ...state,
        isExpired:data
      };
    }case isrepairOrder: {
      const data = action.payload
      return {
        ...state,
        create_Order_Service:data
      };
    }
    case isloader: {
      return {
        ...state,
        isLoading:action.payload
      };
    }
      case isConfirm: {
      return {
        ...state,
        isConfirmed:action.payload
      };
    }
   
    default:
      return state;
  }
}

export default userprofile_Reducer;