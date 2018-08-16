module.exports.chunkdata = function(array, chunksize) {
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
  return chunkedarray;
}
