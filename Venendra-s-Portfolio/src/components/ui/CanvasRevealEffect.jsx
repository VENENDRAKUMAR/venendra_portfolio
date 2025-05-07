import React, { useRef, useEffect } from 'react';

const CanvasRevealEffect = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const handleContextLost = (event) => {
            event.preventDefault();
            alert('WebGL context lost. Please reload the page.');
        };

        canvas.addEventListener('webglcontextlost', handleContextLost);

        return () => {
            canvas.removeEventListener('webglcontextlost', handleContextLost);
        };
    }, []);

    // Setup your WebGL renderer, shaders, etc.

    return (
        <canvas ref={canvasRef} {...props}></canvas>
    );
};

export default CanvasRevealEffect; 