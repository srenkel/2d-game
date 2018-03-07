function init() {
    var canvas = document.getElementById("asteroids");
    var context = canvas.getContext("2d");
    context.strokeStyle = 'lightgrey';
    context.fillStyle = 'dimgrey';
    context.lineWidth = 5;
    context.rect(75, 75, 250, 250);
    context.stroke();
    context.fill();
    // this is a comment, it has no effect!!!
}
