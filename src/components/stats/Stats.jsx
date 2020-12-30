import PropTypes from 'prop-types';
import style from './Stats.module.css';

export default function States({ stats }) {
  const { followers, views, likes } = stats;
  return (
    <ul className={style.stats}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  );
}

States.prototype = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
