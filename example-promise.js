// function getTempCallback(location, callback){
//   callback(undefined,55);
//   callback("City not found");
// }
//
// getTempCallback('Dhaka',function(err,temp){
//   if (err) {
//     console.log("error", err);
//   }else {
//     console.log("success", temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(55);
//     reject("City not found");
//   });
// }
//
// getTempPromise("Dhaka").then(function(temp){
//   console.log("Promise Success", temp);
// }, function(err){
//   console.log("Error ", err);
// });

//Challenge Area

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject("A & B is not a number ");
    }
  });
}

addPromise(3).then(function(sum){
  console.log("Success", sum);
},function(err){
  console.log("Error", err);
})
