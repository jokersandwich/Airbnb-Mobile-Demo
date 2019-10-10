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
        case constants.GET_HOME_DATA:   // 获取首页数据
            return state.merge({
                discountCity: action.discount.getIn(['hot_destinations_metadata', '0', 'name']),
                hotCity: action.hot.getIn(['hot_destinations_metadata', '0', 'name']),
                discount: action.discount,
                hot: action.hot,
                house: action.house,
                story: action.story,
                experience: action.experience
            })
        case constants.CHANGE_DISCOUNT_CITY:    // 选择折扣城市
            return state.set('discountCity', action.city)
        case constants.CHANGE_HOT_CITY:    // 选择热门城市
            return state.set('hotCity', action.city)
        case constants.CHANGE_LIKE_HOUSE:    // 喜欢房源
            const houseType = action.houseType
            const listings = state.getIn([houseType, 'listings']).toJS();
            const houseIndex = listings.findIndex((house) => {
                return house.listing.id === action.id
            });
            const house = listings[houseIndex];
            const newlikeState = !house.listing.like;
            house.listing.like = newlikeState;
            house.listing.houseType = houseType

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