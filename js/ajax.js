//$.ajax({
//type:"get",
//url:"https://weixin-test-ziweigamepoch.c9users.io",/*url写异域的请求地址*/
//dataType:"jsonp",/*加上datatype*/
//jsonpCallback:"cb",/*设置一个回调函数，名字随便取，和下面的函数里的名字相同就行*/
//success:function(){
//console.log(cb)
//}
//});
//     $.ajax({
//					url: "https://weixin-test-ziweigamepoch.c9users.io",
//					dataType:'json', 
//					data: {userId:"1"}, //请求的附加参数，用json对象
//					method:'GET',
//					success: function(data){
//						console.log(data)
////					$('#ajax').html(data[0].post_content);
////					$('.fenye').css('display','none');
//					},
//				});
//$(document).ready(function(){
// var url="https://weixin-test-ziweigamepoch.c9users.io";
// $.ajax({
//   url:url,
//   dataType:'json',
//   processData: false, 
//   type:'get',
//   success:function(data){
//     alert(data.name);
//   },
//   error:function(XMLHttpRequest, textStatus, errorThrown) {
//     alert(XMLHttpRequest.status);
//     alert(XMLHttpRequest.readyState);
//     alert(textStatus);
//   }});
// });
//function showCustomer(str)  
//{  
//var xmlhttp;     
//if (str=="")  
//{  
//document.getElementById("txtHint").innerHTML="";  
//return;  
//}  
//if (window.XMLHttpRequest)  
//{// code for IE7+, Firefox, Chrome, Opera, Safari  
//xmlhttp=new XMLHttpRequest();  
//}  
//else  
//{// code for IE6, IE5  
//xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  
//}  
//xmlhttp.onreadystatechange=function()  
//{  
//if (xmlhttp.readyState==4 && xmlhttp.status==200)  
//  {  
//  document.getElementById("txtHint").innerHTML=xmlhttp.responseText;  
//  }  
//}  
//xmlhttp.open("GET","getcustomer.asp?q="+str,true);  
//xmlhttp.send();  
//}  

//$.ajax({
//type:"GET",
////data:{tab:"123"},//这里如何获取动态超链接GET参数???
//url:"https://weixin-test-ziweigamepoch.c9users.io",
//async:false,
//success:function(data) {
////$("#con").html(data);
//console.log(data);
//}
//});

//(function(window, document) {
//'use strict';
//var jsonp = function(url, data, callback) {
//  //1、挂载回调函数
//  var fnsuffix = Math.random().toString().replace('.', '');
//  var cbFuncName = 'my_json_cb' + fnsuffix;
//  window[cbFuncName] = callback;
//  //2、将data转换成url字符串的形式
//  //{id=1,count=4}==>id=1&count=4
//  var querystring = url.indexOf('?') == -1 ? '?' : '&';   //判断url中最后是否有？，没有则为？
//  for (var key in data) {
//    querystring += key + '=' + data[key] + '&';
//  }
//  //3、处理url中回调函数 url+=callback=sdgade
//  querystring += 'callback=' + cbFuncName;
//  //querystring=?id=1&count=4&callback=sdgade
//  //4、创建一个script标签
//  var scriptElement = document.createElement('script');
//  scriptElement.src = url + querystring;
//  //5、把script标签放到页面上
//  document.body.appendChild(scriptElement);
//};
//window.$jsonp = jsonp;
//})(window, document)