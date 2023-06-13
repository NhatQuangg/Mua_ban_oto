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
    {id :2,Image:'./asset/img/2.png',title :'2020 Kia Seltos Premium 1.4',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :3,Image:'./asset/img/3.png',title :'2021 Suzuki XL7 Base 1.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'800 triệu' },
    {id :4,Image:'./asset/img/4.png',title :'2021 Suzuki XL8 Base 1.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'600 triệu'},
    {id :5,Image:'./asset/img/5.png',title :'2021 Toyota Vios E 1.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'1 tỉ' },
    {id :6,Image:'./asset/img/6.png',title :'2021 Suzuki XL10 Base 1.5 - Màu Trắng',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :7,Image:'./asset/img/7.png',title :'2015 Toyota Sienna Limited 3.5 V6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'1 tỉ' },
    {id :8,Image:'./asset/img/8.png',title :'2021 Volvo XC60 Base 2.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :9,Image:'./asset/img/9.png',title :'2020 Mitsubishi Xpander Cross AT 1.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'900 triệu' },
    {id :10,Image:'./asset/img/2.png',title :'2018 Toyota Fortuner V 2.7',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :11,Image:'./asset/img/3.png',title :'2019 Kia Sedona Platinum DATH D 2.2',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'899 triệu' },
    {id :12,Image:'./asset/img/4.png',title :'2019 Honda Jazz RS 1.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'500 triệu'},
    {id :13,Image:'./asset/img/5.png',title :'2020 Toyota Corolla Cross HEV 1.8',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'789 triệu' },
    {id :14,Image:'./asset/img/6.png',title :'2020 Toyota Camry 2.5 Q 2.5',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :15,Image:'./asset/img/7.png',title :'2021 Toyota Corolla Cross HEV 1.8',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'1 tỉ 2' },
    {id :16,Image:'./asset/img/8.png',title :'2021 Kia Sedona Luxury DATH D 2.2',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :17,Image:'./asset/img/9.png',title :'2021 Toyota Fortuner G 2.4',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'850 triệu' },
    {id :18,Image:'./asset/img/2.png',title :'2021 Toyota Wigo AT 1.2',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'700 triệu'},
    {id :19,Image:'./asset/img/3.png',title :'2014 Jaguar XJ Premium Luxury 3.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'799 triệu' },
    {id :20,Image:'./asset/img/4.png',title :'2011 Audi A7 Sportback 3.0 V6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'689 triệu'},
    {id :21,Image:'./asset/img/5.png',title :'2014 Toyota Yaris E 1.3',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu' },
    {id :22,Image:'./asset/img/6.png',title :'2014 Mercedes-Benz E Class E200 2.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    {id :23,Image:'./asset/img/7.png',title :'2015 Porsche Macan S 2.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'630 triệu' },
    {id :24,Image:'./asset/img/8.png',title :'2015 Mercedes-Benz E Class E250 2.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'930 triệu'},
    {id :25,Image:'./asset/img/9.png',title :'2017 Land Rover Range Rover LR5 HSE 3.0 V6',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'400 triệu' },
    {id :26,Image:'./asset/img/2.png',title :'2018 Toyota Land Cruiser VX.S 4.6 V8',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'2 tỉ'},
    {id :27,Image:'./asset/img/3.png',title :'2018 Mini Cooper S 2.0',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'610 triệu' },
    {id :28,Image:'./asset/img/4.png',title :'2019 Bentley Bentayga Base 4.0 V8',sokm : '10.500 km',loai :'Tự động',trt1:'Đầy đủ thông tin lịch sử hãng',trt2:'Xe nguyên bản',gia:'750 triệu'},
    

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


