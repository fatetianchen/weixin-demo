$(document).ready(function(e) {
        $(".qieh a").click(function(){
          $(".qieh a").css({'color':'#51c4d4','background-color':'#fff'}).eq($(this).index()).css({'color':'#fff','background-color':'#51c4d4'});
          $(".qieh-1 ul").css('display','none').eq($(this).index()).css('display','block')
        });
    });
