import {Avatar,Card,Container,StatList,StatItem,Text} from './Profile.styled'

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
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StatItem>
    <StatItem>
      <span>Views</span>
      <span>{stats.views}</span>
    </StatItem>
    <StatItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StatItem>
  </StatList>
</Container>
 
}

