import React from 'react'

const  Spinner = () => { //Functional components are simple JavaScript functions that return JSX, which describes what should be rendered to the DOM.(Spinner)
  return (
    <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div>
  )
}

export default Spinner