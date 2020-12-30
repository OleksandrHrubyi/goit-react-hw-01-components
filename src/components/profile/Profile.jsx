import PropTypes from 'prop-types';
import Stats from '../stats/Stats';
import style from '../profile/Profile.module.css';

export default function Profile({ user }) {
  const { avatar, name, tag, location, stats } = user;
  return (
    <div className={style.profile}>
      <div className="description">
        <img className={style.avatar} src={avatar} alt={name} />
        <p className={style.name}>{name}</p>
        <p className={style.name}>{tag}</p>
        <p className={style.name}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
