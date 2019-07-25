import React from 'react';

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

export default Course