// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Hero.css";
import profile_1 from "../../assets/profile_1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fireworks = [];
    const particlesPerFirework = 100;
    const colors = [
      "#FF5733",
      "#FFC300",
      "#DAF7A6",
      "#C70039",
      "#581845",
      "#36C7F4",
    ];

    class Particle {
      constructor(x, y, color, angle, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = angle;
        this.speed = speed;
        this.alpha = 1;
        this.gravity = 0.02;
        this.friction = 0.98;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= 0.02;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        const rgb = baseColor.match(/\w\w/g).map((hex) => parseInt(hex, 16));
        for (let i = 0; i < particlesPerFirework; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 3 + 2;
          const color = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
          this.particles.push(new Particle(x, y, color, angle, speed));
        }
      }

      update() {
        this.particles.forEach((particle, index) => {
          particle.update();
          if (particle.alpha <= 0) {
            this.particles.splice(index, 1);
          }
        });
      }

      draw() {
        this.particles.forEach((particle) => particle.draw());
      }
    }

    const createFirework = (x, y) => {
      fireworks.push(new Firework(x, y));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.particles.length === 0) {
          fireworks.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("click", (e) => {
      createFirework(e.clientX, e.clientY);
    });

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div id="home" className="hero">
      <img src={profile_1} alt="Profile" className="profile-img" />
      <h1
        className="gradient-text"
        style={{
          background:
            "linear-gradient(to right, lch(41 80 290), lch(81 104 150))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        I'm Shivam Shashank,
        <span
          style={{
            background:
              "linear-gradient(to right, color(display-p3 34% 58% 73%), color(display-p3 50% 90% 50%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          a frontend
        </span>
        <span
          style={{
            background:
              "linear-gradient(to right, color(display-p3 34% 58% 73%), color(display-p3 50% 90% 50%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          developer based in Patna, India.
        </span>
      </h1>
      <p style={{ color: "#424242" }}>
        "I am a recent graduate with a deep passion for web development and a
        strong foundation in both frontend and backend technologies. I am
        excited to leverage my skills in HTML, CSS, JavaScript, React.js,
        Next.js, Express, MongoDB, and Firebase to build dynamic, responsive,
        and user-friendly web applications. My focus is on creating seamless,
        interactive experiences that adapt to users' needs."
      </p>
      <div className="hero-action flex gap-4 mt-8">
        <AnchorLink className="btn" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a
          href="/cv11.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
