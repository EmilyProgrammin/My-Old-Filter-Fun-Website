var img;
var imgcanvas;
//loadImage() is finished
function loadImage() {
  imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  img = new SimpleImage(fileinput);
  img.drawTo(imgcanvas);
}
//doGray() is finished
function doGray() {
  for (var pixel of img.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  img.drawTo(imgcanvas);
}
//doRed() is finished
function doRed() {
  for (var pixel of img.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (avg < 128) {
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(2*avg - 255);
    }
  }
  img.drawTo(imgcanvas);
}
//reset() is finished
function reset() {
  imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  img = new SimpleImage(fileinput);
  img.drawTo(imgcanvas);
}
// swapRedGreen() is finished
function swapRedGreen() {
  for (var pixel of img.values()) {
    var newR = pixel.getGreen();
    var newG = pixel.getRed();
    pixel.setRed(newR);
    pixel.setGreen(newG);
  }
  img.drawTo(imgcanvas);
}
// doRainbow() is finished
function doRainbow() {
  for (var pixel of img.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var h = img.getHeight();
    var y = pixel.getY();
    if (y > 6 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      if (avg >= 128) {
        pixel.setRed(0.4*avg + 153);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg + 153);
      }
    }
    if (y > 5 * (h/7) && y < 6 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      if (avg >= 128) {
        pixel.setRed(1.2*avg - 51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > 4 * (h/7) && y < 5 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      if (avg >= 128) {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > 3 * (h/7) && y < 4 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if (y > 2 * (h/7) && y < 3 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if (y > (h/7) && y < 2 * (h/7)) {
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);
      }
    }
    if (y < (h/7)) {
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
  }
  img.drawTo(imgcanvas);
}

function doBlur() {
  for (var pixel of img.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var rx = x + Math.floor(Math.random() * 11);
    var ry = y +  Math.floor(Math.random() * 11);
    var rx1 = x -  Math.floor(Math.random() * 11);
    var ry1 = y -  Math.floor(Math.random() * 11);
    if (Math.random() > 0.5) {
      if (rx < img.getWidth() && ry < img.getHeight()) {
        img.setPixel(rx,ry,pixel);
      }
      else {
        if (rx > img.getWidth() && ry < img.getHeight()) {
          img.setPixel(rx1,ry,pixel);
        }
        if (rx < img.getWidth() && ry > img.getHeight()) {
          img.setPixel(rx,ry1,pixel);
        }
      }
    }
  }
  img.drawTo(imgcanvas);
}