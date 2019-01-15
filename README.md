# JavaScript Object/Scope Classwork

1. What is the result of the following code? Explain your answer.
  ```
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```



- First the code will log Aurelio De Rosa because in the console.log parenthesis it goes directly to the place where its was defined. It is calling from a trail leading into the 3rd scope where the fullName var is redefined. but the next consol log is pulling from a var that is in the global scope meaning it will also pull from the fullname value in the same scope. 




2. What will you see in the console for the following example?
  ```
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```


- You will see 1 because var a is already defined as 1 and is only changed in the function b, if it was logged in b it would print out what is was redefined as. Function b is called but it doesn't log anything in the functio, so the console will only have what is in var a. 





* Create an array called ```peopleList``` objects using *Object Literal* notation. 

* Each 'person' object in the 'people' collection should have the following information:

First Name
Last Name
Age
Zip Code

Add the following 4 People to your list:
```
Jimmy Page, 62, 00821

Rick Nielsen, 57, 61016

Jimi Hendrix, 58, 90001

Lemmy Kilmister, 57, 21120
```

### Add code to perform the following:

* Dynamically add the property ```famousSong``` to the object instance for ```Jimi Hendrix``` and assign it the value ```Purple Haze```

* Dynamically add a function called ```getBandandZip()``` to the object instance for ```Jimmy Page``` that returns a concatenated string of ```Led Zeppelin HISZIPCODE``` (get zip code from the object instance). Call the function from your code and log the response.

* Write a function that accepts a zip code parameter and prints out all the people in the array with a matching zip code, or print the message ```No match found for zip code!``` if there is no match


