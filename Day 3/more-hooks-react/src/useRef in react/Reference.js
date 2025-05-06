import React,{useRef} from 'react'

function Reference() {
  let Ref = useRef(null);
  function HandleInput(){
    console.log('function call');
    Ref.current.style.color='red'
  }
  function BGChange(){
    Ref.current.style.backgroundColor='yellow'
  }
  return (
    <>
    <h2>useRef</h2>
    <input type="text" placeholder='Enter your name' ref={Ref} />
    <button onClick={HandleInput}>Change Color</button>
    <button onClick={BGChange}>Change BG Color</button>
    </>
  )
}

export default Reference;