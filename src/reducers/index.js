import itemListReducer from './itemList';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    itemListReducer,
    form: formReducer
})

export default allReducers;