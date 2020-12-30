import PropTypes from 'prop-types';
import style from '../transaction/Transaction.module.css';

export default function Transaction({ list, title }) {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {list.map(el => {
            return (
              <tr key={el.id} className={style.trow}>
                <td className={style.td}>{el.type}</td>
                <td className={style.td}>{el.amount}</td>
                <td className={style.td}>{el.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

Transaction.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
