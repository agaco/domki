import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { Wrapper } from './styled';
import TextSection from '../../components/Main/TextSection';
import ImagesSection from '../../components/Main/ImagesSection';

function Main() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth)
    });

    return (
     window.removeEventListener('resize', (e) => {
       setWindowWidth(window.innerWidth)
     })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);


  const imageSize = parseInt(windowWidth/4);
  const images = [
   `https://picsum.photos/id/${parseInt(Math.random() * 10)}/${imageSize}/${imageSize}`,
   `https://picsum.photos/id/${parseInt(Math.random() * 10)}/${imageSize}/${imageSize}`,
   `https://picsum.photos/id/${parseInt(Math.random() * 10)}/${imageSize}/${imageSize}`,
   `https://picsum.photos/id/${parseInt(Math.random() * 10)}/${imageSize}/${imageSize}`,
  ];

   console.log(images);

  return (
   <Row>
     <Col span={12}>
       <Wrapper height={windowWidth}>
         <TextSection target='/domki'
            header='Kilka Słów o nas'
            subheader='Nasza oferta'
            bodyText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryss standard dummy text ever since the'
         />
       </Wrapper>
     </Col>
     <Col span={12}>
       <Wrapper height={windowWidth}>
         <ImagesSection images={images} size={parseInt(windowWidth/4)}/>
       </Wrapper>
     </Col>
     <Col span={12}>
       <Wrapper height={windowWidth}>
         <TextSection target='/list'
                      header='Nasza Oferta'
                      subheader='Dowiedz się wiecej'
                      bodyText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryss standard dummy text ever since the'
         />
       </Wrapper>
     </Col>
     <Col span={12}>
       <Wrapper height={windowWidth}>
         <TextSection target='/list'
            header='Nasza Oferta'
            subheader='Dowiedz się wiecej'
            bodyText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryss standard dummy text ever since the'
         />
       </Wrapper>
     </Col>
   </Row>
  );
}


Main.propTypes = {
  users: PropTypes.array,
  role: PropTypes.array,
  filtered: PropTypes.array,
  visible: PropTypes.bool,
  filtersStatus: PropTypes.bool,
  getListOfUsers: PropTypes.func,
};

export default Main;
