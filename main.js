window.onload = function () {
    pencil()
};
var files = document.getElementById('files');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
context.lineCap = 'round';
var down = false;
var mouse = {x: 0, y: 0};
var start_mouse = {x: 0, y: 0};
var circle = false;
var rectangles = false;
var trait = false;

var colorElt = document.getElementById('color');
colorElt.addEventListener('change', function () {
    context.strokeStyle = this.value;
    context.lineWidth = 5;
});

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function rubber() {
    context.strokeStyle = "white";
    context.lineWidth = 15;
}

function draw(e) {
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    if (down == true) {
        context.lineTo(xPos, yPos);
        context.stroke();
    }
}

function pencil() {
    circle = false;
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', function () {
        canvas.addEventListener('mouseup', function () {
            down = false;
        });
        down = true;
        context.beginPath();
        context.moveTo(xPos, yPos);
        canvas.addEventListener('mousemove', draw);
    });

    context.strokeStyle = "black";
    context.lineWidth = 5;
}

files.addEventListener('change', function (e) {
    clearCanvas();
    var search = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = search;
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, 800, 500)
    })
});

function rectangle() {
    down = false;
    circle = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener('mousemove', function (e) {
        if (circle == true) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        }
    }, false);

    canvas.addEventListener('mousedown', function (e) {
        if (circle == true) {
            canvas.addEventListener('mousemove', rectangle, false);
            canvas.addEventListener('mouseup', function () {
                down = false;
            });
        }
        canvas.addEventListener('mouseup', function () {
            if (circle == true) {
                canvas.removeEventListener('mousemove', rectangle, false);
                context.drawImage(canvas, 0, 0);
            }
        }, false);

        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

        start_mouse.x = mouse.x;
        start_mouse.y = mouse.y;

    }, false);

    var x = (mouse.x + start_mouse.x) / 2;
    var y = (mouse.y + start_mouse.y) / 2;

    var radius = Math.max(
        Math.abs(mouse.x - start_mouse.x),
        Math.abs(mouse.y - start_mouse.y)) / 2;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

};

function circles() {
    down = false;
    rectangles = true;

    canvas.addEventListener('mousemove', function (e) {
        if (rectangles == true) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        }
    }, false);

    canvas.addEventListener('mousedown', function (e) {
        if (rectangles == true) {
            canvas.addEventListener('mousemove', circles, false);

            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

            start_mouse.x = mouse.x;
            start_mouse.y = mouse.y;

            circles();
        }
    }, false);

    canvas.addEventListener('mouseup', function () {
        if (rectangles == true) {
            canvas.removeEventListener('mousemove', circles, false);

            context.drawImage(canvas, 0, 0);


        }
    }, false);
    context.clearRect(0, 0, canvas.width, canvas.height);
    var x = Math.min(mouse.x, start_mouse.x);
    var y = Math.min(mouse.y, start_mouse.y);
    var width = Math.abs(mouse.x - start_mouse.x);
    var height = Math.abs(mouse.y - start_mouse.y);
    context.strokeRect(x, y, width, height);

}

function rectangle2() {
    down = false;
    circle = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener('mousemove', function (e) {
        if (circle == true) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        }
    }, false);

    canvas.addEventListener('mousedown', function (e) {
        if (circle == true) {
            canvas.addEventListener('mousemove', rectangle2, false);
            canvas.addEventListener('mouseup', function () {
                down = false;
            });
        }
        canvas.addEventListener('mouseup', function () {
            if (circle == true) {
                canvas.removeEventListener('mousemove', rectangle2, false);
                context.drawImage(canvas, 0, 0);
            }
        }, false);

        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

        start_mouse.x = mouse.x;
        start_mouse.y = mouse.y;

    }, false);

    var x = (mouse.x + start_mouse.x) / 2;
    var y = (mouse.y + start_mouse.y) / 2;

    var radius = Math.max(
        Math.abs(mouse.x - start_mouse.x),
        Math.abs(mouse.y - start_mouse.y)) / 2;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();

}

function circles2() {
    down = false;
    rectangles = true;

    canvas.addEventListener('mousemove', function (e) {
        if (rectangles == true) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        }
    }, false);

    canvas.addEventListener('mousedown', function (e) {
        if (rectangles == true) {
            canvas.addEventListener('mousemove', circles, false);

            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

            start_mouse.x = mouse.x;
            start_mouse.y = mouse.y;

            circles();
        }
    }, false);

    canvas.addEventListener('mouseup', function () {
        if (rectangles == true) {
            canvas.removeEventListener('mousemove', circles, false);

            context.drawImage(canvas, 0, 0);


        }
    }, false);
    context.clearRect(0, 0, canvas.width, canvas.height);
    var x = Math.min(mouse.x, start_mouse.x);
    var y = Math.min(mouse.y, start_mouse.y);
    var width = Math.abs(mouse.x - start_mouse.x);
    var height = Math.abs(mouse.y - start_mouse.y);
    context.beginPath();
    context.fillStyle = colorElt.value;
    context.fillRect(x, y, width, height);
    context.closePath();

}

function saveImage() {
    imageSave = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = imageSave;
}

var taileElt = document.getElementById('taile');
taileElt.addEventListener('change', function () {
    context.lineWidth = this.value;
});

function traits() {
    down = false;
    trait = true;
    canvas.addEventListener('mousemove', function (e) {
        if (trait == true) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        }
    }, false);


    canvas.addEventListener('mousedown', function (e) {
        if (trait == true) {
            canvas.addEventListener('mousemove', traits, false);

            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

            start_mouse.x = mouse.x;
            start_mouse.y = mouse.y;
        }
    }, false);

    canvas.addEventListener('mouseup', function () {
        if (trait == true) {
            canvas.removeEventListener('mousemove', traits, false);

            context.drawImage(canvas, 0, 0);

        }
    }, false);

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(start_mouse.x, start_mouse.y);
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
}