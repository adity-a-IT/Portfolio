import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

interface FluidCanvasProps {
  className?: string;
}

export const FluidCanvas: React.FC<FluidCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: true,
        INTERVAL: 3500,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2.8, // Clean, graceful dissipation for light background
        VELOCITY_DISSIPATION: 0.98,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.28,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 12,
        PAUSED: false,
        TRANSPARENT: true,
        BLOOM: false, // Bloom off keeps pastel light colors ultra clean
        SUNRAYS: false,
      });
    } catch (err) {
      console.warn('WebGL Fluid initialization skipped or not supported:', err);
      return;
    }

    // Forward global window mouse and touch movement to the canvas
    // so user can interact across the entire viewport while UI stays clickable.
    // Important: check e.isTrusted and set bubbles: false to avoid infinite call stack recursion.
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return;
      try {
        const synthetic = new MouseEvent('mousemove', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: false,
          cancelable: true,
        });
        Object.defineProperty(synthetic, 'offsetX', { value: e.clientX, configurable: true });
        Object.defineProperty(synthetic, 'offsetY', { value: e.clientY, configurable: true });
        canvas.dispatchEvent(synthetic);
      } catch {
        // Fallback silently if browser restricts synthetic property definition
      }
    };

    const handleGlobalMouseDown = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return;
      try {
        const synthetic = new MouseEvent('mousedown', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: false,
          cancelable: true,
        });
        Object.defineProperty(synthetic, 'offsetX', { value: e.clientX, configurable: true });
        Object.defineProperty(synthetic, 'offsetY', { value: e.clientY, configurable: true });
        canvas.dispatchEvent(synthetic);
      } catch {
        // Fallback silently
      }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || !e.touches || e.touches.length === 0) return;
      try {
        const touch = e.touches[0];
        const synthetic = new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
          bubbles: false,
          cancelable: true,
        });
        Object.defineProperty(synthetic, 'offsetX', { value: touch.clientX, configurable: true });
        Object.defineProperty(synthetic, 'offsetY', { value: touch.clientY, configurable: true });
        canvas.dispatchEvent(synthetic);
      } catch {
        // Fallback silently
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('mousedown', handleGlobalMouseDown, { passive: true });
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mousedown', handleGlobalMouseDown);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        id="fluid"
        className="w-full h-full block opacity-75 mix-blend-multiply"
      />
    </div>
  );
};

export default FluidCanvas;
