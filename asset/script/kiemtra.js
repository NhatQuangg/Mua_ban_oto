function kiemtra() {
    // ta sẽ khai báo 1 biến "loi"
    var loi = "";
    // kiểm tra số điện thoại đăng nhập : number + length 
    var sdt = document.getElementById("number__phone");
    if(sdt.value==""){
        sdt.className="loi";        
        loi += "Vui lòng nhập số điện thoại";
    }
    else if(sdt.value.length<10){
        sdt.className="loi";       
        loi += "Số điện thoại không đúng";        
    }
    else if(sdt.value.length>10){
        sdt.className="loi";       
        loi += "Số điện thoại không đúng";        
    }
        // Ngược lại nếu đúng thì gắn lại cho tên đăng nhập ta đã đặt
    else sdt.className="modal__input";

    // trả về giá trị kiểm tra
    if(loi!=""){
        document.getElementById('baoloi').innerHTML="<p>" + loi + "</p>";
        return false;
    }
}
