import React from 'react'

function Loader({show}) {

    if(!show){
        return <></>
    }

  return (
    <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        background: '#7400aa',
        right: 0,
        bottom: 0,
        zIndex: 9999,
        overflow: 'hidden',
        }}>
       
      <img src={'/loading.png'} alt="Loading" height={100} width={100} style={{
          animation: 'spin 2s linear infinite',
        }} />
    </div>
    )
}

export default Loader
