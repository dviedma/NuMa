var canvas = document.getElementById('viewport'),
    ctx = canvas.getContext('2d'),
    imgWidth = 18,
    imgHeight = 20,
    imgData,
    imgDataBW,
    imgDataSerialized = [],  //[0, 1, 0, 1, 1, 1, 0 , 0]
    imgDataMatrix = [],
    comparisonMatricesArray = [],
    estimatedNumber = 0;

make_base();

/**
 * Convert to B/W
 * @param imgData
 * @returns {*}
 */
function convertToBW(imgData) {
  var j = 0;
  for (var i=0;i<imgData.data.length;i+=4)
  {
    if((imgData.data[i] + imgData.data[i+1] + imgData.data[i+2])/3 < 250) {
      imgData.data[i]=0;
      imgData.data[i+1]=0;
      imgData.data[i+2]=0;

      imgDataSerialized.push(1);
    } else {
      imgData.data[i]=255;
      imgData.data[i+1]=255;
      imgData.data[i+2]=255;

      imgDataSerialized.push(0);
    }
    imgData.data[i+3]=255;
  }
  return imgData;
}

/**
 * List to matrix function
 * @param list
 * @param elementsPerSubArray
 * @returns {Array}
 */
function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

/**
 * Compare matrices
 */
function compareMatrices(imgDataMatrix) {
  var matrixUser = math.matrix(imgDataMatrix),
      matrixDigit,
      comparisonMatrices = [],
      compareMatrix,
      count = 0;

  for(var n=0; n<patterns.length; n++) {
    matrixDigit = math.matrix(patterns[n]);
    matrixDigit = math.multiply(matrixDigit, -1);

    compareMatrix = math.add(matrixUser, matrixDigit);

    var cum = compareMatrix.map(function (value, index, compareMatrix) {
      count +=  Math.abs(value);
    });

    comparisonMatrices[n] = count;

    count = 0;
  }

  return comparisonMatrices;
}


function make_base()
{
  base_image = new Image();
  base_image.src = 'img/test_six_4.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);

    imgData = ctx.getImageData(0, 0, base_image.width, base_image.height);
    imgDataBW = convertToBW(imgData);
    imgDataMatrix = listToMatrix(imgDataSerialized, imgWidth);

    comparisonMatricesArray = compareMatrices(imgDataMatrix);
    estimatedNumber = comparisonMatricesArray.indexOf(Math.min.apply(Math, comparisonMatricesArray));

    console.log("Estimated Number:", estimatedNumber);

    ctx.putImageData(imgDataBW,0,0);
  }

}