//$.ajax({
//  type:'GET',
//  url:'https://weixin-test-ziweigamepoch.c9users.io/api/users',
//  dataType:'json',
//  success:function(data){
//  	console.log(data)
//  },
//  error:function(jqXHR){
//  }
//});
$.ajax({  
		type:'GET',
        url:"http://query.yahooapis.com/v1/public/yql",  
        dataType:'jsonp',  
        data: {
            q: "select * from json where url=\'https://weixin-test-ziweigamepoch.c9users.io/api/users\'",
            format: "json"
        },
        success:function(d) { 
//      	console.log(JSON.stringify(d));
        	var dada = d.query.results.json.json;
//        	console.log(dada);
			for(var i in dada) {
				if(dada[i].matchId==1){ 
//					console.log(dada[i].headImg);
					$('#arrul1').append("<li><div class='poa toux'><img src='"+dada[i].headImg+"' alt='' /></div><div class='D-name poa'><h4>"+dada[i].name+"</h4><p><span></span>"+dada[i].location+"</p></div><div class='D-sj poa'>"+dada[i].score+"</div></li>")
				}else if(dada[i].matchId==2){
					$('#arrul2').append("<li><div class='poa toux'><img src='"+dada[i].headImg+"' alt='' /></div><div class='D-name poa'><h4>"+dada[i].name+"</h4><p><span></span>"+dada[i].location+"</p></div><div class='D-sj poa'>"+dada[i].score+"</div></li>")
				}else if(dada[i].matchId==3){
//					console.log(dada[i].headImg);
					$('#arrul3').append("<li><div class='poa toux'><img src='"+dada[i].headImg+"' alt='' /></div><div class='D-name poa'><h4>"+dada[i].name+"</h4><p><span></span>"+dada[i].location+"</p></div><div class='D-sj poa'>"+dada[i].score+"</div></li>")
				}
			}
        },  
      // timeout:3000  
    });  
//	$.ajax({
//              url:"https://weixin-test-ziweigamepoch.c9users.io/api/users",
//              dataType:"jsonp",
//              processData: false,
//              type:"get",
//              jsonp: 'jsonpCallback',
//              success:function(data){ 
//                  console.log(JSON.parse(data));//没有走这个函数
//              },
//              error:function(XMLHttpRequest, textStatus, errorThrown){
//                   console.log(XMLHttpRequest.status);//此行打印的是 200
//                     console.log(XMLHttpRequest.readyState);//此行打印的是 4
//                     console.log(textStatus); //此行打印的是parsererror
//              }
//          })
//$(document).ready(function(){
// var url="https://weixin-test-ziweigamepoch.c9users.io/api/users";
// $.ajax({
//   url:url,
//   dataType:'jsonp',
//  // processData: false, 
//   type:'get',
//   success:function(data){
//   	console.log(data)
////     alert(data.name);
//   },
//   error:function(XMLHttpRequest, textStatus, errorThrown) {
//     alert(XMLHttpRequest.status);
//     alert(XMLHttpRequest.readyState);
//     alert(textStatus);
//   }});
// });
//

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
//$.ajax({
//          type:'get',
//          url:'https://weixin-test-ziweigamepoch.c9users.io/api/users',
//          dataType:'jsonp',
//          jsonp:'callback',
//          jsonpCallback:"successCallback",
//          success:function(data){
//              alert("12222222222222222222222222");
//              alert(data.name);
//          },
//          error:function(XMLHttpRequest, textStatus, errorThrown){
//              alert("33333333333333333");
//               alert(XMLHttpRequest.status);
//               alert(XMLHttpRequest.readyState);
//               alert(textStatus);
//          }
//      }); 