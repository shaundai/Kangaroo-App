import itemListReducer from './itemList';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    itemListReducer
})

export default allReducers;