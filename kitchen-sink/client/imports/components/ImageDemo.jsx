import React from 'react';
import Image from '../lib/Image';

export default class ImageDemo extends React.Component {
  render() {
    const style = {
      width: '400px',
      height: '300px',
      objectFit: 'cover',
    };

    const wrapperProps = {
      style: {
        width: '100%',
        height: '100%',
      },
    };

    const testImgSrc = 'http://www.placecage.com/c/3500/2000';

    return (
      <div>
        <h1>Image</h1>

        <h2>Default</h2>
        <Image
          src={testImgSrc}
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          className="evanSucks"
        />

        <h2>loadingSrc</h2>
        <Image
          src={testImgSrc}
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          loadingSrc="http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg"
          style={style}
        />

        <h2>Error</h2>
        <Image
          src="http://nonexist-image.jpg"
          style={style}
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
        />

        <div style={{ height: '100vh' }}></div>

        <h2>Lazy loading default</h2>
        <Image
          src="https://bugs.tizen.org/jira/secure/attachment/13459/1mb.png"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          lazy={true}
        />

        <div style={{ height: '100vh' }}></div>

        <h2>Lazy loading with offset</h2>
        <Image
          src="http://www.mountain-moments.co.uk/web%20components/posters/South%20Glen%20Shiel%20Ridge.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          lazy={true}
          offset={600}
        />

      </div>
    );
  }
}
