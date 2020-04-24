import React from 'react';
import Loadable from 'react-loadable';

const Project = ({ match }) => {
    let components = {
        1: 'Calculator',
        2: 'TicTacToe',
        3: 'WeatherApp',
        4: 'YoutubeVideo',
        5: 'Images',
        6: 'Card',
        7: 'SeasonDisplayApp'
    };
    const TagName = Loadable({
        loader: () => import('../ProjectList/' + components[match.params.id]),
        loading: () => <div>Loading {match.params.id}...</div>,
    });
    return <TagName />

}
export default Project;