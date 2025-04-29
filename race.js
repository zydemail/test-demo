function startRace() {
    const turtle = document.getElementById('turtle');
    const rabbit = document.getElementById('rabbit');
    const trackWidth = document.querySelector('.track').offsetWidth;
    const finishLine = trackWidth - 50; // 减去 runner 的宽度

    let turtlePosition = 0;
    let rabbitPosition = 0;

    const turtleSpeed = 1; // 龟的速度
    const rabbitSpeed = 5; // 兔的速度
    const rabbitNapTime = 2000; // 兔子休息时间（毫秒）

    const turtleInterval = setInterval(() => {
        turtlePosition += turtleSpeed;
        turtle.style.left = turtlePosition + 'px';

        if (turtlePosition >= finishLine) {
            clearInterval(turtleInterval);
            clearInterval(rabbitInterval);
            alert('乌龟赢了!');
        }
    }, 100);

    let rabbitInterval = setInterval(() => {
        rabbitPosition += rabbitSpeed;
        rabbit.style.left = rabbitPosition + 'px';

        if (rabbitPosition >= finishLine) {
            clearInterval(turtleInterval);
            clearInterval(rabbitInterval);
            alert('兔子赢了!');
        }

        // 兔子休息
        if (rabbitPosition >= finishLine / 2 && rabbitPosition < finishLine / 2 + rabbitSpeed) {
            clearInterval(rabbitInterval);
            setTimeout(() => {
                rabbitInterval = setInterval(() => {
                    rabbitPosition += rabbitSpeed;
                    rabbit.style.left = rabbitPosition + 'px';

                    if (rabbitPosition >= finishLine) {
                        clearInterval(turtleInterval);
                        clearInterval(rabbitInterval);
                        alert('兔子赢了!');
                    }
                }, 100);
            }, rabbitNapTime);
        }
    }, 100);
}