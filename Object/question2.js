const a = {};
const b = {key:"b"};
const c = {key:"c"};

a[b] = 123; /*a["[object object]"] */
a[c] = 456; /*a["[object object]"] */

console.log(a[b]); /*456*/