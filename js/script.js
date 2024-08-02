document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 150, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800 // Area where particles are distributed
        }
      },
      "color": {
        "value": "#ffffff" // Color of particles
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5, // Opacity of particles
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1, // Size of particles
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true, // Draw lines between particles
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5, // Speed of particles
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" // Interaction on hover
        },
        "onclick": {
          "enable": true,
          "mode": "bubble" // Interaction on click
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 5,
          "duration": 0.8,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-effect');
    const text = "Hey, I'm Karan!";
    let isTyping = false;
    
    function typeText() {
      if (isTyping) return;
      isTyping = true;

      typingElement.classList.remove('typing-effect'); // Reset animation
      void typingElement.offsetWidth; // Trigger reflow to restart animation
      typingElement.classList.add('typing-effect'); // Restart animation

      typingElement.textContent = ""; // Clear existing text
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          isTyping = false;
        }
      }, 200); // Adjust typing speed (200ms per character)
    }

    setInterval(typeText, 12000); // Loop every 6 seconds
    typeText(); // Initial call
  });


  document.addEventListener('DOMContentLoaded', function() {
    const rocketWidget = document.getElementById('resume-download');
    const rocketImage = rocketWidget.querySelector('.rocket-image');
  
    if (rocketWidget && rocketImage) {
        console.log('Rocket widget and image found!');
        rocketWidget.addEventListener('click', function() {
          console.log('Rocket widget clicked!');
          
          // Temporarily set position to absolute for free movement
          rocketImage.style.position = 'absolute';
          rocketImage.style.top = rocketImage.offsetTop + 'px';
          rocketImage.style.left = rocketImage.offsetLeft + 'px';
    
          // Animate rocket image to "fly" to the top-right corner
          setTimeout(() => {
            rocketImage.style.transform = 'translate(100vw, -100vh) scale(0.1)';
          }, 0);
        // Start download after animation
        setTimeout(function() {
          console.log('Initiating download...');
          rocketImage.style.transform = 'none'; // Reset position (optional)
        window.location.href = 'https://github.com/kxraan/kxraan.github.io/blob/main/Resume%20-%20Karan%20Agarwal.pdf'; // Replace with your resume file path


      }, 1000); // Wait for the animation to complete
    });
}else{
    console.log("Not found!");
}
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Rocket animation (as above)
    
    // Navigation for other tabs
    document.getElementById('projects').addEventListener('click', function() {
      window.location.href = 'projects.html'; // Replace with actual link
    });
  
    document.getElementById('experiences').addEventListener('click', function() {
      window.location.href = 'experience.html'; // Replace with actual link
    });
  
    document.getElementById('socials').addEventListener('click', function() {
      window.location.href = 'socials.html'; // Replace with actual link
    });
  });
  
  