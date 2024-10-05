import {
  productsRequest,
  productsSuccess,
  productsFailure,
} from "../../ReduxStateManage/Slices/productsSlice";
import axios from "axios";

const getProducts = () => async (dispatch) => {
  dispatch(productsRequest());
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/products/getProducts"
    );
    console.log(data);
    
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFailure(error.message));
  }
};

export { getProducts };


  
  
  