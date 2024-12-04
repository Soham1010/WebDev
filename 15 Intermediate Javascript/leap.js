function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.  
        if (year % 100 === 0) {
            return "Not leap year";
        }
        if (year % 400 === 0) {
            return "Not leap year";
        }
       if ( year % 4 === 0 ) {
           return "Leap year"
       }
    
        
    
    /**************Don't change the code below****************/    
    
    }

isLeap(2020); // should return "Leap year"
isLeap(1800); // should return "Not leap year"w