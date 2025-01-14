// Landing Start

const right_arrow = document.querySelector("#right-arrow")
const left_arrow = document.querySelector("#left-arrow")
const Landing_bg = document.querySelector("#landing")
const bars = document.querySelector("#bar")
const sliding_icons =document.querySelector('#sliding-icons') 
const icon = sliding_icons.querySelectorAll('#icon')

const box =document.querySelector('#box') 

function Removeing_box_background(){
    box.classList.forEach((el)=>{
        if(el.startsWith('bg-['))
        {
            box.classList.remove(el)
        }
    })
    
}

function Adding_box_background(number){
    switch(number){
        case 0:
            box.classList.add('bg-[#0f748f]');
            break;
        case 1:
                box.classList.add('bg-[#0f358fdb]');
                break;
        case 2: 
                box.classList.add('bg-[#8f0f40db]');
            break;
        default:
            return 'no number'
    }
}


// function Removing_icon_background(){
//     icon.forEach((el)=>{
//         if(el.classList.contains('bg-[#0f748f]')){
//             el.classList.remove('bg-[#0f748f]')
//         }
//     })
// }

function Removing_icon_background(){
    icon.forEach((el)=>{
        el.classList.forEach((cls)=>{
            if(cls.startsWith('bg-['))
            {
                el.classList.remove(cls)
            }
        })
        
    })
}

function adding_icon_background(number){
  

     switch(number){
        case 0:
            icon.forEach((el)=>{
                if(el.classList.contains('first')){
                   el.classList.add('bg-[#0f748f]') 
                }
            })
            break;
        case 1:
            icon.forEach((el)=>{
                if(el.classList.contains('seconde')){
                   el.classList.add('bg-[#0f358fdb]') 
                }
            })
            break;
        case 2:
            icon.forEach((el)=>{
                if(el.classList.contains('third')){
                   el.classList.add('bg-[#8f0f40db]') 
                }
            })
            break;
        default:
            return null
    }
    
    
}






const backgrounds = ["bg-[url('../images/landing.jpg')]" , "bg-[url('../images/design-features.jpg')]" , "bg-[url('../images/shuffle-01.jpg')]"]


let x = 0 ;
right_arrow.addEventListener('click' ,()=>{
    Removeing_box_background()
    Removing_icon_background()
    x++;
    if(x > (backgrounds.length - 1)){
        x = 0 ;
    }
    Landing_bg.classList.forEach((el)=>{   
        if(el.startsWith('bg-[')){ 
            Landing_bg.classList.replace(el ,backgrounds[x] )
            adding_icon_background(x)
            Adding_box_background(x)
            
        }

    })

})

left_arrow.addEventListener('click' ,()=>{
    Removeing_box_background()
    Removing_icon_background()
    x --;
    if(x < 0 ){
        x = (backgrounds.length - 1) ;
    }
    else if(x > (backgrounds.length - 1)){
        x = 0 ;
    }
    console.log(`x = ${x}`)
    Landing_bg.classList.forEach((el)=>{   
        if(el.startsWith('bg-[')){ 
            Landing_bg.classList.replace(el ,backgrounds[x] )
            adding_icon_background(x)
            Adding_box_background(x)
        }

    })

})


// Landing End


// Protofoli Section Start

const photos = document.querySelector('#Photos')
const options = photos.querySelectorAll("#option")

const gallery_parent = document.querySelector('#gallery')
const gallery_children = gallery_parent.querySelectorAll("div")





const Gallery = ["bg-[url('../images/shuffle-01.jpg')]" , "bg-[url('../images/shuffle-02.jpg')]",
    "bg-[url('../images/shuffle-03.jpg')]" , "bg-[url('../images/shuffle-04.jpg')]" ,
    "bg-[url('../images/shuffle-05.jpg')]" , "bg-[url('../images/shuffle-06.jpg')]" ,
    "bg-[url('../images/shuffle-07.jpg')]" , "bg-[url('../images/shuffle-08.jpg')]"
]

function Remove_hidden_class(){
    gallery_children.forEach((el)=>{
        el.classList.remove('hidden')
    })
}

