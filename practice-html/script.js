document.querySelector('.secondItem').innerHTML = "Laz's Second Item";


function changeText() {
    const thirdItem = document.querySelector('.thirdItem');
    // let temp = '';
    
    // thirdItem.innerHTML.split('').forEach(elem => {
    //     if(elem !== 'undefined') {
    //         temp += `-${elem}`;
    //     }
    // });

    // thirdItem.innerHTML = temp;

    // ^ this above code can also be written like the below code. Though since join works using the first element in the split array and so on. It will not add the - in front of the first element in the array.

    thirdItem.innerHTML = thirdItem.innerHTML.split('').join('-');
}

window.addEventListener('load', () => {
    console.log('Im Connected');

    changeText();
});


// a variable is a word that holds data; ie: const name = 'Laz', let age = 39, var example = true (try not using var when setting variable names)
// const is used for variables that will not change it's value;
// let is used for variables who's values will change


//              Number         Function                 Boolean
//                |                 |                       |                   
// const myArr = [1, 'myItem', changeText(), [true, false], false, {name: 'Laz', age: 39}];
//                      |                       |                           |
//                  String                     Array                    Object

// Number are integers
// Functions represented by the () at the end of the variable name
// Boolean is a true or false value
// String has "" around the word or words or sentences or phrases
// Array are surrounded by [] and can hold any data type within the array; *** all arrays start from index 0 {not 1 you caveman} ***
// Objects are surrounded by {} and have key: value pairs within it. ie: {name: 'Laz', age: 39}
//                                                                          |     |     |    |
//                                                                        key: value , key: value

//  when using arrays or objects, values are separated by ,
// when using objects the key: value is shown with : rather than an =
