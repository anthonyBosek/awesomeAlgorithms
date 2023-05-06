// ** template **
//
// description
//
// func() ➞ *
//
// ------------------------------------------------------------------------------------------------

const objMod = (obj, action, prop, newValue) => {
  if (action === "edit") {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = newValue;
    } else {
      return "Property not found";
    }
  } else if (action === "add") {
    obj[prop] = newValue;
  } else if (action === "delete") {
    delete obj[prop];
  }
  return obj;
}; //

console.log(
  objMod(
    { name: "Mike", location: "Phoenix", job: "Plumber" },
    edit,
    "name",
    "Anthony"
  )
);
