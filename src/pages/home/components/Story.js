import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './common/Section';
import Title from './common/Title';
import StoryList from './common/StoryList';
import More from './common/More';

class Story extends Component {

    getSectionContent() {
        const { story } = this.props;
        
        if (JSON.stringify(story) !== '{}') {
            const { stories, title } = story.toJS();

            const storyList = stories.slice(0, 4).map((item) => {
                return {
                    id: item.id,
                    title: item.title || '',
                    imgUrl: item.cover_image_url || '',
                    tag: item.article_category || '',
                    location: item.location_name || '',
                    like: item.like_count|| 0,
                    comment: item.comment_count || 0
                }
            })

            return (
                <Section>
                    <Title title={title}></Title>
                    <StoryList list={storyList}></StoryList>
                    <More text={'查看更多故事'}></More>
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
    story: state.getIn(['home', 'story'])
})

export default connect(mapStateToProps, null)(Story);