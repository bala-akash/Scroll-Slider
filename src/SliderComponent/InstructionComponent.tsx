import React from 'react'

export const InstructionComponent = () => {
  const  instruction='instruction1'
  const instruction1='instruction2'
  return (
    <div><h1>InstructionSet</h1>
          <pre style={{border:'1px solid white', height:'500px' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25%'}}>{instruction}</pre>
          <pre style={{border:'1px solid white', height:'500px' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25%'}}>{instruction1}</pre>

    </div>
  )
}
