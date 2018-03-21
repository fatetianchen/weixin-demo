$(".bth").attr("disabled",true);
	$("#cdkey").blur(function() {
         	var user = $("#cdkey").val(); 
         	var Chinese = /^[\w\?%&=\-_]+$/;
         	if(user.length == "") {
         		$("#cdkey-text").text("不能为空").css('color','#fe4a4a');
         		return false;
         	}else if(!Chinese.test(user)){
         		$("#cdkey-text").html("含有特殊字符").css('color','#fe4a4a');
         	}else{
         		$("#cdkey-text").html("输入正确").css('color','green');
				return false;
         	}
         })
	$("#PN").blur(function() {
         	var user = $("#PN").val();
         	var Chinese = /^[\w\?%&=\-_]+$/;
         	if(user.length == "") {
         		$("#PN-text").text("不能为空").css('color','#fe4a4a');
         		return false;
         	}else if(!Chinese.test(user)){
         		$("#PN-text").html("含有特殊字符").css('color','#fe4a4a');
         	}else{
         		$("#PN-text").html("输入正确").css('color','green');
				return false;
         	}
         })	
	function isChinese(cdk) {   
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
//		console.log(str);
//		  alert(str);
		  return false;
	} else {
		$(".bth").attr("disabled",false);
		$('.bth').css({'background-color':'green','color':'#fff'});
	}
}
$('#PN').on('blur', function() {
	formbth();
});
$('#cdkey').on('blur', function() {
	formbth();
});
//ajax 提交判断
function formValidate() {
			alert('OK');
		}
$('.button').on('click', function() {
	formValidate();
});