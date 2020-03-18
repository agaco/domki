import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as PropTypes from 'prop-types';
import {Col, Row} from 'antd';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';
import {Wrapper, Comment} from './styled';
import TextSection from '../../components/Main/TextSection';
import {Header, MainText, SubHeader} from "../../components/Main/TextSection/styled";

function Main() {

  const refContainer = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const data = useSelector(state => selectors.getDataToBeDisplayed(state));
  // const currentItemsRange = useSelector(state => selectors.getCurrentPage(state));
  // const dispatch = useDispatch();

  useEffect(() => {

    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth)
    });
    return (
     window.removeEventListener('resize', (e) => {
       setWindowWidth(window.innerWidth)
     })
    )
  }, [window.innerWidth]);


  return (
   <Row ref={refContainer}>
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
         jhghhgh hgfgtre trerer
       </Wrapper>
     </Col>
     {/*<Col span={12}>*/}
     {/*  <Wrapper>*/}
     {/*    jhghhgh hgfgtre trerer*/}
     {/*  </Wrapper>*/}
     {/*</Col>*/}
     <Col span={12}>
       <Wrapper height={window.innerWidth}>
         <TextSection target='/domki'
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
