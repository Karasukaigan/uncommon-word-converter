/**
 * 事件捕捉。
 * 
 * Author：Karasukaigan
 * GitHub：https://github.com/Karasukaigan
 */

 $(document).ready(function() {
	var n = 1;
	$("#change-button").click(function() {
		var str = $("#input-box").val();
		$.ajax({
			url: "/main?str=" + str,
			dataType: "text",
			success: function(result) {
				if (result !== "-1") {
					$("#output-box").append("<div>" + n + ". " + str + " > " + result + "</div>");
					n += 1
				} else {
					alert("错误：输入为空！")
				}
			}
		})
	});
	$("#clear-button").click(function() {
		$("#input-box").val("")
	})
});

