import React from 'react';
import spinner from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <img src={spinner} alt='Loading...' style={{width:'300px',margin:'auto',display:'block'}} />
  )
}

export default Spinner