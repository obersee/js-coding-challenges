/*
Suppose that you arrive at Dr. Hong's lab at the end of a long journey to catch ponketmon.
Dr. Hong allows you to take "N"/2 ponketmons among "N" ponketmons in his lab.
Ponketmons in Dr. Hong's lab are identified by a number given based on its type.
Therefore, ponketmons with the same type have the same number.

For example, if there are 4 ponketmons in the lab, 
and the type number of each ponketmon is [number 3, number 1, number 2, number 3], 
this represents that there are two ponketmons of number 3, one ponketmon of number 1, and one ponketmon of number 2. 
At this point, there are 6 ways to select two ponketmons among the four ponketmons as follows.

    Selecting the first (number 3) and the second (number 1) ponketmons.
    Selecting the first (number 3) and the third (number 2) ponketmons.
    Selecting the first (number 3) and the fourth (number 3) ponketmons.
    Selecting the second (number 1) and the third (number 2) ponketmons.
    Selecting the second (number 1) and the fourth (number 3) ponketmons.
    Selecting the third (number 2) and the fourth (number 3) ponketmons.

At this point, if you select the first (number 3) and the fourth (number 3) ponketmons, 
you will get only one type of ponketmon (two ponketmons of number 3).
However, you can get two types of ponketmons in the other methods.
Therefore, in the example above, the maximum number of ponketmon types you can get is 2.
Since you want to get as many types of ponketmon as possible, 
you want to select "N"/2 ponketmons including as many types as possible. 
Given an array nums containing the type number of "N" ponketmons as the parameter, 
write a function "solution" to find the way to select and return the maximum number of types you can get.

Constraints

    * nums is a 1-dimensional array containing type number of ponketmons.
    * Length of nums is a natural number between 1 and 10,000. It is always given as an even number.
    * The type number of ponketmons is a natural number between 1 and 200,000.
    * Even though there are several ways to select the maximum number of types, 
      return only one value of the maximum number of types you can select.

Examples

nums 	     result
[3,1,2,3] 	    2
[3,3,3,2,2,4] 	3
[3,3,3,2,2,2] 	2

Example #1
It is the same as the example in the problem statement.

Example #2
Since there are 6 ponketmons, you can select 3 ponketmons.
To select as many types as possible, you should select ponketmons of number 3, number 2, and number 4 each. Hence, return 3.

Example #3
Since there are 6 ponketmons, you can select 3 ponketmons.
To select as many types as possible, you should select either one ponketmon of number 3 and two ponketmons of number 2 or two ponketmons of number 3 and one ponketmon of number 2. Therefore, the maximum number of types you can select is 2.
*/

function solution(nums) {
    const arr = [...new Set(nums)];
    const max = nums.length / 2;

    return arr.length >= max ? max : arr.length;
}

function test() {
    console.log(solution([3, 1, 2, 3]) === 2 && solution([3, 3, 3, 2, 2, 4]) === 3
                && solution([3, 3, 3, 2, 2, 2]) === 2);
}

test();
