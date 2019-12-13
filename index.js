// Code your solutions in this file
function writeCards(names, msg) {
  const thank_you_array = [];
  for (let i = 0; i < names.length; i++) {
    thank_you_array.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`);
  }
  return thank_you_array;

}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
