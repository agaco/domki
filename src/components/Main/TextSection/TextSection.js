import React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from 'antd';
import { Container, Header, SubHeader, MainText } from './styled';
import { Link } from 'react-router-dom';


function TextSection({
    header,
    subheader,
    bodyText,
    target,
  }) {

  return (
    <Container>
      <Header>
        { header }
      </Header>

      <SubHeader>
        { subheader }
      </SubHeader>

      <MainText>
        { bodyText }
      </MainText>

      <Button type='primary' ghost>
        <Link to={target}>
          Zobacz więcej
        </Link>
      </Button>



    </Container>
  );
}


TextSection.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  bodyText: PropTypes.string,
  target: PropTypes.string,
};

export default TextSection;
