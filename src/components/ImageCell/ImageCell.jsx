import React from 'react';
import ImageLoader from 'react-load-image';
import { string } from 'prop-types';

const Preloader = () => (
    <img src="/dist/img/spinner.gif" />
)

const ImageCell = ({ src }) => (
    <ImageLoader className="image-cell" src={src}>
        <img  />
        <div>Error!</div>
        <Preloader />
    </ImageLoader>
);

ImageCell.propTypes = {
    src: string.isRequired,
};

export default ImageCell;