<!DOCTYPE html>
<!--
To print fibonacci series...
-->
<html>
    <head>
        <title>FIBONACCI SERIES</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <script type="text/javascript">
            
            var t1=0;
            var t2=1;
            var sum;
            var num=prompt("Enter the number up to you want to print fibonacci series:");
            document.write(t1+"<br/>");
            document.write(t2+"<br/>");
            for(var i =1;i<=num; ++i)
            {
            sum= t1+t2;
            t1=t2;
            t2=sum;
            document.write(t3+"<br/>");
            }
            
        </script>
    </body>
</html>
