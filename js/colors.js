function getPrimaryColor() {
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    return rs.getPropertyValue('--primary');
}

function setPrimaryColor(color) {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', color);
}

//   const item = document.getElementById("itemId");
//   item.addEventListener("click", function () { setPrimaryColor("#ba5a00") });