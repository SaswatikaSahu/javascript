<!DOCTYPE html>
<!--
To print today , yesterday and tomorrow date using javaScript....
-->
<html>
    <head>
        <title>Date Application</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <script type="text/javaScript">
            var d = new Date();
            d.setDate(d.getDate() - 1)
            var d_yesterday=d.toLocaleDateString();
            document.write('Yesterday date is:'+ d_yesterday + "<br>");
            
            var d_today=new Date().toLocaleDateString();
            document.write('today date is : '+ d_today +"<br>");
            
            var d_tomorrow=new Date();
            d_tomorrow.setDate(d_tomorrow.getDate()+1)
            var tomo_date=d_tomorrow.toLocaleDateString();
            document.write('tomorrow date is: '+ tomo_date)

 
        </script>
    </body>
</html>
