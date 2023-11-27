import React from 'react';
import Particles from 'react-particles';
import particlesConfig from './config/particles-config';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log({main});
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log({container});
    };
    return (
        <Particles
            options={particlesConfig}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            init={particlesInit}
			loaded={particlesLoaded}
        />
    );
};

export default ParticlesBackground;
