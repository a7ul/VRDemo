import React from 'react';
let Menu = React.createClass({
    render() {
        return (
            <a-entity>
                <a-entity geometry="primitive: box;width:1;height:1;depth:0.1;color:'rgb(194, 129, 69)';" position="-9 5.7 -1.6" rotation="0 75 0"  scale="1.7 1.7 1"></a-entity>
                <a-entity text="text: Photosphere house;size:0.2; color:'rgb(194, 129, 69)';" position="-10.5 8 0" rotation="0 75 0" scale="1.7 1.7 1"></a-entity>
                <a-entity position="0 0 0">
                    <a-camera id="camera">
                        <a-cursor color="#4CC3D9"></a-cursor>
                    </a-camera>
                </a-entity>
                <a-sky src="#housing-layout"></a-sky>
            </a-entity>
        );
    }
});

module.exports = Menu;
