import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [isMobile] = useState(window.innerWidth < 768);

  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: isMobile ? 60 : 120,
    interactivity: {
      events: {
        onClick: {
          enable: !isMobile,
          mode: "push",
        },
        onHover: {
          enable: !isMobile,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.8
          }
        },
      },
    },
    particles: {
      color: {
        value: "#67e8f9", // cyan-300
      },
      links: {
        color: "#a5f3fc", // cyan-200
        distance: 150,
        enable: true,
        opacity: isMobile ? 0.2 : 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: isMobile ? 0.8 : 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isMobile ? 40 : 100,
      },
      opacity: {
        value: isMobile ? 0.3 : 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: isMobile ? { min: 1, max: 2 } : { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "auto",
        }}
      />
    );
  }

  return <></>;
};
