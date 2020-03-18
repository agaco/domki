import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';
import { Wrapper } from './styled';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';




function SingleItem() {

  const data = useSelector(state => selectors.getSingleItemData(state));
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    id && actionCreators.getSingleData(dispatch, id);
  },[dispatch, id]);

  return (
    <Row>
      <Col span={24}>
        <Wrapper>
          {
            data && (
                <Card style={{ width: 600 }}>
                  <p>{ data.owner }</p>
                  <p>{ data.address }</p>
                  <p>{ data.price } PLN</p>
                </Card>
            )
          }
        </Wrapper>
      </Col>
    </Row>
  );
}


export default SingleItem;
