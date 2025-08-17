import React, { memo } from "react";

const XploarPhase1 = memo(() => {
  return (
    <div style={{
      padding: '50px',
      backgroundColor: 'red',
      color: 'white',
      textAlign: 'center',
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1>🎯 UPSC PHASE 1 - WORKING!</h1>
      <p>If you see this red background, the component is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => alert('Button clicked!')}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: 'white',
            color: 'red',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Button
        </button>
      </div>
    </div>
  );
});

XploarPhase1.displayName = 'XploarPhase1';

export default XploarPhase1;
