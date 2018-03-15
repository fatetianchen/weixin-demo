	var map = new BMap.Map("allmap");  
    var point = new BMap.Point(121.4996580000,31.1943060000);
    map.centerAndZoom(point, 16);  
    map.enableScrollWheelZoom(); 

    var myIcon = new BMap.Icon("myicon.png",new BMap.Size(30,30),{
        anchor: new BMap.Size(10,10)    
    });

    var marker=new BMap.Marker(point,{icon: myIcon});  
    map.addOverlay(marker);  

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            //map.panTo(r.point);//地图中心点移到当前位置
            var latCurrent = r.point.lat;
            var lngCurrent = r.point.lng;
            //alert('我的位置：'+ latCurrent + ',' + lngCurrent);            //location.href="http://api.map.baidu.com/direction?origin="+latCurrent+","+lngCurrent+"&destination=31.24916171,121.48789949&mode=driving&region=上海&output=html";
//31.24916171,121.48789949
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
 //   map.addOverlay(marker);  
//  var licontent="<b>健龙森羽毛球馆</b><br>";  
//      licontent+="<span><strong>地址：</strong>北京市通州区滨河中路108号</span><br>";  
//      licontent+="<span><strong>电话：</strong>(010)81556565 / 6969</span><br>";          
//  var opts = { 
//      width : 200,
//      height: 80,
//  };         
//    var  infoWindow = new BMap.InfoWindow(licontent, opts);  
//  marker.openInfoWindow(infoWindow);  
//  marker.addEventListener('click',function(){
//      marker.openInfoWindow(infoWindow);
//  });