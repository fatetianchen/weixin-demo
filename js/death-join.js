$("#name").blur(function() {
	         	var user = $("#name").val();
	         	var name = /^[a-zA-Z\u4e00-\u9fa5]+$/;
	         	if(user.length == "") {
	         		$("#name-text").text("名字不能为空").css('color','#fe4a4a');
	         		return false;
	         	}else if(!name.test(user)){
	         		$("#name-text").text("名字不正确").css('color','#fe4a4a');
					return false;
	         	}else{
	         		$("#name-text").html("输入正确").css('color','green');
					return false;
	         	}
	         })
			$("#phone").blur(function isPhoneNo() {
	         	var user = $("#phone").val();
	         	var pattern = /^1[34578]\d{9}$/; 
	         	if(user.length == "") {
	         		$("#phone-text").text("号码不能为空").css('color','#fe4a4a');
	         		return false;
	         	}else if(!pattern.test(user)){
					$("#phone-text").html("请输入11位号码").css('color','#fe4a4a');
					return false;
	         	}else {
	         		$("#phone-text").html("输入正确").css('color','green');
					return false;
	         	}
	         })	
	$("#rens").blur(function() {
	         	var user = $("#rens").val();
	         	if(user.length == "") {
	         		$("#rens-text").text("人数不能为空").css('color','#fe4a4a');
	         		return false;
	         	}else{
	         		$("#rens-text").html("输入正确").css('color','green');
					return false;
	         	}
	         })
	$('#email').blur(function() {
	         	var user = $("#email").val();
	         	var email = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	         	if(user.length == "") {
	         		$("#email-text").text("邮箱不能为空").css('color','#fe4a4a');
	         		return false;
	         	}else if(!email.test(user)){
					$("#email-text").html("邮箱不正确").css('color','#fe4a4a');
					return false;
	         	}else{
	         		$("#email-text").html("输入正确").css('color','green');
					return false;
	         	}
	         })
	function isPhoneNo(phone) {   
		var pattern = /^1[34578]\d{9}$/;   
		return pattern.test(phone);   
	}  
	function isChinaName(name) {  
		var pattern = /^[a-zA-Z\u4e00-\u9fa5]+$/;  
		return pattern.test(name);  
	} 
	function isChinaName(email) {  
		var pattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;  
		return pattern.test(email);  
	} 

		function formValidate() {
		 var str = '';
		 //判断人数
		if($.trim($('#rens').val()).length == 0) {
			str += '人数没有输入\n';
			$('#rens').focus();
		}
		 // 判断名称
		if($.trim($('#name').val()).length == 0) {
			str += '姓名没有输入\n';
			$('#name').focus();
		}else if(isChinaName($.trim($('#name').val())) == false){
			str += '姓名不正确\n';
			$('#name').focus();
		}
		 
		 // 判断手机号码
		if ($.trim($('#phone').val()).length == 0) { 
			str += '手机号没有输入\n';
			$('#phone').focus();
		} else if(isPhoneNo($.trim($('#phone').val())) == false){
			str += '手机号码不正确\n';
			$('#phone').focus();
		}
		// 判断邮箱
		if ($.trim($('#email').val()).length == 0) { 
			str += '邮箱没有输入\n';
			$('#email').focus();
		} else if(isPhoneNo($.trim($('#email').val())) == false){
			str += '邮箱不正确\n';
			$('#email').focus();
		}
		 
		 // 如果没有错误则提交
		if(str != '') {
		  alert(str);
		  return false;
		} else {
//		  $('.auth-form').submit();
			alert('完成');
		 }
		}
		 
		$('.bth').on('click', function() {
		 formValidate();
		});