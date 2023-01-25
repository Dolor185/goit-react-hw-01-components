import {
  Table,
  Head,
  TableRow,
  TableCell,
  HeadCell,
} from './TransactionHistory.stylled';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <tr>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </tr>
      </Head>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
