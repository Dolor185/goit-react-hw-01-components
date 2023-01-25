import {
  Container,
  StatList,
  Title,
  StatItem,
  Label,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Stats({ stats, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
