import {
  Avatar,
  Card,
  Container,
  StatList,
  StatItem,
  Text,
  StatName,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <Card>
        <Avatar src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Card>

      <StatList>
        <StatItem>
          <StatName>Followers</StatName>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <StatName>Views</StatName>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <StatName>Likes</StatName>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </StatList>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
