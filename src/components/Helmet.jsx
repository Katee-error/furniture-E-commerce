import React from 'react'

const Helmet = (props) => {

document.title =' Maltimart -' + props.title // использование названия страницы для перехода 
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet
