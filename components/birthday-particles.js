import React from 'react';
import Particles from 'react-particles';
import birthdayParticlesConfig from './config/birthday-particles-config';
import { loadFull } from 'tsparticles';

const BirthdayParticlesBackground = () => {
    const particlesInit = async (main) => {
        // console.log({main});
        await loadFull(main);
    };
    // const particlesLoaded = (container) => {
    //     console.log({container});
    // };
    return (
        <Particles
            options={birthdayParticlesConfig}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            init={particlesInit}
			// loaded={particlesLoaded}
        />
    );
};

export default BirthdayParticlesBackground;
