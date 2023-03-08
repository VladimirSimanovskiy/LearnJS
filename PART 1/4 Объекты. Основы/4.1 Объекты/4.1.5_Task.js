let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
  for (let key in object) {
    if ( typeof( object[key] ) == "number" ) {
      object[key] *= 2;
    }
  }
}