import React from 'react';

const ReviewBar = ({bgcolor,progress,height}) => {

    const Parentdiv = {
      height: height,
      width: '15%',
      backgroundColor: 'whitesmoke',
      // borderRadius: 40,
      margin: 30
    }

    const Childdiv = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      // borderRadius:40,
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