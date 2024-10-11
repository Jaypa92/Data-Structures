/*
*****************************************************STACKS********************************************************



DEFINITION:

A stack is a data structure that follows the LIFO or last in first out principle. Since there are no built in
stack data structures in JavaScript like there are in other languages, an array is used as well as a class in this 
case to stick closely to the principle that defines a stack. Although stacks are essentially arrays, the LIFO
principle is what seperates the two. Data indexes cannot be used to retrieve data in a stack unlike arrays and 
data cannot be inserted or removed unless it is at the end of the stack.


WHY USE A STACK?:
A stack is more beneficial for when data needs to follow the last in first out principle.


EXAMPLES:

1. Undo Button Feature - Applications that use an undo feature use stacks to manage and undo operaions performed.

2. Web Browsers - Web browsers store user history in stacks to manage and retrieve data such as the 
previous web page viewed if the back button is clicked.

*/


class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }

        console.log(this.items[this.items.length-1]);
    }

    isEmpty(){
        console.log(this.items.length === 0);
    }

    size(){
        console.log(this.items.length);
    }

    clear(){
        this.items = [];
    }
}

const stack = new Stack();
stack.push("One");
stack.push("Two");
stack.push("Three");
stack.pop();
stack.peek();
stack.size();
stack.clear();
stack.isEmpty();