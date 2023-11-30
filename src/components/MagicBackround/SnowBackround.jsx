import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export const FireBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    return null;
  }, []);

  return (
    <Particles
      options={{
        particles: {
          color: { value: ['#ff0000', '#ff8c00', '#ffa500'] },
          number: { value: 40 }, // Зменшено кількість зірок
          opacity: { min: 0.3, max: 1 },
          shape: {
            type: 'star',
          },
          size: { value: { min: 1, max: 5 } },
          move: {
            direction: 'random',
            enable: true,
            speed: { min: 1, max: 3 },
            straight: false,
            outMode: 'bounce',
          },
        },
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
