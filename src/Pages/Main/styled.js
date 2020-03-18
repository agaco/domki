import styled from 'styled-components';
import { Comment as CommonComment} from 'antd';

export const Wrapper = styled.div`
  height: ${props => props.height/2}px;
  border: 1px solid black;
`;
export const Comment = styled(CommonComment)`
`;
