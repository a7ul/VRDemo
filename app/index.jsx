import React from 'react';
import {render} from 'react-dom';

let MainComponent = React.createClass({
    render() {
        return <div>Hi</div>;
    }
});

render(
    <MainComponent/>, document.getElementById('root'));
