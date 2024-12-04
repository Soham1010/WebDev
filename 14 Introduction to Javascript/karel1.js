function main(){
   
    putBeeper();
    diagonamMoveAndBeeper();
    diagonamMoveAndBeeper();
    diagonamMoveAndBeeper();
    diagonamMoveAndBeeper();
    
    
 }
 
 function diagonamMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }