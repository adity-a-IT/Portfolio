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
        INTERVAL: 3000,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1.25, // Slower dissipation keeps colors deep, rich & visible
        VELOCITY_DISSIPATION: 0.98,
        PRESSURE: 0.85,
        PRESSURE_ITERATIONS: 22,
        CURL: 32,
        SPLAT_RADIUS: 0.38, // Wider, punchier splashes
        SPLAT_FORCE: 7500,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 14,
        PAUSED: false,
        TRANSPARENT: true,
        BLOOM: true, // Vivid luminous bloom for bold vibrancy
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.45,
        BLOOM_THRESHOLD: 0.4,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 0.35,
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
        className="w-full h-full block opacity-95 filter saturate-[1.75] contrast-[1.15]"
      />
    </div>
  );
};

export default FluidCanvas;
