import {Container,StatList,Title,StatItem,Label} from'./Statistics.styled'
import PropTypes from 'prop-types';


export default function Stats({stats,title}){
    return <Container>
    {{title}&& (<Title>{title}</Title>)}
    <StatList>
      {stats.map(stat=>(
      <StatItem key={stat.id} >
        <Label>{stat.label}</Label>
        <span>{stat.percentage}%</span>
      </StatItem>))}
    </StatList>
  </Container>
} 

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })),
  title: PropTypes.string.isRequired
}