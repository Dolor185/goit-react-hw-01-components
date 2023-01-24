import {Container,Status,Friend,FriendImage} from './FriendList.styled'
import PropTypes from 'prop-types';

export default function FriendList({friends}){
    return <Container >
    {friends.map(friend=>
    (<Friend key={friend.id}>
  <Status isOnline={friend.isOnline}></Status>
  <FriendImage  src={friend.avatar} alt="User avatar" width="48" />
  <p >{friend.name}</p>
</Friend>))}
  </Container>
}


FriendList.propTypes= {
  friends:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    isOnline:PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
}