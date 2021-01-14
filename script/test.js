// Animation code for the univerce
// Solar system animation from MDN Web Docs
// With my code adjustments
function init() {
    window.requestAnimationFrame(draw);
  }
  
  function draw() {
    var cnt = document.getElementById("world");
    cnt.setAttribute("width", "300px");
    cnt.setAttribute("height", "300px"); 
    var ctx = document.getElementById('world').getContext('2d');
    var time = new Date();
  
    var sun = document.createElement("img");
  sun.setAttribute("src", "images/Canvas_sun.png");
  var moon = document.createElement("img");
  moon.setAttribute("src", "images/Canvas_moon.png");
  var earth = document.createElement("img");
  earth.setAttribute("src", "images/Canvas_earth.png");
  
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas
  
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);
  // Earth code
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);
  // Moon code
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
  
    ctx.restore();
  
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
  
  
    ctx.drawImage(sun, 0, 0, 300, 300);
  
    window.requestAnimationFrame(draw);
  
  }
  init();
  