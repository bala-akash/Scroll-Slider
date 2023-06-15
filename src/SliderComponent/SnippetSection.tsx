import React from 'react';

export const SnippetSection = () => {
 const snippet=`<html></html>`
 const snippet1=`<!DOCTYPE html>`
  return (
    <div>
      <h1>SnippetSection</h1>
      <pre style={{border:'1px solid white', height:'500px' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25%'}}>{snippet}</pre>
      <pre style={{border:'1px solid white', height:'500px' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25%'}}>{snippet1}</pre>

    </div>
  );
};
