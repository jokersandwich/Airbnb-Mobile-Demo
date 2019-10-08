import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    discountCity: '',
    hotCity: '',
    wishList: [],
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
                hotCity: action.hot.getIn(['hot_destinations_metadata', '0', 'name']),
                discount: action.discount,
                hot: action.hot,
                house: action.house,
                story: action.story,
                experience: action.experience
            })
        case constants.CHANGE_DISCOUNT_CITY:
            return state.set('discountCity', action.city)
        case constants.CHANGE_HOT_CITY:
            return state.set('hotCity', action.city)
        case constants.CHANGE_LIKE_HOUSE:
            const listings = state.getIn([action.houseType, 'listings']).toJS();
            const houseIndex = listings.findIndex((house) => {
                return house.listing.id === action.id
            });
            const house = listings[houseIndex];
            const newlikeState = !house.listing.like;
            let wishList = state.get('wishList').toJS();

            if (newlikeState) {
                wishList.push(house)
            } else {
                wishList = wishList.filter((item) => {
                    return item.listing.id !== action.id
                })
            }

            console.log('心愿单', wishList)
            return state.setIn([action.houseType, 'listings', houseIndex, 'listing', 'like'], newlikeState).set('wishList', fromJS(wishList))
        default:
            return state;
    }
}