import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row} from 'antd';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';
import { Wrapper } from './styled';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


function Listing() {

  const data = useSelector(state => selectors.getDataToBeDisplayed(state));
  const dispatch = useDispatch();

  useEffect(() => {
    actionCreators.getDataAction(dispatch);
  },[dispatch]);


  return (
    <Row>
      <Col span={24}>
        <Wrapper>
          {
            data && data.map(item => {
              return (
                <Card key={item._id} style={{ width: 300 }}>
                  <p>{ item.address }</p>
                  <p>{ item.price } PLN</p>
                  <Link to={`/house/${item._id}`}>
                    Szczegóły
                  </Link>
                </Card>
              );
            })
          }
        </Wrapper>
      </Col>
    </Row>
  );
}


export default Listing;
