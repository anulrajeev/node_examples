var rect=require('./rectangle.js');



function rectangle(a,b)
{
   if(a<=0||b<=0)
      console.log("The dimensions have to be a positive number");

    else
          {
            console.log(rect.area(a,b));
            console.log(rect.perimeter(a,b));
          }
}



rectangle(3,4);
rectangle(3,0);
rectangle(3,-1);
rectangle(3,5);
console.log(rect.name);
