import PropTypes from 'prop-types';

export default function SortStat({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(el => {
        return (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
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
