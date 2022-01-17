# funktion-graffer-js

# how to make lines!
1. download the code
2. make a funktion with the calculation you want to graff
3. it must return the value for the y axis
4. go to sketch.js
5. in the function fill operation add two things:
  
- the operation array must have the string "simple"
- the calculate array must have the name of your function WITHOUT ()
  
# circkles or other complex lines
these have precisly 2 or 0 y values per x value
1. in the function you must now have 2 calculatins and 1 variable
2. this variable is a boolian that switches between the 2 results for the y axis 
3. the funktion must be stored in the same way as with normal lines
4. the operation array is should have "multy" instead of "simple" for a optimal result
  
# tips:
1. it is a good idea to make a local variable when x is used but it is not required
2. you can use functions from refractions to do recursive math operations, but a lot of them are available with Math.
3. there may not be an empty space in the operation or calculate array, the array possition has no meaning. as long as it starts at 0
4. the lines already being calculated can be deleted and are only there to showcase the way it works
 
https://dendersen.github.io/funktion-graffer-js/


