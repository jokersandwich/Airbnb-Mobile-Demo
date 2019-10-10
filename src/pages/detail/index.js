import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div
                onClick={() => this.props.history.goBack()}
                style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
            >
                <p>详情页</p>
                <p>id {this.props.match.params.id}</p>
                <p>todo...</p>
            </div>
        )
    }
}

export default Detail;