import PropTypes from 'prop-types';
import style from '../friendList/FriendList.module.css';

export default function FriendList({ list, title }) {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <ul className="friend-list">
        {list.map(el => {
          return (
            <li className={style.item} key={el.id}>
              <span
                className={style.status}
                style={{ backgroundColor: el.isOnline ? 'green' : 'red' }}
              ></span>
              <img
                className={style.avatar}
                src={el.avatar}
                alt={el.name}
                width="48"
              />
              <p className={style.name}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </>
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
