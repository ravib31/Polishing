const c = {
    name: 'The C programing language',
    author: 'Brian Kernighan and Dennis Ritchie',
}

d=c;
console.log(d.name); /*The C programing language*/
c.name="C++" /* because we provide only refrence of the object not the complete object */
console.log(d.name);/*C++*/