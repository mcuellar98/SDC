import React from 'react';

const ReviewBar = ({bgcolor,progress,height}) => {

    const Parentdiv = {
      height: height,
      width: '50%',
      backgroundColor: '#f0ece2',
      // borderRadius: 10,
      margin: 10
    }

    const Childdiv = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      // borderRadius:20,
      textAlign: 'right'
    }

  return (
  <div style={Parentdiv}>
    <div style={Childdiv}>
    </div>
  </div>
  )
}

export default ReviewBar;