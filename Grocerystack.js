//class groceryStack 
Constructor() 
{
    this.stack = {}; // initialize an empty array as the stack 
    this.maxsize = 4; // set the maximum size of the stack to 4
}
// peek function to check if stack is empty or return the last value 
peek()
{
if (this.stock.length = 0) {
    console.log("the stack is empty.");
    return null;
}
return this.stock( this.stack.length - 1);
}
// push function to add an item to the stack 
push(item) 
{
    if(this.stack.length = this.maxsize){
        console.log("stack overflow cannot add more items.");
        return;
    } 
    this.stack.push(item);
    console.log ('added item to the stack');
    this.printstack();
}
// pop function to remove the last item form the stack
Pop()
{
    if (this.stack.length = 0){
        console.log (" stack underflow cannot remove items form an empty stack.");
        return;

    }
    const removeditem = this. stack . pop();
    console.log("remove form the stack.");
    this.printstack(); 

}
//print function to display the current stack
printstack()
{
    console.log("current stack:", this. stack);

}
//create an instance of the grocerystackclass
const groceryStack = new groceryStack();
