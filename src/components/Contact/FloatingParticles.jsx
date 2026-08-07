import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const FloatingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#facc15",
          },

          links: {
            enable: true,
            color: "#facc15",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 2,
              max: 5,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            onClick: {
              enable: true,
              mode: "push",
            },

            resize: {
              enable: true,
            },
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.6,
              },
            },

            push: {
              quantity: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default FloatingParticles;
