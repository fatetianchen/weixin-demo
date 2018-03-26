//接口1功能: 服务器验证code的合法性
//	url: http://weixin-test-ziweigamepoch.c9users.io/api/codes/check
//	调用方式：POST
//	codeType可以是0，1，2
//	codeString是code的真正的代码
//	data: {
//		"codeType":"0",
//		"codeString”:”：”
//	}
//
//接口2功能: 查看所有code
//	url ：http://weixin-test-ziweigamepoch.c9users.io/api/codes/
//	调用方式：GET
//
//接口3功能：查看指定code的信息
//	url：https://weixin-test-ziweigamepoch.c9users.io/api/codes/5ab21df751208baf13c80f02
//	调用方式：GET
//
//接口4功能：上传测试code
//url: https://weixin-test-ziweigamepoch.c9users.io/api/codes/insertMany
//调用方式：POST
//Type是code的类型：0表示星游纪code，1表示4合1第一个code，2表示4合1第2类code。
//data：{
//	"type":"0",
//	"codes": ["fydh8f7g7d63", "nc7e8fn3v0dj", "98dgf2hd6sk3", "99djbv650x0o"]
//}
//
//接口5功能：删除code
//url：https://weixin-test-ziweigamepoch.c9users.io/api/codes/5ab21df751208baf13c80f02
//调用方式：delete
//
//
//接口6功能：查看所有用户的信息
//url：https://weixin-test-ziweigamepoch.c9users.io/api/accounts/
//调用方式GET
//
//接口7功能： 查看单个用户信息
//url：https://weixin-test-ziweigamepoch.c9users.io/api/accounts/5ab2420980188abe9dca1580
//调用方式：GET
//返回结果示例：
//{
//  "code0": null,
//  "code1": null,
//  "code2": null,
//  "_id": "5ab2420980188abe9dca1580",
//  "unionid": "user11",
//  "__v": 0
//}
//Code0: 用户的gamepoch生成的code
//Code1: sony的兑换4合一第一个code
//Code2: sony的兑换4合一第二个code
//Unionid: 用户的唯一id 
//
//
//接口8功能：修改单个用户信息，当用户获得code以后使用此接口写入服务器
//url：https://weixin-test-ziweigamepoch.c9users.io/api/accounts/5ab2420980188abe9dca1580
//调用方式：PATCH
//数据格式： {
//		“code0”:”12313231dffg”
//	}

//function onSuccess() {
//	$.ajax({
//		type: "POST",
//		dataType: "json",
//		url: "https://weixin-test-ziweigamepoch.c9users.io/api/codes/insertMany",//url
//		data:{
//		"type":"0",
//		"codes": ["fydh8f7g7d63", "nc7e8fn3v0dj", "98dgf2hd6sk3", "99djbv650x0o"]
//		},
//		success: function (result) {
//			console.log(result)
//		},
//		error : function(err) {
//			console.log(err)
////			alert(err.responseText);
//				}
//		});
//}
//$.ajax({
//		type: "POST",
//		url: "https://weixin-test-ziweigamepoch.c9users.io/api/codes/insertMany",
//		dataType:'json', 
//		success: function(data){
//			console.log(data)
//			},
//		});
//			$.ajax({
//					url: "https://weixin-test-ziweigamepoch.c9users.io/api/codes/5ab21df751208baf13c80f02",
//					dataType:'json', 
//					data: {}, //请求的附加参数，用json对象
//					method:'POST',
//					success: function(data){
////						console.log(data)
//					$('#ajax').html(data[0].post_content);
//					$('.fenye').css('display','none');
//					},
//				});
怎么获取关注公众号 用户微信号微信信息
怎么分享
怎么使用JSSDK