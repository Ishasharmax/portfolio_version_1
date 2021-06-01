/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 600,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FAE5D3"
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 8,
                    "opacity_min": 0.1,
                    "sync": true
                }
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 3,
                    "sync": false
                }
            },

            "move": {
                "enable": true,
                "speed": 2,
                "direction": "bottom",
                "random": true,
                "straight": true,
                "out_mode": "bounce",
                "attract": {
                    "enable": false,
                    "rotateX": 400,
                    "rotateY": 200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 40
                }
            }
        }

    }

);
