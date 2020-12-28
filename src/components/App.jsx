import Profile from './Profile';
import FriendList from 'components/FriendList';
import Statistics from 'components/Statistics';
import Transaction from 'components/Transaction';
import user from 'data/user.json';
import statData from 'data/statData.json';
import friendData from 'data/friendList.json';
import transactionList from 'data/transaction.json';

export default function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList list={friendData} />
      <Transaction list={transactionList} />
    </div>
  );
}
