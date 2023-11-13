function getPrimaryColor() {
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    return rs.getPropertyValue('--primary');
}

function setPrimaryColor(color) {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', color);
}