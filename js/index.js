;(function () {
	$(".btn").on("click", function () {
		$(".msg_blck").css(
			"display","block"
		);
	})
	
	//删除
	$(".date a").on("click", function () {
		this.parentNode.parentNode.remove();
	})
	//随机图片
	var imgArr = new Array("img/1a.jpg","img/2a.jpg","img/3a.jpg","img/4a.jpg","img/5a.jpg");
	var imgIndex = Math.floor(Math.random() * 5);
	//添加留言
	var date = new Date();
	var myYear = date.getFullYear();
	var myMonth = date.getMonth();
	var myData = date.getDate();
	var myTime = myYear + "-" + ( myMonth + 1 ) + "-" + myData;
	console.log(myTime)
	var myTarea = document.querySelector(".tarea");
	$(".confirmBtn").on("click", function () {
		var myAdd = "<li class='msg'>"+
	                "<img class='pic' src='" + imgArr[imgIndex] + "' />"+
	                "<p class='msgCont'>"+ myTarea.value +"</p>"+
	                "<div class='date'>"+
	                    "<p>"+ myTime +"</p>"+
	                    "<a href='#'>"+" 删除 "+"</a>"
	                "</div>"
	                "</li>";
	    $(".list").append(myAdd);
	    
	    myTarea.value = "";
	    
	    $(".msg_blck").css(
			"display","none"
		);
		
		$(".date a").on("click", function () {
		this.parentNode.parentNode.remove();
	    })
	})
	
	$(".closeBtn").on("click", function () {
		$(".msg_blck").css(
			"display","none"
		);
		 myTarea.value = "";
	})
})();