$(document).ready(function(){
    // Top 버튼 보이기 | 숨기기
    $(document).scroll( ()=>{
        /* console.log($(document).scrollTop()  ); */
        if ($(window).scrollTop() > 100) { //800 넘으면 버튼이 보여짐니다. 
            $('#goTop').show();
        } else {
            $('#goTop').hide();
        }
    });
       

    // 버튼 클릭시
    $("#goTop").click(function() { 
        $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
        }, 100); // 속도 100
        return false; 
    }); 

    // 사이드버튼1 클릭시
    $("#sideBtn01").click(function() { 
        $('html, body').animate({ scrollTop : 1300
        }, 100); // 속도 100
        return false; 
    }); 

    // 사이드버튼2 클릭시
    $("#sideBtn02").click(function() { 
        $('html, body').animate({ scrollTop : 2650 
        }, 100); // 속도 100
        return false; 
    });

    // 사이드버튼3 클릭시
    $("#sideBtn03").click(function() { 
        $('html, body').animate({ scrollTop : 5920 
        }, 100); // 속도 100
        return false; 
    });

    // 사이드버튼4 클릭시
    $("#sideBtn04").click(function() { 
        $('html, body').animate({ scrollTop : 8100
        }, 100); // 속도 100
        return false; 
    }); 

});//프로그램 끝. 