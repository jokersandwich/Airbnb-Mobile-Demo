import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const getHomeData = (data) => ({
    type: constants.GET_HOME_DATA,
    discount: fromJS(data.discount),
    hot: fromJS(data.hot),
    house: fromJS(data.house),
    story: fromJS(data.story),
    experience: fromJS(data.experience)
})

export const  getHomeDataSync = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const data = res.data;
                dispatch(getHomeData(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
};