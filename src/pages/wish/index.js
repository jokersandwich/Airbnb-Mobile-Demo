import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishList from './components/WishList';
import { actionCreators } from '../home/store';
import {
    WishWrap,
    Header,
    GoBack
} from './style';

class Wish extends Component {

    getWishList() {
        const { wishList, changeLikeHouse } = this.props;

        if (JSON.stringify(wishList) !== '{}') {
            const wishListData = wishList.toJS().map((item) => {
                return {
                    id: item.listing.id,
                    houseType: item.listing.houseType,
                    avatar: item.listing.host_thumbnail_url,
                    title: item.listing.name || '',
                    imgUrl: item.listing.picture_url || '',
                    like: item.listing.like || false,
                    feature: item.listing.space_type || '',
                    featureColor: item.listing.scrim_color || '#555',
                    beds: item.listing.beds || 0,
                    price: item.pricing_quote.price_string || '',
                    rating: item.listing.star_rating || 5,
                    comment: item.listing.reviews_count || 0
                }
            })
    
            return <WishList list={wishListData} onLike={(e, id, houseType) => changeLikeHouse(e, id, houseType)}></WishList>
        } else {
            return null;
        }
    }
    render() {

        return (
            <>
                <WishWrap>
                    <Header>1个住处</Header>
                    {this.getWishList()}
                </WishWrap>
                <GoBack onClick={() => this.props.history.goBack()}>返回</GoBack>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    wishList: state.getIn(['home', 'wishList'])
})

const mapDispatchToPorps = (dispatch) => ({
    changeLikeHouse(e, id, houseType) {
        e.preventDefault();
        dispatch(actionCreators.changeLikeHouse(houseType, id));
    }
})

export default connect(mapStateToProps, mapDispatchToPorps)(Wish);