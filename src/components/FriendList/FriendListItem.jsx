import PropTypes from 'prop-types';
import { Friend, Status, FriendImage } from './FriendLListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Friend>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
