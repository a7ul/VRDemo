import 'aframe';
import 'aframe-text-component';
import React from 'react';
import {render} from 'react-dom';
import Menu from './Menu';
import housingLayoutBg from './assets/photosphere.jpg';

let MainComponent = React.createClass({
    render() {
        return (
            <a-scene>
                <a-assets>
                    <img id="housing-layout" src={housingLayoutBg}/>
                </a-assets>
                <Menu></Menu>
            </a-scene>
        );
    }
});

render(
    <MainComponent/>, document.getElementById('root'));
