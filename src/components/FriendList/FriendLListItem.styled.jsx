import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin-left: 20px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FriendImage = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;
