import React from 'react';
import Loadable from 'react-loadable';
const Project = ({ match }) => {
    let components = {
        1: 'Calculator',
        2: 'TicTacToe',
        3: 'WeatherApp',
        4: 'YoutubeVideo',
        5: 'SeasonDisplayApp'
    };
    const TagName = Loadable({
        loader: () => import('./Projects/' + components[match.params.id]),
        loading: () => <div>Loading {match.params.id}...</div>,
    });
    return <TagName />

}
export default Project;