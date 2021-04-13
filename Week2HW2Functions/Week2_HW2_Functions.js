
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments 
//and returns the largest of them. Use the if-then-else construct available 
//in Javascript. 

function maxOfTwoNumbers(a,b)
{
    if(a>b)
    {
        return a + " is the largest number of two."
    }
    else
    {
        return b + " is the largest number of two "
    } 
}

//2.Define a function maxOfThree that takes three numbers as arguments and 
//returns the largest of them.

function maxOfThreeNumbers(a,b,c)
{
    if(a>b&&a>c)
    {
        return a + " is the largest number of three"
    }
    else if(b>a&&b>c)
    {
        return b + " is the largest number of three"
    } 
    else if(c>a&&c>b)
    {
        return c + " is the largest number of three"
    }
}

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.

function isCharacterAVowel(a) 
{
	if (a=="a" || a=="A"|| a=="e" || a=="E"|| a=="o" || a=="O"|| a=="i"|| a=="I"|| a=="u"|| a=="U")
    {
		return "Your character is " + a + ". And it is a vowel";
	} else 
    {
        return "Your character is " + a + ". And it is a consonant";
    }
}

//4.Define a function sumArray and a function multiplyArray that sums and multiplies 
//(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
  		sum += numbers[i];
	}
   	return sum;
  }

function multiplyArray(numbers){
   var multiplies=1;
   for (var i = 0; i <numbers.length; i++) 
   {
   multiplies*=numbers[i];
   }return multiplies;
}

//5. returns the number of arguments
function findArgs(...args)
{
 return args.length;
}

//6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string) {
	reverse = []
	for (i=string.length-1;i>=0;i--)
    {
		reverse.push(string[i]);
	}
	return reverse.join('');
}

//7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.

function findLongestWord(words){
    for(let i=0; i<words.length; i++)
    {
        if(words[words.length-1].length <= words[i].length) // last word compared to fist word
        {
            let x = words[i];
            words[i] = words[words.length-1];
            words[words.length-1]= x; 
        }
    }  
    return words[words.length-1]
}

//8. Write a function filterLongWords that takes an array of words 
//and a number i and returns the array of words that are longer than i characters long.

function filterLongWords(array)
{
    let newArray = []
    let num = 5
    for (let i = 0; i < array.length; i++)
    {
        if(array[i].length>=num)
        {
        newArray.push(array[i])
        }
    }
    return newArray;
}
