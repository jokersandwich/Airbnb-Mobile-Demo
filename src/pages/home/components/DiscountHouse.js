import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './common/Section';
import Title from './common/Title';
import TabList from './common/TabList';
import HouseList from './common/HouseList';
import More from './common/More';
import { actionCreators } from '../store';

class DiscountHouse extends Component {

    getSectionContent() {
        const { discount, discountCity, changeDiscountCity } = this.props;
        
        if (JSON.stringify(discount) !== '{}') {
            const { title, subtitle, hot_destinations_metadata, listings } = discount.toJS();

            const selectedCity = hot_destinations_metadata.find((item) => {
                return item.name === discountCity
            })
            
            const text = selectedCity.see_all_info.title

            const tagList = hot_destinations_metadata.map((item) => {
                return item.name;
            })

            const houseList = selectedCity.home_ids.map((houseId) => {
                return listings.find((item) => {
                    return item.listing.id.toString() === houseId
                })
            }).map((item) => {
                return {
                    id: item.listing.id,
                    title: item.listing.name || '',
                    imgUrl: item.listing.picture_url || '',
                    tag: item.listing.is_new_listing || false,
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
                    <Title title={title} subtitle={subtitle}></Title>
                    <TabList list={tagList} active={discountCity} onTap={city => {changeDiscountCity(city)}}></TabList>
                    <HouseList list={houseList}></HouseList>
                    <More  text={text}></More>
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
    discount: state.getIn(['home', 'discount']),
    discountCity: state.getIn(['home', 'discountCity'])
})

const mapDispatchToPorps = (dispatch) => ({
    changeDiscountCity(city) {
        dispatch(actionCreators.changeDiscountCity(city))
    }
})

export default connect(mapStateToProps, mapDispatchToPorps)(DiscountHouse);