ENCOG.namespace("ENCOG.GUI.Console");
ENCOG.namespace("ENCOG.GUI.CellGrid");
ENCOG.namespace("ENCOG.GUI.Drawing");
ENCOG.namespace("ENCOG.GUI.Agents2D");
ENCOG.namespace("ENCOG.GUI.TSP");
ENCOG.GUI.Console = function() {};
ENCOG.GUI.Console.prototype = {
  consoleDiv: {},
  textarea: {},
  name: "Console",
  write: function(a) {
    this.textarea.value += (a);
    this.textarea.scrollTop = this.textarea.scrollHeight
  },
  writeLine: function(a) {
    this.textarea.value += (a + "\n");
    this.textarea.scrollTop = this.textarea.scrollHeight
  },
  clear: function() {
    this.textarea.value = ""
  }
};
ENCOG.GUI.Console.create = function(b) {
  var a = new ENCOG.GUI.Console();
  a.consoleDiv = document.getElementById(b);
  a.consoleDiv.innerHTML = "<textarea></textarea>";
  a.textarea = a.consoleDiv.getElementsByTagName("textarea")[0];
  return a
};
ENCOG.GUI.CellGrid = function() {};
ENCOG.GUI.CellGrid.prototype = {
  canvas: null,
  drawingContext: null,
  canvasDiv: null,
  canvasWidth: null,
  canvasHeight: null,
  gridWidth: null,
  gridHeight: null,
  determineColor: null,
  pointerDown: null,
  pointerUp: null,
  pointerMove: null,
  pointerMode: 0,
  captureTouch: true,
  outline: false,
  NAME: "CellGrid",
  render: function() {
    var d, i, e, h, f, a, j;
    this.drawingContext.strokeStyle = "grey";
    for (i = 0; i < this.gridHeight; i += 1) {
      for (e = 0; e < this.gridWidth; e += 1) {
        this.drawingContext.fillStyle = this.determineColor(i, e);
        this.drawingContext.fillRect(e * this.pixW, i * this.pixH, this.pixW, this.pixH);
        if (this.outline) {
          this.drawingContext.strokeRect(e * this.pixW, i * this.pixH, this.pixW, this.pixW)
        }
      }
    }
    this.drawingContext.strokeStyle = "black"
  },
  ev_canvas: function(b) {
    var c, a;
    if (b.layerX || b.layerX == 0) {
      b._x = b.layerX;
      b._y = b.layerY
    } else {
      if (b.offsetX || b.offsetX == 0) {
        b._x = b.offsetX;
        b._y = b.offsetY
      }
    }
    switch (this.pointerMode) {
      case ENCOG.GUI.CellGrid.MODE_XY:
        c = b._y;
        a = b._x;
        break;
      case ENCOG.GUI.CellGrid.MODE_CELL:
        c = Math.floor(b._y / this.pixH);
        a = Math.floor(b._x / this.pixW);
        break;
      case ENCOG.GUI.CellGrid.MODE_PCT:
        c = b._y / this.canvas.height;
        a = b._x / this.canvas.width;
        break
    }
    if (b.type == "mousedown" || b.type == "touchstart") {
      if (this.pointerDown != null) {
        this.pointerDown(c, a)
      }
    } else {
      if (b.type == "mouseup" || b.type == "touchend") {
        if (this.pointerUp != null) {
          this.pointerUp(c, a)
        }
      } else {
        if (b.type == "mousemove" || b.type == "touchmove") {
          if (this.pointerMove != null) {
            this.pointerMove(c, a)
          }
          if (this.captureTouch && b.type == "touchmove") {
            b.preventDefault()
          }
        }
      }
    }
  },
  clear: function() {
    this.canvas.width = this.canvas.width
  }
};
ENCOG.GUI.CellGrid.MODE_XY = 0;
ENCOG.GUI.CellGrid.MODE_CELL = 1;
ENCOG.GUI.CellGrid.MODE_PCT = 2;
ENCOG.GUI.CellGrid.create = function(f, e, d, b, c) {
  var a = new ENCOG.GUI.CellGrid();
  a.canvasDiv = document.getElementById(f);
  a.canvasWidth = b;
  a.canvasHeight = c;
  a.gridWidth = e;
  a.gridHeight = d;
  a.canvasDiv.innerHTML = '<canvas width="' + b + '" height="' + c + '">Browser not supported.</canvas>';
  a.canvas = a.canvasDiv.getElementsByTagName("canvas")[0];
  a.drawingContext = a.canvas.getContext("2d");
  a.pixW = Math.floor(a.canvas.width / a.gridWidth);
  a.pixH = Math.floor(a.canvas.height / a.gridHeight);
  a.canvas.addEventListener("mousedown", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("mousemove", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("mouseup", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("touchstart", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("touchend", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("touchmove", function(g) {
    a.ev_canvas(g)
  }, true);
  a.canvas.addEventListener("mouseout", function(g) {
    a.ev_canvas(g)
  }, true);
  return a
};
ENCOG.GUI.Drawing = function() {};
ENCOG.GUI.Drawing.create = function(d, b, c) {
  var a = new ENCOG.GUI.Drawing();
  a.canvasDiv = document.getElementById(d);
  a.canvasWidth = b;
  a.canvasHeight = c;
  a.canvasDiv.innerHTML = '<canvas width="' + b + '" height="' + c + '">Browser not supported.</canvas>';
  a.canvas = a.canvasDiv.getElementsByTagName("canvas")[0];
  a.drawingContext = a.canvas.getContext("2d");
  a.canvas.addEventListener("mousedown", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mousemove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseup", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchstart", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchend", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchmove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseout", function(f) {
    a.ev_canvas(f)
  }, true);
  return a
};
ENCOG.GUI.Drawing.prototype = {
  canvas: null,
  drawingContext: null,
  canvasDiv: null,
  NAME: "Drawing",
  canvasWidth: null,
  canvasHeight: null,
  started: false,
  downsampleHeight: 8,
  downsampleWidth: 5,
  ev_canvas: function(a) {
    if (a.layerX || a.layerX == 0) {
      a._x = a.layerX;
      a._y = a.layerY
    } else {
      if (a.offsetX || a.offsetX == 0) {
        a._x = a.offsetX;
        a._y = a.offsetY
      }
    }
    if (a.type === "mousedown") {
      this.drawingContext.beginPath();
      this.drawingContext.moveTo(a._x, a._y);
      this.started = true
    } else {
      if (a.type === "mousemove") {
        if (this.started) {
          this.drawingContext.lineTo(a._x, a._y);
          this.drawingContext.stroke()
        }
      } else {
        if (a.type === "mouseup") {
          if (this.started) {
            this.drawingContext.lineTo(a._x, a._y);
            this.drawingContext.stroke();
            this.started = false
          }
        } else {
          if (a.type === "mouseout") {
            if (this.started) {
              this.drawingContext.lineTo(a._x, a._y);
              this.drawingContext.stroke();
              this.started = false
            }
          } else {
            if (a.type === "touchstart") {
              this.drawingContext.beginPath();
              this.drawingContext.moveTo(a._x, a._y);
              this.started = true
            } else {
              if (a.type === "touchend") {
                if (this.started) {
                  this.started = false
                }
              } else {
                if (a.type === "touchmove") {
                  if (this.started) {
                    this.drawingContext.lineTo(a._x, a._y);
                    this.drawingContext.stroke();
                    a.preventDefault()
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  isHLineClear: function(d) {
    var a = this.drawingContext.getImageData(0, d, this.canvas.width, 1);
    var c = a.data;
    for (var b = 0; b < c.length; b++) {
      if (c[b] > 0) {
        return false
      }
    }
    return true
  },
  isVLineClear: function(b) {
    var a = this.drawingContext.getImageData(b, 0, 1, this.canvas.height);
    var d = a.data;
    for (var c = 0; c < d.length; c++) {
      if (d[c] > 0) {
        return false
      }
    }
    return true
  },
  performDownSample: function() {
    var m, a, e, o, f, k, r, p, q, c, h, n, l, j, g, b;
    m = 0;
    while (this.isHLineClear(m) && m < this.canvas.height) {
      m++
    }
    a = this.canvas.height;
    while (this.isHLineClear(a) && a > 0) {
      a--
    }
    e = 0;
    while (this.isVLineClear(e) && e < this.canvas.width) {
      e++
    }
    o = this.canvas.width;
    while (this.isVLineClear(o) && o > 0) {
      o--
    }
    if (a < m) {
      r = ENCOG.ArrayUtil.allocate1D(this.downsampleHeight * this.downsampleWidth);
      ENCOG.ArrayUtil.fillArray(r, 0, r.length, -1);
      return r
    }
    f = (o - e) / this.downsampleWidth;
    k = (a - m) / this.downsampleHeight;
    r = new Array();
    p = 0;
    for (q = 0; q < this.downsampleHeight; q++) {
      for (c = 0; c < this.downsampleWidth; c++) {
        n = (f * c) + e;
        l = (k * q) + m;
        b = this.drawingContext.getImageData(n, l, f, k);
        h = b.data;
        j = false;
        for (g = 0; g < h.length; g++) {
          if (h[g] > 0) {
            j = true;
            break
          }
        }
        if (j) {
          r[p++] = 1
        } else {
          r[p++] = -1
        }
      }
    }
    return r
  },
  clear: function() {
    this.canvas.width = this.canvas.width
  }
};
ENCOG.GUI.Agents2D = function() {};
ENCOG.GUI.Agents2D.create = function(d, b, c) {
  var a = new ENCOG.GUI.Agents2D();
  a.canvasDiv = document.getElementById(d);
  a.canvasWidth = b;
  a.canvasHeight = c;
  a.canvasDiv.innerHTML = '<canvas width="' + b + '" height="' + c + '">Browser not supported.</canvas>';
  a.canvas = a.canvasDiv.getElementsByTagName("canvas")[0];
  a.drawingContext = a.canvas.getContext("2d");
  a.canvas.addEventListener("mousedown", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mousemove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseup", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchstart", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchend", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchmove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseout", function(f) {
    a.ev_canvas(f)
  }, true);
  return a
};
ENCOG.GUI.Agents2D.prototype = {
  canvas: null,
  drawingContext: null,
  canvasDiv: null,
  NAME: "Agents2D",
  canvasWidth: null,
  canvasHeight: null,
  agents: null,
  agentSize: 10,
  agentSpeed: 5,
  pointerDown: null,
  pointerUp: null,
  pointerMove: null,
  captureTouch: true,
  ev_canvas: function(a) {},
  reset: function(b) {
    this.agents = [];
    for (var a = 0; a < b; a++) {
      this.agents[a] = [Math.floor(Math.random() * this.canvas.width), Math.floor(Math.random() * this.canvas.height), Math.floor(Math.random() * 360)]
    }
    this.render()
  },
  advance: function() {
    var d, q, t, l, n, k, g, w, b, v, a, p, o, n, l, j, s, c;
    var h, f, m, e;
    for (var u = 0; u < this.agents.length; u++) {
      q = this.agents[u][2] * (Math.PI / 180);
      l = Math.cos(q);
      n = Math.sin(q);
      this.agents[u][0] += (n * this.agentSpeed);
      this.agents[u][1] += (l * this.agentSpeed);
      if (this.agents[u][0] < 0) {
        this.agents[u][0] = this.canvas.width
      } else {
        if (this.agents[u][0] > this.canvas.width) {
          this.agents[u][0] = 0
        }
      }
      if (this.agents[u][1] < 0) {
        this.agents[u][1] = this.canvas.height
      } else {
        if (this.agents[u][1] > this.canvas.height) {
          this.agents[u][1] = 0
        }
      }
    }
  },
  render: function() {
    var d, q, t, l, n, k, h, w, b, v, a, p, o, n, l, j, s, c, u;
    var g, f, m, e;
    this.canvas.width = this.canvas.width;
    for (u = 0; u < this.agents.length; u++) {
      k = this.agents[u][0];
      h = this.agents[u][1];
      q = (this.agents[u][2] + 180 - 15) * (Math.PI / 180);
      w = k + (Math.sin(q) * this.agentSize);
      b = h + (Math.cos(q) * this.agentSize);
      t = (this.agents[u][2] + 180 + 15) * (Math.PI / 180);
      v = k + (Math.sin(t) * this.agentSize);
      a = h + (Math.cos(t) * this.agentSize);
      this.drawingContext.strokeStyle = "#000000";
      this.drawingContext.beginPath();
      this.drawingContext.moveTo(w, b);
      this.drawingContext.lineTo(k, h);
      this.drawingContext.lineTo(v, a);
      this.drawingContext.closePath();
      this.drawingContext.stroke()
    }
  },
  plotGroup: function(a, g) {
    var c = this.agents[a][0];
    var f = this.agents[a][1];
    for (var e = 0; e < g.length; e++) {
      var b = g[e][0];
      var d = g[e][1];
      this.drawingContext.strokeStyle = "#f0f0f0";
      this.drawingContext.beginPath();
      this.drawingContext.moveTo(c, f);
      this.drawingContext.lineTo(b, d);
      this.drawingContext.closePath();
      this.drawingContext.stroke()
    }
  },
  ev_canvas: function(a) {
    if (a.layerX || a.layerX == 0) {
      a._x = a.layerX;
      a._y = a.layerY
    } else {
      if (a.offsetX || a.offsetX == 0) {
        a._x = a.offsetX;
        a._y = a.offsetY
      }
    }
    if (a.type == "mousedown" || a.type == "touchstart") {
      if (this.pointerDown != null) {
        this.pointerDown(a._x, a._y)
      }
    } else {
      if (a.type == "mouseup" || a.type == "touchend") {
        if (this.pointerUp != null) {
          this.pointerUp(a._x, a._y)
        }
      } else {
        if (a.type == "mousemove" || a.type == "touchmove") {
          if (this.pointerMove != null) {
            this.pointerMove(a._x, a._y)
          }
          if (this.captureTouch && a.type == "touchmove") {
            a.preventDefault()
          }
        }
      }
    }
  }
};
ENCOG.GUI.TSP = function() {};
ENCOG.GUI.TSP.create = function(d, b, c) {
  var a = new ENCOG.GUI.TSP();
  a.canvasDiv = document.getElementById(d);
  a.canvasWidth = b;
  a.canvasHeight = c;
  a.canvasDiv.innerHTML = '<canvas width="' + a.canvasWidth + '" height="' + a.canvasHeight + '">Browser not supported.</canvas>';
  a.canvas = a.canvasDiv.getElementsByTagName("canvas")[0];
  a.drawingContext = a.canvas.getContext("2d");
  a.canvas.addEventListener("mousedown", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mousemove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseup", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchstart", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchend", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("touchmove", function(f) {
    a.ev_canvas(f)
  }, true);
  a.canvas.addEventListener("mouseout", function(f) {
    a.ev_canvas(f)
  }, true);
  return a
};
ENCOG.GUI.TSP.prototype = {
  canvas: null,
  drawingContext: null,
  canvasDiv: null,
  NAME: "TSP",
  canvasWidth: null,
  canvasHeight: null,
  pointerDown: null,
  pointerUp: null,
  pointerMove: null,
  captureTouch: true,
  cities: null,
  currentPath: null,
  tspMargin: 10,
  ev_canvas: function(a) {},
  reset: function(b) {
    var d, c;
    this.cities = [];
    d = this.canvas.width - (this.tspMargin * 2);
    c = this.canvas.height - (this.tspMargin * 2);
    for (var a = 0; a < b; a++) {
      this.cities[a] = new Array(Math.floor(Math.random() * d) + this.tspMargin, Math.floor(Math.random() * c) + this.tspMargin)
    }
    this.currentPath = this.generatePath();
    this.render()
  },
  resetCircle: function(d) {
    this.cities = [];
    var c = (2 * Math.PI) / d;
    var f = this.canvas.width - (this.tspMargin * 2);
    var e = this.canvas.height - (this.tspMargin * 2);
    for (var b = 0; b < d; b++) {
      var a = Math.floor(Math.cos(c * b) * (f / 2) + (f / 2)) + this.tspMargin;
      var g = Math.floor(Math.sin(c * b) * (e / 2) + (e / 2)) + this.tspMargin;
      this.cities[b] = [a, g]
    }
    this.currentPath = this.generatePath();
    this.render()
  },
  pathDistance: function(c, b, a) {
    return this.distance(this.cities[c[b]], this.cities[c[a]])
  },
  distance: function(c, b) {
    var a = 0;
    for (var d = 0; d < c.length; d++) {
      var e = c[d] - b[d];
      a += e * e
    }
    return Math.sqrt(a)
  },
  calculatePathLength: function(c) {
    var a = 0;
    for (var b = 0; b < c.length - 1; b++) {
      a += this.distance(this.cities[c[b]], this.cities[c[b + 1]])
    }
    return a
  },
  generatePath: function() {
    var b = new Array(this.cities.length);
    var d = new Array(this.cities.length);
    for (var c = 0; c < this.cities.length; c++) {
      b[c] = false
    }
    for (var c = 0; c < this.cities.length - 1; c++) {
      var a;
      do {
        a = Math.floor(Math.random() * d.length)
      } while (b[a]);
      d[c] = a;
      b[a] = true;
      if (c == d.length - 2) {
        a = 0;
        while (b[a]) {
          a++
        }
        d[c + 1] = a
      }
    }
    return d
  },
  render: function() {
    this.canvas.width = this.canvas.width;
    for (var a = 0; a < this.cities.length; a++) {
      this.drawingContext.fillStyle = "#0000FF";
      this.drawingContext.beginPath();
      this.drawingContext.arc(this.cities[a][0], this.cities[a][1], 5, 0, Math.PI * 2, true);
      this.drawingContext.closePath();
      this.drawingContext.fill()
    }
    for (var a = 0; a < this.cities.length - 1; a++) {
      this.drawingContext.strokeStyle = "#000000";
      this.drawingContext.beginPath();
      this.drawingContext.moveTo(this.cities[this.currentPath[a]][0], this.cities[this.currentPath[a]][1]);
      this.drawingContext.lineTo(this.cities[this.currentPath[a + 1]][0], this.cities[this.currentPath[a + 1]][1]);
      this.drawingContext.closePath();
      this.drawingContext.stroke()
    }
  },
  ev_canvas: function(a) {
    if (a.layerX || a.layerX == 0) {
      a._x = a.layerX;
      a._y = a.layerY
    } else {
      if (a.offsetX || a.offsetX == 0) {
        a._x = a.offsetX;
        a._y = a.offsetY
      }
    }
    if (a.type == "mousedown" || a.type == "touchstart") {
      if (this.pointerDown != null) {
        this.pointerDown(a._x, a._y)
      }
    } else {
      if (a.type == "mouseup" || a.type == "touchend") {
        if (this.pointerUp != null) {
          this.pointerUp(a._x, a._y)
        }
      } else {
        if (a.type == "mousemove" || a.type == "touchmove") {
          if (this.pointerMove != null) {
            this.pointerMove(a._x, a._y)
          }
          if (this.captureTouch && a.type == "touchmove") {
            a.preventDefault()
          }
        }
      }
    }
  }
};