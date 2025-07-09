/*
Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.
The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.
Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
    Contains all of the letters in "chris", in order.
*/
myString = "thomas";
myName = "Thomas";
function nameInStr (string, name){
    let arr=string.split('');
    let arrName = name.split('');
    let index = 0;                                   //! besoin d'initier un index car il faut vérifier les letters dans Name à l'odre : trouver l'index de la 1è lettre et vérifier la 2è lettre à partir de cet index
    for (const letter of arrName){
        if(arr.includes(letter) === true){
            index = arr.indexOf(letter);
            arr.splice(0, index+1);                  //!cela veut dire que l'arr enlève "index+1" éléments à partir du début (position 0) du tableau
        } else {return false};
    };
    return true;
};
console.log(nameInStr(myString,myName));