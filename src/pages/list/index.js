import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div
                onClick={() => this.props.history.goBack()}
                style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
            >
                <p>列表页</p>
                <p>todo...</p>
            </div>
        )
    }
}

export default List;