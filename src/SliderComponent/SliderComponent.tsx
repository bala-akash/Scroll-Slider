import React from 'react'
import { InstructionComponent } from './InstructionComponent'
import { SnippetSection } from './SnippetSection'

export const SliderComponent = () => {
  return (
    <>
    <div style={{height:"100vh", display:'flex' , justifyContent:'space-around', alignContent:'center',padding:'10px'}}>
    <div style={{display:'flex', justifyContent:'space-evenly',height:'100vh'}}>
        <div style={{width:'50vw',marginRight:'5px',marginLeft:'5px'}}>
    <SnippetSection/></div></div>
    <div style={{height:"100vh", display:'flex' , justifyContent:'space-around', alignContent:'center'}}>
    <div style={{width:'50vw', marginLeft:'5px'}} >
    <InstructionComponent/></div>
    </div></div>
    </>
  )
}

/** */