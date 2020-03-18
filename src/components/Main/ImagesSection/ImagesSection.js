import React from 'react';
import * as PropTypes from 'prop-types';
import { Container, Image } from './styled';


function ImagesSection({
    size,
    images,
  }) {

  return (
    <Container>
      {
        images && images.map((item, index) => {
          return (
           <Image key={index} img={item} dimensions={size}/>
          )
        })
      }
    </Container>
  );
}


ImagesSection.propTypes = {
  images: PropTypes.array,
  size: PropTypes.number,
};

export default ImagesSection;
