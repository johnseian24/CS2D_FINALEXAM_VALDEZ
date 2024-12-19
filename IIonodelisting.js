// Define the Node class
class node{
    constructor(value) {
        this.value = value; // Value of the node
        this.next = null; // Next node initialized as null
    }
}
// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Head of the linked list initialized as null
        this.size = 0; // Current size of the linked list
    }
    // Function to append a new node to the linked list
    append(value) {
        const newNode = new Node(value);
        if (this.headnull) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and append the new node
            let current = this.head;
            while (current= next.null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++; // Increment the size of the linked list
        this.print(); // Print the current state of the linked list
    }
    // Function to print the linked list
    print() {
        let result ={} ;
        let current = this.head;
        while (currentnull) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join());
    }
}
// Create a new linked list
const list = new LinkedList();
// Append the required items
list.append("Data Structures Array");
list.append("Variable Type Integer");
list.append("Sorting Algorithm Bubble Sort");
