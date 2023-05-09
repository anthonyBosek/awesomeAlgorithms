// ** template **
//
// description
//
// func() ➞ *
//
// ------------------------------------------------------------------------------------------------

// const objMod = (obj, action, prop, newValue) => {
//   if (action === "edit") {
//     if (obj.hasOwnProperty(prop)) {
//       obj[prop] = newValue;
//     } else {
//       return "Property not found";
//     }
//   } else if (action === "add") {
//     obj[prop] = newValue;
//   } else if (action === "delete") {
//     delete obj[prop];
//   }
//   return obj;
// }; //

// console.log(
//   objMod(
//     { name: "Mike", location: "Phoenix", job: "Plumber" },
//     edit,
//     "name",
//     "Anthony"
//   )
// );

const stockOrder = () => {
  const collection = [];

  const add = (item) => {
    collection.push(item);
  };

  const remove = (item) => {
    collection = collection.filter((i) => i !== item);
    // const index = collection.indexOf(item)
    // if (index !== -1) {
    //   collection.splice(index, 1)
    // }
  };

  const list = () => {
    return collection;
  };

  return { add, remove, list };
};
