import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})

export class ParticlesComponent implements OnInit {

  id = "tsparticles";
  
  particlesOptions  = {
    particles: {
      number: {
        value: 8,
        density: {
          enable: true,
          value_area: 1959
        }
      },
      color: {
        value: '#fff58c'
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 0.5,
          color: "#FFFFFF"
        },
        polygon: {
          sides: 6,
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 80,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 40,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#FFFFFF",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 3,
        random: false,
        straight: false,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };
  


  constructor() { }

  ngOnInit(): void {
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
    
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
