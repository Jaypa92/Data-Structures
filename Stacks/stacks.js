/*A stack is a data structure that follows the LIFO or last in first out principle. Since there are no built in
stack data structures like there are in other languages, an array is used. To stick closely to the principle that
defines a stack, a class with stack methods can be beneficial.*/

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