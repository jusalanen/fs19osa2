import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
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

const Curriculum = ( {courses} ) => {
  return (
  <div>
    {courses.map( course => 
      <Course key={course.name} course={course} />
    )}
  </div>
  )
}

const App = () => {
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Curriculum courses = {courses} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
