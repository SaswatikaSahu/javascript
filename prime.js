<!DOCTYPE html>
<!--
To check prime number or not.........
-->
<html>
    <head>
        <title>Check PrimeNumber</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <script type="text/javascript">
        var x;
        var num=prompt("Enter a number :");
        
        for(x=2;x<=num;i++)
        {
            var tmp=num%x;
            if(tmp===0)
            {
            document.write(num+" is not a prime number");   
            
            }
           document.write(num+" is  a prime number"); 
           
        }
       
        </script>
    </body>
</html>
