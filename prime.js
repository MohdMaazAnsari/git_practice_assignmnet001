function identifyPrime(num) {
    let a=0;
    for(let i=2;i<num;i++)
    {
       if(num%i==0)
     {
          a=1;
   break;
         
     }
        
    }
    
  if(a!=0)
  {
      console.log("No");
  }
     
   else{
         console.log("Yes");
 
    }
}