function under_more_btn(){
    gallery_children[7].classList.add('hidden')
    gallery_children[8].classList.add('hidden')
    gallery_children[9].classList.add('hidden')
    gallery_children[10].classList.add('hidden')
    gallery_children[11].classList.add('hidden')
    gallery_children[12].classList.add('hidden')
    gallery_children[13].classList.add('hidden')
    gallery_children[14].classList.add('hidden')
}

function gallery_display(number){
    switch(number){
        case 0:
            Remove_hidden_class();
            under_more_btn()
            break;
        case 1:
            Remove_hidden_class()
            under_more_btn()
            gallery_children[0].classList.add('hidden')
            gallery_children[1].classList.add('hidden')
            gallery_children[2].classList.add('hidden')
            gallery_children[3].classList.add('hidden')
            break;
        case 2:
            Remove_hidden_class()
            under_more_btn()
            gallery_children[4].classList.add('hidden')
            gallery_children[5].classList.add('hidden')
            gallery_children[6].classList.add('hidden')
            gallery_children[7].classList.add('hidden')
            break;
        case 3:
            Remove_hidden_class()
            under_more_btn()
            gallery_children[0].classList.add('hidden')
            gallery_children[1].classList.add('hidden')
            gallery_children[2].classList.add('hidden')
            gallery_children[3].classList.add('hidden')
            gallery_children[6].classList.add('hidden')
            gallery_children[7].classList.add('hidden')
            break;
        case 4:
            Remove_hidden_class()
            under_more_btn()
            gallery_children[0].classList.add('hidden')
            gallery_children[1].classList.add('hidden')
            gallery_children[2].classList.add('hidden')
            gallery_children[3].classList.add('hidden')
            gallery_children[4].classList.add('hidden')
            gallery_children[5].classList.add('hidden')
            gallery_children[6].classList.add('hidden')
            break;
        default:
            return 'no'
    }
}


function Removing_gallery_backgroung(){
    options.forEach((option)=>{
        option.classList.forEach((el)=>{
        
            if(el.startsWith('bg-[')){
                option.classList.remove(el)
            }
        })
    })
}

function removing_all_text_white(){
    options.forEach((option)=>{
        option.classList.forEach((cls)=>{
            if(cls.startsWith('text-')){
                option.classList.remove(cls)
            }
        })
    })
}

options.forEach((el)=>{
    el.addEventListener('click' , ()=>{
        Removing_gallery_backgroung()
        removing_all_text_white()
        el.classList.add('bg-[#19c8fa]')
        el.classList.add('text-white')
        if(el.classList.contains('all')){
            gallery_display(0)
        }
        else if(el.classList.contains('app')){
            gallery_display(1)
        }
        else if(el.classList.contains('photo')){
            gallery_display(2)
        }
        else if(el.classList.contains('web')){
            gallery_display(3)
        }
        else if(el.classList.contains('print')){
            gallery_display(4)
        }
    })
})

let counter = 0 ;
const more_btn = document.querySelector('#more');
more_btn.addEventListener('click' , ()=>{
    counter++;
    if((counter % 2) !== 0 )
    {
        Remove_hidden_class()
        more_btn.innerHTML='Less'

    }
    else{
        under_more_btn()
        more_btn.innerHTML='More'
    }
})

// Protofoli Section End


// rating section start

const rate = document.querySelectorAll("#rate")
const rates_area = document.querySelector('#rates')


function Make_all_spans_0(){
    rate.forEach((span)=>{
        span.classList.forEach((cls)=>{
            if(cls.startsWith('w-')){
                span.classList.remove(cls)
            }
        })
    })
}


// Make_all_spans_0()
window.onscroll =()=>{
    let rates_areaTop = rates_area.offsetTop;
    let rates_areaHeight = rates_area.offsetHeight;
    let windowHeight = this.innerHeight;
    let WindowScrollTop = this.pageYOffset;


    if((WindowScrollTop) > (rates_areaTop +rates_areaHeight -windowHeight )){
        rate.forEach((span)=>{
            // console.log(span.dataset.rate);
            
            span.classList.add(`w-[${span.dataset.rate}]`)
 
        })
    }
    else{
        Make_all_spans_0()
    }

}




// rating section End



const contact_us = document.querySelector('#contact-us-btn')

// contact_us.addEventListener('click' , ()=>{
//     window.
// })