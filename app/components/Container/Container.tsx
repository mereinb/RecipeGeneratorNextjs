import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='box-border h-50 max-w-lg p-9 bg-white border-gray-500 rounded-lg shadow-lg hover:scale-105'>
      {children}
    </div>
  )
}

export default Container
