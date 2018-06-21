function log(log) {
  console.log('## '+ log);
  return true;
}

function whichkey(key, array) {
  var keyset = Object.values(array);
  var result = false;
  for (i=0; i<keyset.length; i++) {
    if (key == keyset[i]) {
      result = keyset[i];
    }
  }
  return result;
}

var key = {
  return : 13,
  space: 32,
  esc: 27,
  left_arrow: 37,
  up_arrow: 38,
  right_arrow: 39,
  down_arrow: 40
};




$(document).ready(function() {
  log('jquery working, document ready.');
  $(document).keyup(function(keyEvent) {
    var mykey = whichkey(keyEvent.which, key)
    if (mykey) {
      log(mykey);
    }
  });

});
