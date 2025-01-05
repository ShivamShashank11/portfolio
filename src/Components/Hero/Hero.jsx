import React, { useEffect } from "react";
import "./Hero.css";
import profile_1 from "../../assets/profile_1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  useEffect(() => {
    const bits = 80;
    const speed = 45;
    const bangs = 5;
    const colours = ["#03f", "#f03", "#0e0", "#93f", "#0cf", "#f93", "#f0c"];
    let bangheight = [];
    let intensity = [];
    let colour = [];
    let Xpos = [];
    let Ypos = [];
    let dX = [];
    let dY = [];
    let stars = [];
    let decay = [];
    let swide = window.innerWidth || 800;
    let shigh = window.innerHeight || 600;
    let boddie;

    // Create the container for fireworks
    function createFireworks() {
      if (document.getElementById) {
        boddie = document.createElement("div");
        boddie.style.position = "fixed";
        boddie.style.top = "0px";
        boddie.style.left = "0px";
        boddie.style.overflow = "visible";
        boddie.style.width = "1px";
        boddie.style.height = "1px";
        boddie.style.backgroundColor = "transparent";
        document.body.appendChild(boddie);
        set_width();
        for (let i = 0; i < bangs; i++) {
          write_fire(i);
          launch(i);
          setInterval(() => stepthrough(i), speed);
        }
      }
    }

    function write_fire(N) {
      stars[N + "r"] = createDiv("|", 12);
      boddie.appendChild(stars[N + "r"]);
      for (let i = bits * N; i < bits + bits * N; i++) {
        stars[i] = createDiv("*", 13);
        boddie.appendChild(stars[i]);
      }
    }

    function createDiv(char, size) {
      const div = document.createElement("div");
      div.style.font = `${size}px monospace`;
      div.style.position = "absolute";
      div.style.backgroundColor = "transparent";
      div.appendChild(document.createTextNode(char));
      return div;
    }

    function launch(N) {
      colour[N] = Math.floor(Math.random() * colours.length);
      Xpos[N + "r"] = swide * 0.5;
      Ypos[N + "r"] = shigh - 5;
      bangheight[N] = Math.round((0.5 + Math.random()) * shigh * 0.4);
      dX[N + "r"] = ((Math.random() - 0.5) * swide) / bangheight[N];
      if (dX[N + "r"] > 1.25) stars[N + "r"].firstChild.nodeValue = "/";
      else if (dX[N + "r"] < -1.25) stars[N + "r"].firstChild.nodeValue = "\\";
      else stars[N + "r"].firstChild.nodeValue = "|";
      stars[N + "r"].style.color = colours[colour[N]];
    }

    function bang(N) {
      let A = 0;
      for (let i = bits * N; i < bits + bits * N; i++) {
        const Z = stars[i].style;
        Z.left = Xpos[i] + "px";
        Z.top = Ypos[i] + "px";
        if (decay[i]) decay[i]--;
        else A++;
        if (decay[i] === 15) Z.fontSize = "7px";
        else if (decay[i] === 7) Z.fontSize = "2px";
        else if (decay[i] === 1) Z.visibility = "hidden";
        if (decay[i] > 1 && Math.random() < 0.1) {
          Z.visibility = "hidden";
          setTimeout(() => {
            stars[i].style.visibility = "visible";
          }, speed - 1);
        }
        Xpos[i] += dX[i];
        Ypos[i] += dY[i] += 1.25 / intensity[N];
      }
      if (A !== bits) setTimeout(() => bang(N), speed);
    }

    function stepthrough(N) {
      const oldx = Xpos[N + "r"];
      const oldy = Ypos[N + "r"];
      Xpos[N + "r"] += dX[N + "r"];
      Ypos[N + "r"] -= 4;
      if (Ypos[N + "r"] < bangheight[N]) {
        const M = Math.floor(Math.random() * 3 * colours.length);
        intensity[N] = 5 + Math.random() * 4;
        for (let i = N * bits; i < bits + bits * N; i++) {
          Xpos[i] = Xpos[N + "r"];
          Ypos[i] = Ypos[N + "r"];
          dY[i] = (Math.random() - 0.5) * intensity[N];
          dX[i] =
            (Math.random() - 0.5) * (intensity[N] - Math.abs(dY[i])) * 1.25;
          decay[i] = 16 + Math.floor(Math.random() * 16); // Ensure all particles have decay time
          const Z = stars[i];
          if (M < colours.length)
            Z.style.color = colours[i % 2 ? colour[N] : M];
          else if (M < 2 * colours.length) Z.style.color = colours[colour[N]];
          else Z.style.color = colours[i % colours.length];
          Z.style.fontSize = "13px";
          Z.style.visibility = "visible";
        }
        bang(N);
        launch(N);
      }
      stars[N + "r"].style.left = oldx + "px";
      stars[N + "r"].style.top = oldy + "px";
    }

    window.onresize = set_width;

    function set_width() {
      let sw_min = 999999;
      let sh_min = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0)
          sw_min = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0)
          sh_min = document.documentElement.clientHeight;
      }
      if (typeof self.innerWidth !== "undefined" && self.innerWidth) {
        if (self.innerWidth > 0 && self.innerWidth < sw_min)
          sw_min = self.innerWidth;
        if (self.innerHeight > 0 && self.innerHeight < sh_min)
          sh_min = self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min)
          sw_min = document.body.clientWidth;
        if (
          document.body.clientHeight > 0 &&
          document.body.clientHeight < sh_min
        )
          sh_min = document.body.clientHeight;
      }
      if (sw_min === 999999 || sh_min === 999999) {
        sw_min = 800;
        sh_min = 600;
      }
      swide = sw_min;
      shigh = sh_min;
    }

    // Start fireworks
    createFireworks();
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
