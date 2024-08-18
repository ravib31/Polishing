const cal={
    r:10,
    diameter(){
        return 2*this.r;
    },
    perimeter:()=>{
        return 2*Math.PI*this.r;
    }
   
}

console.log(cal.diameter()); /*this keyword in this calculate is reffer to the r*/
console.log(cal.perimeter());/*this keyword in this calculate is reffer to the window object thats why it will give NaN as output*/