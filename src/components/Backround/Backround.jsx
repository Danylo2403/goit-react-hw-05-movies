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
          number: { value: 20 }, // Зменшено кількість зірок
          opacity: { min: 0.3, max: 1 },
          shape: {
            type: 'star',
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          move: {
            direction: 'random',
            enable: true,
            speed: { min: 1, max: 3 },
            straight: false,
            outMode: 'bounce',
          },
          line_linked: {
            enable: true,
            distance: 150, // Відстань ліній від зірок
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4,
              },
            },
          },
        },
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
