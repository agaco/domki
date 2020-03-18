import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  display: flex;
  width: ${props => props.dimensions - 5}px;
  height: ${props => props.dimensions - 5}px;
  background-image: url(${props => props.img});
`;



