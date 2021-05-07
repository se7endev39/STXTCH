import React from 'react';
import Image from '../../ImageDescriptedIn'

const ImageCollection = (props) => {
  return (
    <div className="flex flex-wrap 2xl:p-0 pb-20 pt-4 lg:flex-wrap ">
      {
        props.images?.map( (image, index) => (
          <Image key={index} {...image}/>
        ))
      }
    </div>
  );
}

export default ImageCollection;