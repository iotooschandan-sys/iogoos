
$(document).ready(function(){
    $(".contentbutton").click(function(){
        $(this).hide();
        $(".new-faq__blur").removeClass("new-faq__blur--active");
        $(".contentbox").removeClass("faqheight-active");
    });
});
// ===========STICKY HERE JS
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.new-header').addClass('sticky')
    } else{
        $('.new-header').removeClass('sticky')
    }
});
// ===========PARALLAX JS
$(document).ready(function(){
    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }
});


$(document).ready(function(){
    $(".searchButton").click(function(){
        $(".popupSearch").show();
    })
    $(".closebtnS").click(function(){
        $(".popupSearch").hide();
    })


$(function(){
    $("#searchBlog").keyup(function() {
        var valThis = $(this).val().toLowerCase();
        if (valThis == "") {
            $("#myulsearch > div").show();
        } else {
            $("#myulsearch > div").each(function() {
                var text = $(this).text().toLowerCase();
                text.indexOf(valThis) >= 0 ? $(this).show() : $(this).hide();
            });
        }
        var remainingResults = $('#myulsearch > div[style!="display: none;"]').length;
        if (valThis != '') {
            $('small.form-text.text-muted').html('<strong>'+remainingResults+'</strong> matching results');
        } else {
            $('small.form-text.text-muted').html('');
        } 
    });
});
});
// ===========VERTICLE SLICK SLIDER JS
$(document).ready(function(){
    $('.thumb-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
    });
});

// ===========TOGGLE MOBILE MENU JS
$(document).ready(function(){
    $(".togl-menu").click(function() {
        $(".mobile-sidebar-header").toggle();
    });
});
// ===========COUNTER JS
$(document).ready(function(){
 const counter = document.querySelectorAll('.counting1');
    // covert to array
    const array = Array.from(counter);
    array.map((item) => {
        let counterInnerText = item.textContent;

        let count = 5;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})
$(document).ready(function(){
     const counter = document.querySelectorAll('.counting2');
    // covert to array
    const array = Array.from(counter);
    array.map((item) => {
        let counterInnerText = item.textContent;

        let count = 1500;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})
// ===========VERTICLE SLICK SLIDER JS
$(document).ready(function() {
    $(document).on('click', '.drp-wn', function() {
        if (!$(this).next().hasClass('show')) {
            $('.inner-dropdown').removeClass('show');
            $(this).next().addClass('show');
        } else if ($(this).next().hasClass('show')) {
            $(this).next().removeClass('show');
        }
        $(this).addClass('show');
        $(document).find(".drp-wn").not(this).removeClass('show');
        return false;
    });
});

// ===========BLOG SLICK SLIDER JS
$(document).ready(function(){
    $("#slick-slider").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    jQuery("#slick-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-dark-2.svg" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-dark-1.svg" alt=""></div>',
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            },
        }, ],
    });
    $("#slick-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});
// ===========FUTURE BUSINESS SLICK SLIDER JS
$(document).ready(function(){
    $("#onlineBusiness").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    jQuery("#onlineBusiness").slick({
    centerMode: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '40%',

    dots: true,
    arrows: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-white-2.png" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-white-1.png" alt=""></div>',
        responsive: [{
            breakpoint: 1199,
            settings: {
                centerPadding: '33.33%',
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0',
            },
        }, ],
    });
    $("#onlineBusiness").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});


// ===========FUTURE BUSINESS SLICK SLIDER JS
$(document).ready(function(){
    $("#slick-slider2").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    jQuery("#slick-slider2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-dark-2.svg" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-dark-1.svg" alt=""></div>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
            },
        }, {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            },
        }, ],
    });
    $("#slick-slider2").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});
// ===========CLIENTS SLICK SLIDER JS
$(document).ready(function(){
    $("#clients_logo").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    jQuery("#clients_logo").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-dark-2.svg" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-dark-1.svg" alt=""></div>',
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                adaptiveHeight: true,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
                arrows: true,
                dots: true,
            }, 
        }, ],
    });

    $("#clients_logo").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});
// ===========PARTNERS SLIDER JS
$(document).ready(function(){
    $("#partnerSs").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    
    jQuery("#partnerSs").slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    dots: true,
    arrows: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-white-2.png" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-white-1.png" alt=""></div>',
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
            },
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                dots: true,
            },
        }, ],
    });
    $("#partnerSs").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});
// ===========TESTIMONIALS SLIDER JS
$(document).ready(function(){
    $("#TestiMonials").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    
    jQuery("#TestiMonials").slick({
    centerMode: true,
  centerPadding: '16.5%',
  
  dots: true,
  arrows: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-white-2.png" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-white-1.png" alt=""></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        dots: true,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1,
        arrows: true,
        dots: true,
      }
    }
  ],
    });
    $("#TestiMonials").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});
// ===========SELECT OPTION CUSTOM JS
$(document).ready(function(){
  var modal = document.getElementById("myModal");
var btn = document.getElementById("get-fixed-button");
var span = document.getElementsByClassName("cls-btn")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
$(".get-fixed-button,.requestbtnOnly").click(function(){
    $("body").addClass("overflow");
})
$(".cls-btn").click(function(){
    $("body").removeClass("overflow");
})
// ===========TECHNOLOGIES SLIDER JS
$(document).ready(function(){
    const tabLink = document.querySelectorAll(".nav-link");
    const tabContent = document.querySelectorAll(".tab-pane");

    tabLink.forEach((item) => {
      item.addEventListener("click", activeTab);
    });

    function activeTab(item) {
      const btnTarget = item.currentTarget;
      const content = btnTarget.dataset.content;

      tabContent.forEach((item) => {
        item.classList.remove("is-active");
      });

      tabLink.forEach((item) => {
        item.classList.remove("is-active");
      });

      document.querySelector("#" + content).classList.add("is-active");
      btnTarget.classList.add("is-active");
    }

})

$(document).ready(function(){
    $(".indusCol2 .indusIcon").click(function(){
        $(this).parent().toggleClass("slide").siblings().removeClass("slide");
    });
    $(".indusCol2 .indusIcon2").click(function(){
        $(this).parent().toggleClass("slide").siblings().removeClass("slide");
    });
});













// ===========FAQs JS
$(document).ready(function(){
    $('.accordian-button').click(function(e) {
        var notthis = $('.active').not(this);
        notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
        notthis.toggleClass('active').next('.accordian-content').slideToggle(300);
         $(this).toggleClass('active').next().slideToggle("fast");
        $(this).children('i').toggleClass('icon-plus icon-minus');
    });
});

$(document).ready(function() {
 $(function() {
  $('.card-header').click(function(){
    $(this).parent().toggleClass(' active ');
    $(this).parent().siblings().removeClass(' active '); 
    $('.locContent').stop().slideUp();
    $('.active .locContent').stop().slideDown();
    return false;
  });
});
});

// ===========CLIENTS CONTACT SLIDER JS
$(document).ready(function(){

    jQuery("#clients_logo2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                adaptiveHeight: true,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
                arrows: false,
                dots: false,
            }, 
        }, ],
    });
});



$(document).ready(function(){
      $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '0px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
         responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            slidesToScroll: 3,
            adaptiveHeight: true,
            arrows: false,
            dots: true,
          },
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
      ],
      });
    });

// ===========PORTFOLIO SLIDER JS
$(document).ready(function(){
    $(".portsld").on('init', function(event, slick){
        $(this).append('<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>')
        $(".current-num").text(slick.currentSlide + 1);
        $(".total-num").text(slick.slideCount);
    })
    
    jQuery(".portsld").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    nextArrow: '<div class="main-icon custom-next"><img src="img/arrow-dark-2.svg" alt=""></div>',
    prevArrow: '<div class="main-icon custom-prev"><img src="img/arrow-dark-1.svg" alt=""></div>',
    arrows: true,
    responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            },
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            }, 
        }, ],
    });
    $(".portsld").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".current-num").text(nextSlide + 1);
    })
});




const dropdowns = document.querySelectorAll(".dropdownS");

dropdowns.forEach((dropdown) => {
  // const select = document.querySelector(".select");
  const clsbtn = document.querySelector(".closebtn");
  const divElem = document.querySelector(".allcatego");
  // const caret = document.querySelector(".caret");
  // const menu = document.querySelector(".menu");
  // const options = document.querySelectorAll(".menu li");
  // const selected = document.querySelector(".selected");
  // select.addEventListener("click", () => {
  //   caret.classList.toggle("caret-rotate");
  //   clsbtn.classList.toggle("active");
  //   menu.classList.toggle("menu-open");
  // });
  clsbtn.addEventListener("click", ()=>{
    clsbtn.classList.toggle("active");
    divElem.classList.toggle("active");
  })
  // options.forEach((option) => {
  //   option.addEventListener("click", () => {
  //     selected.classList.add("placeholder");
      
  //     selected.innerText = option.innerText;
  //     caret.classList.remove("caret-rotate");
  //     menu.classList.remove("menu-open");
  //     options.forEach((option) => option.classList.remove("active"));
  //     option.classList.add("active");
  //     clsbtn.classList.remove("active");
  //   });
  // });
});


