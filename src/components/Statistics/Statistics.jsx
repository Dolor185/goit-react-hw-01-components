export default function Stats({props}){
    return <section>
    <h2>Upload stats</h2>
  
    <ul>
      {props.map(prop=>(
      <li key={prop.id} >
        <span>{prop.label}</span>
        <span>{prop.percentage}</span>
      </li>))}
    </ul>
  </section>
}