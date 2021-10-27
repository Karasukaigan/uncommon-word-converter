/**
 * 生僻字转换。
 * 
 * Author：Karasukaigan
 * GitHub：https://github.com/Karasukaigan
 */

var n = 1;
var dictionary = {}; // 字典，一个JSON对象

/**
 * 监听事件，初始化字典。
 */
$(document).ready(function () {
    $("#change-button").click(function () {
        if ($("#input-box").val() !== "") {
            var str = $("#input-box").val();
            $("#output-box").append("<div>" + n + ". " + str + " > " + change(str) + "</div>");
            n += 1;
        }
        else {
            alert("错误：输入为空！");
        }
    });

    $("#clear-button").click(function () {
        $("#input-box").val("");
    });

    for (var key in pinyin_dict_all) {
        dictionary[key] = pinyin_dict_all[key].split(",");
    }
});

/**
 * 将输入的汉字转换为随机的同音字并输出。
 */
function change(str) {
    var strChanged = ""; // 转换后的文字列
    var strList = str.split(""); // 将输入的文字列切分为数组
    var pinyinList = []; // 输入汉字对应的拼音
    var charList = []; // 所有备选的汉字

    /**
     * 获取汉字所对应的拼音。
     * 数字等字典内没有的字符将被省略。
     */
    var num = 0;
    for (var i = 0; i < strList.length; i++) {
        for (var key in dictionary) {
            if (strList[i] === key) {
                pinyinList[num] = dictionary[key];
                num += 1;
                break;
            }
        }
    }

    /**
     * 寻找拼音所对应的汉字。
     */
    num = 0;
    for (var i = 0; i < pinyinList.length; i++) {
        charList[i] = [];
        for (var j = 0; j < pinyinList[i].length; j++) {
            for (var key in dictionary) {
                for (var k = 0; k < dictionary[key].length; k++) {
                    if (pinyinList[i][j] === dictionary[key][k]) {
                        charList[i][num] = key;
                        num += 1;
                    }
                }
            }
        }
        num = 0;
    }

    /**
     * 随机转换为同音字。
     */
    for (var i = 0; i < charList.length; i++) {
        strChanged += charList[i][Math.floor(Math.random() * (charList[i].length - 0)) + 0];
    }

    return strChanged;
}

