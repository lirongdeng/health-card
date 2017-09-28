
//轮播图部分开始
$("#continer .box .flash .left .bot img").mouseenter(function(){
	var xuhao = $(this).index();
	$("#continer .box .flash .left .top img").eq(xuhao).show().siblings('img').hide();
})


$("#continer .box .flash .center .top a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('one').siblings('a').removeClass('one');
	$("#continer .box .flash .center .bot .iden").eq(xuhao).show().siblings('.iden').hide();
	console.log(xuhao);
})
//轮播图部分结束

//健康资讯开始
$("#continer .box .jiankang .left .top a").mouseenter(function(){
	var xuhao = $(this).index();
	$(this).addClass('one').siblings('a').removeClass('one');
	$("#continer .box  .jiankang .left .bot .idens").eq(xuhao).show().siblings('.idens').hide();
	console.log(xuhao);
})





//健康资讯结束











































