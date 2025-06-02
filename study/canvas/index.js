function draw()
{
    var canvas = document.getElementById("tutorial");
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50,);
    }
    var canvas = document.getElementById("tutorial1");
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext("2d");
        
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
    var canvas = document.getElementById("tutorial2");
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
    var canvas = document.getElementById("tutorial3");
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 면상
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // 아가리 (시계방향)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 왼눈깔
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 오른눈깔
        ctx.stroke();
    }
    var canvas = document.getElementById("tutorial4");
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext("2d");
        
        // 채워진 삼각김밥
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // 속이 빈 삼각김밥
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
    var canvas = document.getElementById("tutorial5");
    if (canvas.getContext)
    {
        var ctx = canvas.getContext("2d");

        for (var i = 0; i < 4; i++) 
        {
            for (var j = 0; j < 3; j++) 
            {
                ctx.beginPath();
                var x = 25 + j * 50; // x좌표
                var y = 25 + i * 50; // y좌표
                var radius = 20; // 호 반지름
                var startAngle = 0; // 원의 시작점
                var endAngle = Math.PI + (Math.PI * j) / 2; // 원의 끝점
                var anticlockwise = i % 2 == 0 ? false : true; // 시계방향 또는 반시계방향

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if (i > 1)
                {
                    ctx.fill();
                }
                else
                {
                    ctx.stroke();
                }
            }
        }
    }
 }