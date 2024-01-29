//  Immediate Invoked Function Expression (IIFE) 


(function chai(){
    // Named iife
    console.log(`DB Connected to server!`);
})();  // if you are writing another iife function in one program then must to end the iife function by ' ; ' (semicolon)

(()=>{
    console.log(`DB Connected to server two!`);
})();

((name)=>{
    console.log(`DB Connected to server ${name}!`);
})("Parth Chauhan");