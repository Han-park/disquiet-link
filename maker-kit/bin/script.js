console.clear();

const c = document.getElementById('canvas');
const gct = c.getContext('2d');



var col = function(x, y, r, g, b) {
  gct.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  gct.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(5 + 100 * Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(20 + 10 * Math.sin( (x*x*Math.cos(t/3)+y*y*Math.sin(t/2))/1100 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(10 + 45*Math.sin( 5*Math.sin(t/10) + ((x-200)*(x-200)+(y-200)*(y-200))/2000) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.015;
  window.requestAnimationFrame(run);
}

run();






