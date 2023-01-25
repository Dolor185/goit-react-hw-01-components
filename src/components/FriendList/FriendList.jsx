import { Container } from './FriendList.styled';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
