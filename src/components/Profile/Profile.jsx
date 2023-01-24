import {Avatar,Card,Container,StatList,StatItem,Text,StatName,Quantity} from './Profile.styled'
import PropTypes from 'prop-types';

export default function Profile({username,tag,location,avatar,stats}) {
  return <Container>
  <Card>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Text>{username}</Text>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </Card>

  <StatList>
    <StatItem>
      <StatName>Followers</StatName>
      <Quantity>{stats.followers}</Quantity>
    </StatItem>
    <StatItem>
      <StatName>Views</StatName>
      <Quantity>{stats.views}</Quantity>
    </StatItem>
    <StatItem>
      <StatName>Likes</StatName>
      <Quantity>{stats.likes}</Quantity>
    </StatItem>
  </StatList>
</Container>
 
}


Profile.propTypes={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired)
}