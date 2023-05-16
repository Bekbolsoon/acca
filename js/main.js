/* let canvasList = [];
const canvasFirstScreen = document.getElementById("first-screen__canvas");
canvasList.push(canvasFirstScreen);

canvasList.forEach((canvas) => {
  const vertexShader = `#version 300 es
  in vec2 position;
  void main() {
	  gl_Position = vec4(position, 0, 1);
  }`;

  const fShader = `#version 300 es
	precision highp float;
	uniform vec2 u_resolution;
	uniform float toggle, u_time;
	out vec4 final;

	float plot(vec2 st){
					return smoothstep(.5,1.358,abs(st.y+st.y));
				
			}
			
			void main(){
			
					vec3 colorA=vec3(1.0, 1.0, 1.0);
					vec3 colorB=vec3(.7725,.9176,.9137);
					vec3 colorC=vec3(cos(u_time*.0002),.8,.46);
					vec2 st=gl_FragCoord.xy/u_resolution;
					float y=st.x;
					
					vec3 color=vec3(0.,0.,0.);
					vec3 color2=vec3(0);
					
					// colorC = mix(vec3(0.529,0.808,0.922),vec3(1.0),cos(u_time*.0002));
					// colorB = mix(vec3(1.0),vec3(0.271,0.4,0.878),sin(u_time*.0002));
					
					color=mix(colorA,colorB,colorC-y);
					color2=mix(colorB,colorC,sin(u_time*.0002)*y);
					
					float pct=plot(st);
					color=(1.-pct)*color+pct*vec3(color2);
					
					final=vec4(color,1.);}
	`;

  const createShader = (str, type) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, str);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      return false;
    }
    return s;
  };

  const createProgram = (vstr, fstr) => {
    const p = gl.createProgram();
    gl.attachShader(p, createShader(vstr, gl.VERTEX_SHADER));
    gl.attachShader(p, createShader(fstr, gl.FRAGMENT_SHADER));
    gl.linkProgram(p);
    return p;
  };

  const linkProgram = (p) => {
    gl.attachShader(p, createShader(p.vshaderSource, gl.VERTEX_SHADER));
    gl.attachShader(p, createShader(p.fshaderSource, gl.FRAGMENT_SHADER));
    gl.linkProgram(p);
  };

  const gl = canvas.getContext("webgl2", {
    alpha: false,
    preserveDrawingBuffer: true,
  });
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  const q = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  gl.bufferData(gl.ARRAY_BUFFER, q, gl.STATIC_DRAW);

  const p = createProgram(vertexShader, fShader);
  p.pos = gl.getAttribLocation(p, "position");
  p.res = gl.getUniformLocation(p, "u_resolution");
  p.time = gl.getUniformLocation(p, "u_time");
  gl.enableVertexAttribArray(p.pos);
  gl.vertexAttribPointer(p.pos, 2, gl.FLOAT, false, 0, 0);
  gl.useProgram(p);

  const tick = (time) => {
    gl.uniform1f(p.time, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(tick);
  };

  const dpr = window.devicePixelRatio || 1;
  const last = { width: 0, height: 0 };
  let w, h, rect;

  const isDifferent = (a, b) => a.width != b.width || a.height != b.height;
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      rect = entry.contentRect;
      if (isDifferent(last, rect)) {
        last.width = rect.width;
        last.height = rect.height;
        w = Math.floor(rect.width * dpr);
        h = Math.floor(rect.height * dpr);
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(p.res, w, h);
      }
    }
  });

  resizeObserver.observe(document.documentElement);

  tick(0);
});

const fullscreen = (event) => {
  const d = document.documentElement;
  if (d.requestFullscreen) {
    d.requestFullscreen();
  } else if (d.webkitRequestFullScreen) {
    d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }
};

document.body.addEventListener("dblclick", fullscreen);

const keyHandler = (event) => {
  if (event.key === "f") {
    fullscreen();
  }
};
document.addEventListener("keypress", keyHandler);
 */