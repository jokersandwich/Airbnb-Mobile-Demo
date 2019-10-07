import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './common/Section';
import Title from './common/Title';
import ExperienceList from './common/ExperienceList';
import More from './common/More';

class Experience extends Component {

    getSectionContent() {
        const { experience } = this.props;
        
        if (JSON.stringify(experience) !== '{}') {
            const { title, subtitle, trip_templates } = experience.toJS();

            const experienceList = trip_templates.slice(0, 4).map((item) => {
                return {
                    id: item.id,
                    title: item.title || '',
                    imgUrl: item.picture.picture || '',
                    feature: item.kicker_text || '',
                    featureColor: item.kicker_text_color || '#555',
                    price: item.base_price_string || '',
                    rating: item.star_rating || 5,
                    comment: item.review_count || 0
                }
            })

            return (
                <Section>
                    <Title title={title} subtitle={subtitle}></Title>
                    <ExperienceList list={experienceList}></ExperienceList>
                    <More text={'查看更多体验'}></More>
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
    experience: state.getIn(['home', 'experience'])
})

export default connect(mapStateToProps, null)(Experience);