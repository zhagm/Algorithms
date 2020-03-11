/**
 * Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. 
 * The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
 * Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words in place.
 * When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
**/

function reverseWords(arr) {
    let arrow = 0;
    let start = 0, end = arr.length - 1;
    while (arr.slice(start, end).includes(" ")) {
        while (arr[end] !== " ") {
            moveLastToIndex(arr, start);
            arrow++;
        }
        moveLastToIndex(arr, arrow);
        arrow++;
        start = arrow;
    }
    return ;
}

function moveLastToIndex(arr, index) {
    // bubble swap from last item until index
    for (let i = arr.length - 1; i > index; i--)
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
}

const test1 = [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];
reverseWords(test1);
const test2 = [ 'b', 'e','a','c','h',' ','s','u','n','n','y',' ','t','h','e',' ','a','t' ];
reverseWords(test2);
 

console.log(`'steal pound cake' => ${test1.join('')}`);
console.log(`'at the sunny beach' => ${test2.join('')}`);