import React from 'react'

const Title = ({heading, title, theme}) => {
  if(heading === 'h4' && theme === 'light') return <h4 className='h4 text-center text-light'>{title}</h4>
  if(heading === 'h4' && theme === 'dark') return <h4 className='h4 text-center py-2' style={{
    backgroundColor: 'rgba(51,50,47,0.7)',
    color:'#fff'
  }}>{title}</h4>
  if(heading === 'h5' && theme === 'light') return <h5 className='h4 card-title'>{title}</h5>
}
export default Title