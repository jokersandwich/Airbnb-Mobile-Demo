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
            const text = hot_destinations_metadata[0].see_all_info.title
            const tagList = [];
            const houseList = [];
            
            hot_destinations_metadata.map((item) => {
                tagList.push(item.name);
                return null;
            })

            hot_destinations_metadata.map((city) => {
                if (city.name === discountCity) {
                    city.home_ids.map((house) => {
                        listings.map((item) => {
                            if (item.listing.id.toString() === house) {
                                const houseItem = {
                                    title: item.listing.name || '',
                                    imgUrl: item.listing.picture_url || '',
                                    tag: item.listing.is_new_listing || false,
                                    feature: item.listing.space_type || '',
                                    featureColor: item.listing.scrim_color || '#555',
                                    bedrooms: item.listing.bedrooms || 0,
                                    bathrooms: item.listing.bathrooms || 0,
                                    beds: item.listing.beds || 0,
                                    price: {
                                        priceNew: item.pricing_quote.price_string || '',
                                        priceOld: item.pricing_quote.rate_without_discount.amount_formatted || '',
                                    },
                                    rating: item.listing.star_rating || 5,
                                    comment: item.listing.reviews_count || 0
                                };
                                houseList.push(houseItem);
                            }
                            return null;
                        })
                        return null;
                    })
                }
                return null;
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