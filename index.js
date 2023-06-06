// bài tập 1
function tinhcong(){
    let snc = +document.getElementById("ngaycong").value;
    tongcong=snc*100000;
    let kq = document.getElementById("ketqua");
    kq.innerHTML=`${tongcong}`;
    kq.classList.remove("hide");
}

// bài tập 2 
function tinhtt(){
    let st1=+document.getElementById("sothuc1").value;
    let st2=+document.getElementById("sothuc2").value;
    let st3=+document.getElementById("sothuc3").value;
    let st4=+document.getElementById("sothuc4").value;
    let st5=+document.getElementById("sothuc5").value;
    trungbinh=(st1+st2+st3+st4+st5)/5;
    let kqtt=document.getElementById("ketquatt");
    kqtt.innerHTML=`${trungbinh}`;
    kqtt.classList.remove("hide");
}

// bài tập 3 
function doitien(){
    let sotien=+document.getElementById("usd").value;
    tien=sotien*23500;
    let thanhtien=document.getElementById("thanhtienvnd");
    thanhtien.innerHTML=`${tien}`;
    thanhtien.classList.remove("hide");
}

// bài tập 3 
function dientich(){
    let dai=+document.getElementById("chieudai").value;
    let rong=+document.getElementById("chieurong").value;
    congthucdientich=dai*rong;
    let dt=document.getElementById("ketquadt");
    dt.innerHTML=`Diện tích ${congthucdientich}`;
    dt.classList.remove("hide");
}

function chuvi(){
    let dai=+document.getElementById("chieudai").value;
    let rong=+document.getElementById("chieurong").value;
    congthucchuvi=(dai+rong)*2;
    let dt=document.getElementById("ketquacv");
    dt.innerHTML=`Chu vi ${congthucchuvi}`;
    dt.classList.remove("hide");
}

// bài tập 5 
function tinhkyso(){
    let ks=+document.getElementById("kyso").value;
    let kqks = 0;
    kqks+=ks%10;
    ks=Math.floor(ks/10);
    kqks+=ks;
    let tongks=document.getElementById("ketquaks");
    tongks.innerHTML=`Tổng 2 ký số ${kqks}`;
    tongks.classList.remove("hide");
}