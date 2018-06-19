function reverseString(str) {
  let newSt = "";
  for (let char of str){
    newSt = char + newSt; 
  }

  return newSt;
}

reverseString("hello");
