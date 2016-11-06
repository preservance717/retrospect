/**
 * Created by gaole on 11/4/16.
 */
window.onload = function () {
    var oDiv = document.getElementById("div1");
    var oP = document.getElementsByTagName("p")[0];
    var oT = document.getElementsByTagName("textArea")[0];
    var oA = document.getElementsByTagName("a")[0];
    var oSendDiv = document.getElementsByClassName("send")[0];

    oT.onfocus = function () {
        oP.innerHTML = '<span class="text">还可以输入</span><span>140</span>字';
        oSendDiv.classList.add('clicked');//给oSendDiv添加clicked class属性
    }

    oT.onblur = function () {
        if (oT.value === "") {
            oP.innerHTML = "王健林叫板迪斯尼：有万大在，上海迪斯尼20年内盈不了利";
        }
        oSendDiv.classList.add('clicked');
    }

    oT.oninput = function () {
        var num = Math.ceil(getLength(oT.value) / 2);
        var $span = oDiv.getElementsByTagName('span');
        var $textSpan = $span[0];
        var $numSpan = $span[1];
        if (!$numSpan) {
            return;
        }
        if (num <= 140) {
            $numSpan.innerHTML = '还可以输入';
            $numSpan.innerHTML = 140 - num;
            $numSpan.style.color = '';
        }else{
            $numSpan.innerHTML = '已超过';
            $numSpan.innerHTML = 140 - num;
            $numSpan.style.color = 'red';
        }

        if(oT.value === '' || num > 140){
            oA.className = 'disable';
        }else{
            oA.className = '';
        }
    }
    function getLength(str) {
        return String(str).replace(/[^\x00-\xff]/g, 'aa').length;
    }

    oA.onclick = function () {
        if(this.className === 'disable'){
            alert('maybe has problem');
        }else{
            alert('发布成功！')
        }
    };
};
