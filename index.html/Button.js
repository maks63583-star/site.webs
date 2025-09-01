var colorArray0 = ['white']
var i = 0


function changeColor() {
    document.body.background = colorArray0[i];
    i++;
    if ( i > colorArray0.length - 1) {
        i = 0;
    }
}
