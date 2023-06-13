var xeptheo = document.querySelector('.types_of_cars_info_filter')
var body = document.getElementById('app')
var loaixeptheo = document.querySelector('.types_of_cars_info_filter_a-z')





xeptheo.addEventListener('click',function(){
    loaixeptheo.classList.add('open')
   
})
xeptheo.addEventListener('click', function (event){
    event.stopPropagation()
})
body.addEventListener('click',function(){
    loaixeptheo.classList.remove('open')
 
 }) 

 function active_xeploai(){
  
    var chonxeptheos = document.querySelectorAll('.types_of_cars_info_filter_a-z span')
    for(let i=0 ;i < chonxeptheos.length;i++){
        
         chonxeptheos[i].addEventListener('click', function(){
            console.log(chonxeptheos[i])
            chonxeptheos.forEach(function(item,index){
                item.classList.remove('active');
            })
            chonxeptheos[i].classList.add('active');
           
         })

    }




   
 }

 active_xeploai();

 

var product =[
    {id :1,Image:'./asset/img/kia-k3-mau-do-e1632602330763.jpg',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :2,Image:'./asset/img/2.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :3,Image:'./asset/img/3.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :4,Image:'./asset/img/4.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :5,Image:'./asset/img/5.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :6,Image:'./asset/img/6.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :7,Image:'./asset/img/7.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :8,Image:'./asset/img/8.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :9,Image:'./asset/img/9.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :10,Image:'./asset/img/2.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :11,Image:'./asset/img/3.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :12,Image:'./asset/img/4.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :13,Image:'./asset/img/5.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :14,Image:'./asset/img/6.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :15,Image:'./asset/img/7.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :16,Image:'./asset/img/8.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :17,Image:'./asset/img/9.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :18,Image:'./asset/img/2.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :19,Image:'./asset/img/3.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :20,Image:'./asset/img/4.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :21,Image:'./asset/img/5.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :22,Image:'./asset/img/6.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :23,Image:'./asset/img/7.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :24,Image:'./asset/img/8.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :25,Image:'./asset/img/9.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :26,Image:'./asset/img/2.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :27,Image:'./asset/img/3.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :28,Image:'./asset/img/4.png',title :'2022 KIA K3 Premium 1.6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    

]
var sotin = document. querySelector('.types_of_cars_info_title')


function sumproduct(){
    var sum= 0;
    var s = product.map((item, index)=>{
        sum +=1;
        
    })
    sotin.innerHTML = `Có ${sum} tin rao bán xe`
}
sumproduct();


var perpage = 9;
var currentpape = 1;
var start = 0;
var end =perpage;

var totalpage = Math.ceil(product.length/perpage)

var btn_next = document.querySelector('.paging_icon_next')
var btn_pre = document.querySelector('.paging_icon_pre')

function getcurrentpage(currentpape){
    start = (currentpape - 1)*perpage;
    end = currentpape*perpage
}


function renderproduct(){
    html ='';
    var content = product.map((item, index)=>{
        if(index>=start && index < end){

            html += '<div class="car_sale_news_item">';
            html += '<div class="car_sale_news_item_header">';
            html += '<img src="'+item.Image+'" alt="" class="car_sale_news_item_header_img">'
            html += '</div>'
            html += '<div class="car_sale_news_item_info">'
            html += '<div class="car_sale_news_item_title">'
            html += '<a href="" class="car_sale_news_item_title_link">'+item.title +'</a>'
            html += ' </div>'
            html += '<div class="car_sale_news_item_body">'
            html += '<div class="car_sale_news_item_body_parameter">'
            html += '<div class="car_sale_news_item_body_parameter_left">'+ item.sokm+ '</div>'
            html += '<div class="car_sale_news_item_body_parameter_right">'+item.loai +'</div>'
            html += '</div>'
            html += '<div class="car_sale_news_item_body_list_Status">'
            html += ' <div class="car_sale_news_item_body_item_Status">'+item.trt1+'</div>'
            html += '<div class="car_sale_news_item_body_item_Status">'+item.trt2+'</div>'
            html += '</div>'
            html += '</div>'
            html += '<div class="car_sale_news_item_footer">'+item.gia+'</div>'
            html += '</div>'
            html += '</div>'
            return html
        }



    })
    document.querySelector('.car_sale_news_list').innerHTML = html;
}
renderproduct();

function renderlistpape(){
    var html=''
    html+= `<div class ='active'>${1}</div>`
    for(var i=2 ; i<=totalpage;i++){
        html+= `<div>${i}</div>`
    }
    document.querySelector('.paging_page').innerHTML = html
}

renderlistpape();

function lock_next_pre(){
    if(currentpape === totalpage){
        btn_pre.classList.remove('btn_active')
        btn_next.classList.add('btn_active')
    }
    if(currentpape === 1){
        btn_next.classList.remove('btn_active')
        btn_pre.classList.add('btn_active')
    }
}

lock_next_pre();
    


function changpage(){
    var currentpapes = document.querySelectorAll('.paging_page div');
    
    for(let i=0;i<currentpapes.length;i++){
        
        currentpapes[i].addEventListener('click', function () {
            
            
            currentpapes.forEach(function(item,index){
                item.classList.remove('active')
            })
            
            currentpapes[i].classList.add('active')
           
            
            
            var value = i + 1;
            currentpape = value
            lock_next_pre();
            getcurrentpage(currentpape);
            renderproduct();
        })
    }
    
}

changpage();

btn_next.addEventListener('click',function(){
    currentpape++;
    btn_pre.classList.remove('btn_active')
    
    
    if(currentpape > totalpage){
        currentpape = totalpage;
        
    }
    if(currentpape === totalpage){
        btn_next.classList.add('btn_active')
    }
    var currentpapes = document.querySelectorAll('.paging_page div');
    currentpapes[currentpape-2].classList.remove('active')
    currentpapes[currentpape-1].classList.add('active')
    
    getcurrentpage(currentpape)
    renderproduct();
})

btn_pre.addEventListener('click',function(){
    currentpape--;
    btn_next.classList.remove('btn_active')
    
    if(currentpape <= 1){
        currentpape = 1;
        
    }
    
    if(currentpape === 1){
        btn_pre.classList.add('btn_active')
    }
    var currentpapes = document.querySelectorAll('.paging_page div');
    currentpapes[currentpape].classList.remove('active')
    currentpapes[currentpape-1].classList.add('active')
    getcurrentpage(currentpape)
    renderproduct();
})


