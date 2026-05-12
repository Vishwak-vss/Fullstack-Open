
const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}
const Footer = (props) => {
  return(
    <div>
      Total number of Exercises = {props.var1 + props.var2 + props.var3}
    </div>
  )
}
const App = () => {
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header name={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Footer var1={exercises1} var2={exercises2} var3={exercises3} />
    </div>
  )
}

export default App;