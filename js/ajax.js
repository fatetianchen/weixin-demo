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
        	console.log(dada);
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
