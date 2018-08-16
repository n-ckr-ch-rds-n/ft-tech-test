chunkdata = function(array, chunksize) {
  var chunkedarray = [];
  var chunksize = chunksize;
  var numberofchunks = array.length / chunksize;
  var position = 0;

  for (i=0; i<numberofchunks; i++) {
    chunkedarray.push([]);

    for (j=0; j<chunksize; j++) {
      chunkedarray[i].push(array[position]);
      position += 1;
    }

  }
  console.log(chunkedarray)
  return chunkedarray;
}

var testarray = [1,2,3,4,5,6,7,8,9,10];

chunkdata(testarray, 5);
