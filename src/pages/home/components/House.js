import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './common/Section';
import Title from './common/Title';
import HouseList from './common/HouseList';
import More from './common/More';
import { actionCreators } from '../store';

class House extends Component {

    getSectionContent() {
        const { house, changeLikeHouse } = this.props;
        
        if (JSON.stringify(house) !== '{}') {
            const { listings } = house.toJS();

            const houseList = listings.slice(0, 4).map((item) => {
                return {
                    id: item.listing.id,
                    title: item.listing.name || '',
                    imgUrl: item.listing.picture_url || '',
                    tag: item.listing.is_new_listing || false,
                    like: item.listing.like || false,
                    feature: item.listing.space_type || '',
                    featureColor: item.listing.scrim_color || '#555',
                    bedrooms: item.listing.bedrooms || 0,
                    bathrooms: item.listing.bathrooms || 0,
                    beds: item.listing.beds || 0,
                    price: item.pricing_quote.price_string || '',
                    rating: item.listing.star_rating || 5,
                    comment: item.listing.reviews_count || 0
                }
            })

            return (
                <Section>
                    <Title title={'全球热门房源精选'} subtitle={'精选舒适房源供你挑选'}></Title>
                    <HouseList list={houseList} onLike={(e, id) => changeLikeHouse(e, id)}></HouseList>
                    <More text={'查看更多房源'}></More>
                </Section>
            )
        } else {
            return null;
        }

    }
    
    render() {
        return (
            <>
                {this.getSectionContent()}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    house: state.getIn(['home', 'house'])
})

const mapDispatchToPorps = (dispatch) => ({
    changeLikeHouse(e, id) {
        const houseType = 'house';
        e.preventDefault();
        dispatch(actionCreators.changeLikeHouse(houseType, id));
    }
})

export default connect(mapStateToProps, mapDispatchToPorps)(House);