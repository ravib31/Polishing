// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to reverse the linked list
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        console.log("The value ofcurr.next",curr.next);
        prev = curr;
        curr = next;
    }
    return prev;
};

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

// Convert array to linked list
let head = arrayToLinkedList([1, 2, 3, 4, 5]);

// Reverse the linked list
let reversedHead = reverseList(head);

// Print the reversed linked list
printList(reversedHead);