$(document).ready(function() {
    $(".dmli1").hover(function(){
        $(this).addClass("active");
        $(".submenuU1").addClass("active");
        $(".dmli2,.dmli3,.dmli4,.dmli5,.dmli6,.dmli7").removeClass("active");
        $(".submenuU7,.submenuU2,.submenuU3,.submenuU4,.submenuU5,.submenuU6").removeClass("active");
    });
    $(".dmli2").hover(function(){
        $(this).addClass("active");
        $(".submenuU2").addClass("active");
        $(".dmli1,.dmli3,.dmli4,.dmli5,.dmli6,.dmli7").removeClass("active");
        $(".submenuU1,.submenuU7,.submenuU3,.submenuU4,.submenuU5,.submenuU6").removeClass("active");
    });
    $(".dmli3").hover(function(){
        $(this).addClass("active");
        $(".submenuU3").addClass("active");
        $(".dmli1,.dmli2,.dmli4,.dmli5,.dmli6,.dmli7").removeClass("active");
        $(".submenuU1,.submenuU2,.submenuU7,.submenuU4,.submenuU5,.submenuU6").removeClass("active");
    });
    $(".dmli4").hover(function(){
        $(this).addClass("active");
        $(".submenuU4").addClass("active");
        $(".dmli1,.dmli2,.dmli3,.dmli5,.dmli6,.dmli7").removeClass("active");
        $(".submenuU1,.submenuU2,.submenuU3,.submenuU7,.submenuU5,.submenuU6").removeClass("active");
    });
    $(".dmli5").hover(function(){
        $(this).addClass("active");
        $(".submenuU5").addClass("active");
        $(".dmli1,.dmli2,.dmli3,.dmli4,.dmli6,.dmli7").removeClass("active");
        $(".submenuU1,.submenuU2,.submenuU3,.submenuU4,.submenuU7,.submenuU6").removeClass("active");
    });
    $(".dmli6").hover(function(){
        $(this).addClass("active");
        $(".submenuU6").addClass("active");
        $(".dmli1,.dmli2,.dmli3,.dmli4,.dmli5,.dmli7").removeClass("active");
        $(".submenuU1,.submenuU2,.submenuU3,.submenuU4,.submenuU5,.submenuU7").removeClass("active");
    });
    $(".dmli7").hover(function(){
        $(this).addClass("active");
        $(".submenuU7").addClass("active");
        $(".dmli1,.dmli2,.dmli3,.dmli4,.dmli5,.dmli6").removeClass("active");
        $(".submenuU1,.submenuU2,.submenuU3,.submenuU4,.submenuU5,.submenuU6").removeClass("active");
    });



    // $(".left-menu-services").hover(function(){
    //     $(this).addClass("active");
    //     $(".megamenuServices").addClass("active");
    //     $(".megamenuTechnology").removeClass("active");
    //     $(".left-menu-technologies").removeClass("active");
    // });
    // $(".left-menu-technologies").hover(function(){
    //     $(this).addClass("active");
    //     $(".megamenuServices").removeClass("active");
    //     $(".megamenuTechnology").addClass("active");
    //     $(".left-menu-services").removeClass("active");
    // });

});

$(document).ready(function() {
    $('.pt18.desk_call').click(function() {
        $('.callyouback').addClass('addClass');
    });
    $('.ccall_Close').click(function() {
        $('.callyouback').removeClass('addClass');
    });
    $('.callyouback_bg').click(function() {
        $('.callyouback').removeClass('addClass');
    });
});

// pt18.desk_call country list
const btns = document.querySelectorAll(".tabs__button");
    const tabContent = document.querySelectorAll(".tab-content");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
            addClassFunc(btns[i], "tabs__button--active");
            clearClassFunc(i, btns, "tabs__button--active");

            addClassFunc(tabContent[i], "tab-content--active");
            clearClassFunc(i, tabContent, "tab-content--active");
        });
    }

    function addClassFunc(elem, elemClass) {
        elem.classList.add(elemClass);
    }

    function clearClassFunc(indx, elems, elemClass) {
        for (let i = 0; i < elems.length; i++) {
            if (i === indx) {
                continue;
            }
            elems[i].classList.remove(elemClass);
        }
    }
    function getAndSetVal() {
        var phoneval = $('#phone_popup').val();
        var phonext = $('.selected-contID').val();
        if(phoneval!=''){
            //document.getElementsByClassName("call_india")[0].click();
            window.location.href = 'tel://' + phonext + phoneval;
        }
    }
$('.country-list .country').click(function(){
    var dialcode = $(this).attr('data-dial-code');
    var pcode = $(this).attr('data-phone');
    var flagcode = $(this).attr('data-country-code');
    var cnname = $(this).find('.country-name').text();
    var activeflag = $('.country-list li.active').attr('data-country-code');
    $(".selected-flag .iti-flag").removeClass(activeflag);
    $(".selected-flag .iti-flag").addClass(flagcode);
    
    $(".selected-flag").attr('title',cnname+':'+dialcode);
    $('.selected-contID').val(dialcode);
    $('#phone_popup').val(pcode);
    $('.country-list').toggleClass('hide');
        
})

$('.selected-flag').click(function(){
    $('.country-list').toggleClass('hide');
})  


$(document).ready(function(){
    $(".burgermenubar").click(function(){
        $(".sideNavigation").addClass("trnslte");
        $(".sideNavigationbg").addClass("trnslte");
    });
    $(".snbox-closebtn .crossbtn").click(function(){
        $(".sideNavigation").removeClass("trnslte");
        $(".sideNavigationbg").removeClass("trnslte");
    });
    $(".sideNavigationbg").click(function(){
        $(".sideNavigation").removeClass("trnslte");
        $(this).removeClass("trnslte");
    });

    $(".main-menu-drop-down").click(function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
    });
    $(".menu-item-ddd").click(function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
    });
    $(".mainMenuLi-1").click(function(){
        $(".menu-item-dd").removeClass("active");
    });
    $(".mainMenuLi-2").click(function(){
        $(".menu-item-ddd").parent().removeClass("active");
    });
});