import PropTypes from 'prop-types';
import SortStat from './SortStat';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <SortStat stats={stats} />
    </section>
  );
}

Statistics.propType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
