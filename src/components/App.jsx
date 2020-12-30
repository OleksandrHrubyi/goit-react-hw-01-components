import Container from 'components/container/Container';
import Profile from './profile/Profile';
import FriendList from 'components/friendList/FriendList';
import Statistics from 'components/statistics/Statistics';
import Transaction from 'components/transaction/Transaction';
import user from 'data/user.json';
import statData from 'data/statData.json';
import friendData from 'data/friendList.json';
import transactionList from 'data/transaction.json';

export default function App() {
  return (
    <Container>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statData} />

      <FriendList list={friendData} title="Friends list" />

      <Transaction list={transactionList} title="Transactions" />
    </Container>
  );
}
