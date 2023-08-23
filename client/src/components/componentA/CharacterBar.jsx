import React from 'react';

const CharacterBar = ({ progress, height }) => {

  const trianglePosition = `calc(${progress}% - 10px)`;
  console.log(trianglePosition)

  const Parentdiv = {
    position: 'relative', // Make the parent div position relative
    height: height,
    width: '60%',
    backgroundColor: '#f0ece2',
    // borderRadius: 40,
    margin: 15
  };

  const Triangle = {
    position: 'absolute', // Make the triangle position absolute
    top: 'calc(50% - 5px)', // Adjust top position to vertically center the triangle
    left: trianglePosition,
    width: 0,
    height: 0,
    borderTop: '14px solid black', // Make the border-top to create the upside-down triangle
    borderRight: '7px solid transparent',
    borderLeft: '7px solid transparent',
    zIndex: 1, // Ensure the triangle is above the progress bar
  };

  return (
    <>

    {/* <p>{trianglePosition}</p> */}

    <div style={Parentdiv}>
      <div style={Triangle}></div>
    </div>

    </>



  )
};

export default CharacterBar;