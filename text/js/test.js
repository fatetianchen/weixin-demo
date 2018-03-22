	$(".bth").attr("disabled",true);
	$("#cdkey").bind('input propertychange',function(){
         	var user = $("#cdkey").val(); 
         	var Chinese = /^[\w\?%&=\-_]+$/;
         	if(user.length == ""){
         		$("#cdkey-text").text("不能为空").css('color','#fe4a4a');
         		return false;
         	}else if(!Chinese.test(user)){
         		$("#cdkey-text").html("含有特殊字符").css('color','#fe4a4a');
         	}else{
         		$("#cdkey-text").html("输入正确").css('color','green');
				return false;
         	}
        })
	$("#PN").bind('input propertychange',function(){
         	var user = $("#PN").val();
         	var Chinese = /^[\w\?%&=\-_]+$/;
         	if(user.length == ""){
         		$("#PN-text").text("不能为空").css('color','#fe4a4a');
         		return false;
         	}else if(!Chinese.test(user)){
         		$("#PN-text").html("含有特殊字符").css('color','#fe4a4a');
         	}else{
         		$("#PN-text").html("输入正确").css('color','green');
				return false;
         	}
        })	
function isChinese(cdk){   
		var pattern =/^[\w\?%&=\-_]+$/;   
		return pattern.test(cdk);   
	}  
function formbth() {
	var str = '';
	$(".bth").attr("disabled",true);
	$('.bth').css({'background-color':'#ccc','color':'#888'});
	if($.trim($('#cdkey').val()).length == 0) {
			str += '不能为空\n';
			
	}else if(isChinese(($('#cdkey').val())) == false){
			str += '含特殊字符\n';
	}
	
	if($.trim($('#PN').val()).length == 0) {
			str += '不能为空\n';
	}else if(isChinese(($('#PN').val())) == false){
			str += '含特殊字符\n';
	}
	if(str != '') {
		  return false;
	} else {
		$(".bth").attr("disabled",false);
		$('.bth').css({'background-color':'green','color':'#fff'});
	}
}
$('#PN').bind('input propertychange', function() {
	formbth();
});
$('#cdkey').bind('input propertychange', function() {
	formbth();
});
function formValidate(){
		postData();
		// todo：成功。。。。
//		onSuccess();
//		// todo: 失败。。。
//		onFailure();
	}
$('.button').on('click', function() {
	formValidate();
});
/*提交数据*/ 
function postData(url, data) {
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",//预期服务器返回的数据类型
		url: "http://weixin-test-ziweigamepoch.c9users.io/api/codes/check",//url
		data: {
		"codeType":"0",
		"codeString":$('#cdkey').val()
		},
		success: function (result) {			
			if(result.isUsed == false){
				alert('兑换成功');
				var codeId = [];
				$.ajax({ //获取四个conde
				    type: "GET",
				    dataType: "json",
				    url: "http://weixin-test-ziweigamepoch.c9users.io/api/codes",//?isused=false
				    data: {},
				    success: function (result) {
//					console.log(result);
				        $(".title").empty(); 
				        for(var i in result) { 
				            if(result[i].codeType==1){ 								
				                codeId.push( result[i]);
				            }
				        }
				        $('.title').html("<p>"+codeId[0].codeString+"</p>");
						$('#cdkey').val("");
						$(".bth").attr("disabled",true);
						$('.bth').css({'background-color':'#ccc','color':'#888'});
//				        console.log(codeId[0]);				        
				    },
				});
//				此处修改code参数
//				var codeId = "https://weixin-test-ziweigamepoch.c9users.io/api/codes/"+result._id+"?_method=PATCH";
////				console.log(codeId)
//				$.ajax({
//					url: codeId,
//					method:'POST',
//					data:{"isUsed":false},//false true
//					success: function(data){
//						console.log(data)
//					},					
//					error : function(err) {
//						console.log(err);
//					}
//				});
			}else{
				alert('改code已使用');
			}
		},
		error : function(err) {
			alert(err.responseText);
				}
		});
}