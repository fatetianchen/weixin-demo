function formValidate() {
 var str = '';
 
 // 判断名称
 if($.trim($('#name').val()).length == 0) {
  str += '名称没有输入\n';
  $('#name').focus();
 }
 
 // 判断手机号码
 if ($.trim($('#phone').val()).length == 0) { 
  str += '手机号没有输入\n';
  $('#phone').focus();
 } else {
  if(isPhoneNo($.trim($('#phone').val()) == false)) {
   str += '手机号码不正确\n';
   $('#phone').focus();
  }
 }
 // 如果没有错误则提交
 if(str != '') {
  alert(str);
  return false;
 } else {
  $('.auth-form').submit();
 }
}
 
$('#submit').on('click', function() {
 formValidate();
});