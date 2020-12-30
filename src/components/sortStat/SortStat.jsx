import PropTypes from 'prop-types';
import style from '../sortStat/SortStat.module.css';

export default function SortStat({ stats }) {
  return (
    <ul className={style.list}>
      {stats.map(el => {
        return (
          <li className={style.item} key={el.id}>
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}</span>
          </li>
        );
      })}
    </ul>
  );
}

SortStat.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
