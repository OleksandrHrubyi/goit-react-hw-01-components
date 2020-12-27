import PropTypes from 'prop-types';

export default function FriendList({ list }) {
  return (
    <ul className="friend-list">
      {list.map(el => {
        return (
          <li className="item" key={el.id}>
            <span className="status">{el.isOnline}</span>
            <img className="avatar" src={el.avatar} alt={el.name} width="48" />
            <p className="name">{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};
