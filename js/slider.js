window.onload = function(){
	//第一步，选取要操作的元素
			 
        var box = document.querySelectorAll('#adver')[0];
        var oUl = document.querySelectorAll('.slider-list')[0];
        var aLi = document.querySelectorAll('.slider-list li');
        var aImg = document.querySelectorAll('.slider-list li img');
        var aNum = document.querySelectorAll('.count li');
        var index = 0;
        var timer = dd = null;
        var opa = 0;



        //先写手动的
        for(var i=0;i<aNum.length;i++){
            //先把下标存储一下
            aNum[i].index = i;
            aNum[i].onmouseover = function(){
                show(this.index);
            }
        }
        
        function show(a){
            //这里，要改变下index的当前值
            index = a;
            for(var i=0;i<aLi.length;i++){
                aLi[i].style.opacity = 0;
                aNum[i].className = '';

            }
            //让当前的图片显示
            aNum[a].className = 'current';
            aLi[a].style.opacity = 1;
            dd = setInterval(function(){
                opa  = opa + 2;
                aLi[index].style.opacity = opa / 100;
                if(opa == 100){
                    opa = 0;
                    clearInterval(dd);
                }
            },15);
        }


        //再写自动的
        function autoplay(){
            /*clearInterval(dd);*/
            timer = setInterval(function(){
                index++;
                if(index >= aLi.length){
                    index = 0;
                }
                show(index);
            },2000)
        }
        autoplay();

        //当鼠标移入这个box的时候，这个autoplay停止,移出的时候继续

        box.onmouseover = function(){
            clearInterval(timer);
        }
        box.onmouseout = function(){
            autoplay();
        }
}
