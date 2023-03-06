function hasTargetSum(array, target) {
  const outerArray = [];  
  const innerArray = [];
  const tempArray = [];

  for(const value in array){
    if(array[value] < 1){
      for(const value2 in array){
        outerArray.push(array[value2])
        innerArray.push(array[value2])
      }
      break
    }
    else{
      tempArray.push(array[value]);
    }
  }

  if(tempArray.length === array.length){
    for(const item in array){
      if(array[item] < target){
        outerArray.push(array[item])
        innerArray.push(array[item])
      }
    }  
  }

  innerArray.shift();

  while(outerArray.length > 1){
    for(const num in innerArray){
      if(outerArray[0] + innerArray[num] == target){
        return true
      }
    }
    outerArray.shift();
    innerArray.shift();
  }

  return false;

}

/*
Function called hasTargetSum
Receives an array of integers and a target integer
Function should return true if any pair of numbers adds up to the target

Approaches to reduce time:
- Remove any numbers equalt to or higher than the target
- Don't add the number to itself
- Remove the number from the outer for loop after it's done

Pseudocode
- Create a second array that removes the first element (shortArray)
- For each element inside the main array
    - Check if the number is equal to or more than the target
    - If the number is above the target, remove it from the array
    - For each element in shortArray
      - Add the element and compare to the target
    - Remove index 0 from both
*/

/*
Explanation

I create three empty arrays. One of them is for the outer loop array, one of them is for the inner loop array, and one is a temporary array.

The for loop here checks if any values in the array are less than one. This is because if there are no values that are less than one we can remove all values equal to or greater than 
the target. The loop instantly breaks out if there are any values that are less than one. Otherwise the next loop (in the line if(tempArray.length === array.length)) removes all 
numbers equal to or greater than the target.

innerArray is shifted. This avoids any repeat numbers being added together unless they show up twice in the original array.

The while nested with a for loop allows me to shift both arrays inside of the while loop. This prevents the same sum being tried multiple times (such as 1+2 and 2+1). Nesting the for 
loop in another for loop didn’t allow for this because it would end up skipping numbers every single go-around.

Big O 

Different scenarios will create different Big O equations. If all of the numbers in the array are positive then the first block is O(n), the second block is O(n), and the third block 
is O(n^2). If any of the numbers are zero or negative then the first block is O(n^2), the second block doesn’t happen, and the third block is O(n^2).


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 8, 204, 4, 17, 20, 96, 42, 32], 56));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([18, 22, 65, 32, 8, 12, 17, 2, 3, 49], 71));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 7, 12, 5, 6, 10, 4], 11));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10,4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 10, 4, 18], 18));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, -6], -13));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-7, 10, 4, -5], -13));
}

module.exports = hasTargetSum;
