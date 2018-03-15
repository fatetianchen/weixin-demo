
       $.ajax({
					url: "https://weixin-test-ziweigamepoch.c9users.io",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'GET',
					success: function(data){
						console.log(data)
//					$('#ajax').html(data[0].post_content);
//					$('.fenye').css('display','none');
					},
				});