import {Container} from './App.styled'
import Profile from "../Profile/Profile";
import Stats from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../Transactions/TransactionHistory";
import user from "../../data/user.json"
import stats from '../../data/stats.json'
import friends from '../../data/friends.json'
import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Stats stats={stats} title={'UPLOAD STATS'}/>

      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
  </Container>
  );
};
