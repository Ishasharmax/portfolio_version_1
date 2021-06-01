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
                "value": 500,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
//                "value":"#ff441f"
                "value": "#FAE5D3"
//                "value":"#E7EEFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }

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
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 400,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 0.8
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "attract": {
                    "enable": true,
                    "rotateX": 400,
                    "rotateY": 20
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 25,
                    "duration": 20,
                    "opacity": 0.6,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100
                },
                "push": {
                    "particles_nb": 1
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        }

    }

);
