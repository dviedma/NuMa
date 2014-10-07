ENCOG.namespace("ENCOG.GUI.CellGrid");
ENCOG.namespace("ENCOG.GUI.Drawing");


/**
 * Cell Grid
 * @constructor
 */
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


/**
 * Drawing Canvas
 * @constructor
 */
ENCOG.GUI.Drawing = function() {};
ENCOG.GUI.Drawing.create = function(d, b, c) {
  var a = new ENCOG.GUI.Drawing();
  a.canvasDiv = document.getElementById(d);
  a.canvasWidth = b;
  a.canvasHeight = c;
  a.canvasDiv.innerHTML = '<canvas width="' + b + '" height="' + c + '">Browser not supported.</canvas>';
  a.canvas = a.canvasDiv.getElementsByTagName("canvas")[0];
  a.drawingContext = a.canvas.getContext("2d");

  /**
   * Load Image
   */
  var digitImage = new Image();
  digitImage.src = 'img/test_six_4.png';
  console.log("load image");
  digitImage.onload = function(){
    console.log()
    a.drawingContext.drawImage(digitImage, 0, 0);
    console.log("image loaded");
  }

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
    var m, a, e, o, sw, sh, resultArray, p, q, c, h, sx, sy, j, g, b;

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
      resultArray = ENCOG.ArrayUtil.allocate1D(this.downsampleHeight * this.downsampleWidth);
      ENCOG.ArrayUtil.fillArray(resultArray, 0, resultArray.length, -1);
      return resultArray
    }

    sw = (o - e) / this.downsampleWidth;
    sh = (a - m) / this.downsampleHeight;
    resultArray = new Array();
    p = 0;

    for (q = 0; q < this.downsampleHeight; q++) {
      for (c = 0; c < this.downsampleWidth; c++) {
        sx = (sw * c) + e;
        sy = (sh * q) + m;
        b = this.drawingContext.getImageData(sx, sy, sw, sh);
        h = b.data;
        j = false;
        for (g = 0; g < h.length; g++) {
          if (h[g] > 0) {
            j = true;
            break
          }
        }
        if (j) {
          resultArray[p++] = 1
        } else {
          resultArray[p++] = -1
        }
      }
    }
    return resultArray
  },
  clear: function() {
    this.canvas.width = this.canvas.width
  }
};
