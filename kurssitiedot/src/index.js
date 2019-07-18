import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = ( {parts} ) => {
  console.log(parts)
  return <div>
  {parts.map( part =>
    <Part key={part.id} part={part.name} exercises={part.exercises} />)}
  </div>
}

const Total = ( {parts} ) => {
  const reducer = (total, part) => total + part.exercises
  let tot = parts.reduce(reducer, 0)
  return (
    <div>
      <b>total of {tot} exercises</b>
    </div>
  )
}

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts ={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course = {course} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
