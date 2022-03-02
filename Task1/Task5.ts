function print(name:string | string[]) { 
    if(typeof name === "string") { 
       console.log(name) 
    } 
    else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
} 
print("Vikram Jothik mateti"); 
console.log("Printing name array...."); 
print(["vikram","Jothik","Mateti","jdaojoiw"]);


interface a{
   aa: string;
   bb: string;
   cc: number;
}

interface b{
   dd: number;
   ee: string;
}

type c = a & b;

let c = {
   aa:"vikram",
   bb:"jothik",
   cc:"12",
   dd:"342",
   ee:"dewldke"

}

console.log(c);
