import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    discountCity: '',
    hotCity: '',
    discount: {},
    hot: {},
    house: {},
    story: {},
    experience: {}
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_HOME_DATA:
            return state.merge({
                discountCity: action.discount.getIn(['hot_destinations_metadata', '0', 'name']),
                discount: action.discount,
                hot: action.hot,
                house: action.house,
                story: action.story,
                experience: action.experience
            })
        case constants.CHANGE_DISCOUNT_CITY:
            return state.set('discountCity', action.city)
        default:
            return state;
    }
}