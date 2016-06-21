//数据定义区
	var insertarray = new Array();//动态生成需要插入的数据
	var rnumbers=new Array();     //生成索引表
	var helpArray= new Array();   //格式为（1,2）等
	var time=40;                  //定时器变量
	var click1=null;              //保存点击事件1的对象
	var click2=null;			  //保存点击事件2的对象
	/**************************************************************************
	创建表格生成随机数并插入
	**************************************************************************/
	function createTable(count){
		var number = count;//传入参数
		var tt=document.getElementById("mytable");
		if(tt!=null){
			document.getElementById("content").removeChild(tt);
		}
		var table = document.createElement("table");
		table.id="mytable";
		table.border = "2px";
		table.align="center";
		var tempId=1;
		for(var i = 0;i<number;i++){
			var row = table.insertRow();//生成行
			for(j=0;j<number;j++){
				var id=tempId++;
				var cell = row.insertCell();//生成列
				cell.id =id;
				cell.height="90px";
				cell.width="90px";
				cell.onclick=cellClick;
				cell.innerHTML=" ";
			}
		}
		//在div区域绘制表格
		var content = document.getElementById("content");
		content.appendChild(table);
		//生成随机数，在此加入一个判断，判断是奇数还是偶数
		//获得当前选择的option标签的值
		var length = document.getElementById("game_select").value;
		setTimeout(changeColorToblack,(length*length*1000));//将背景色变黑，此时的值是动态变化的
		if((length%2)!=0){//判断奇偶
			createRandom1(length);
			//生成要插入的顺序数组innsertarray
			insertArray(length);
			//之后执行插入操作
			arrayInsert();
			rnumbers.length=0;
		}else{
			createRandom2(length);
			//生成要插入的顺序数组innsertarray
			insertArray(length);
			//之后执行插入操作
			arrayInsert();
			rnumbers.length=0;
		}	
		createHelpArray();//helpArray初始化
	}
	/**************************************************************************
	产生需要的数据格式的数组（1,1,2,2,3,3）  采取插入的方式来做,javascript
	为我们内置了尾部插入方法，push().
	**************************************************************************/
	function insertArray(number){
		var	needsNO=0;
		if(number*number%2!=0){
			needsNO=(number*number-1)/2;
		}else{
			needsNO=number*number/2;
		}
		for(var i=0;i<needsNO;i++){//连续两次在尾部插入（i+1）
			insertarray.push(i+1);
			insertarray.push(i+1);
		}
	}
	/**************************************************************************
	产生随机数的函数奇数版本:
	此方法产生一组互不相同的随机数，但是经过仔细分析我们发现：
	假设方格的为10*10，那么要产生一百个不相同的数字，分布在1~100之间，
	只剩下最后两个数的时候，产生倒数第二个数成功的几率为2/100；最后一个数成功的几率仅为1/100
	两次事件相互独立，也就是说，两次成功生成的几率不足万分之一，如果这个数在大呢？
	为此，给出此方法的改进版本！
	function createSuperRandom()
	**************************************************************************/
	function createRandom1(number){//传入的参数动态改变随机数的个数
		 var num = number;
		 for(var i=0;i<(num*num-1);i++){//奇数的话生成number的平方-1个数
			 var num1=Math.random();//产生的随机数范围是0~1
			 var num2=(num1*num*num)+1;//产生1-num*num的小数
			 var num3=parseInt(num2);//对小数取得整数
			 if(i==0){ //第一次装，不需要判断
				rnumbers[i]=num3;
			 }else{ //往后每次都需要和数组中的每一位进行比较
				var flag=true;//默认当前的数不存在于数组中
				for(var j=0;j<rnumbers.length;j++){
					if(rnumbers[j]==num3){
						i--;
						flag=false;
					}
				}
				if(flag){
					rnumbers[i]=num3;
				}
			 }
		 }
	}
	/**************************************************************************
	产生随机数的函数偶数版本
	**************************************************************************/
	function createRandom2(number){//传入的参数动态改变随机数的个数
		 //var rnumbers=new Array();
		 var num = number;
		 for(var i=0;i<(num*num);i++){//偶数的话生成num的平方个数
			 var num1=Math.random();//产生的随机数范围是0~1
			 var num2=(num1*num*num)+1;//产生1-NUm*num的小数
			 var num3=parseInt(num2);//对小数取得整数

			 if(i==0){ //第一次装，不需要判断
				rnumbers[i]=num3;
			 }else{ //往后每次都需要和数组中的每一位进行比较
				var flag=true;//默认当前的数不存在于数组中
				for(var j=0;j<rnumbers.length;j++){
					if(rnumbers[j]==num3){
						i--;
						flag=false;
					}
				}
				if(flag){
					rnumbers[i]=num3;
				}
			 }
		 }
	}
	/**************************************************************************
	将产生好的数据插入表格中
	**************************************************************************/
	function arrayInsert(){
		for(var i =0;i<rnumbers.length;i++){
			var cell = document.getElementById(rnumbers[i]);
			cell.innerHTML =insertarray[i];
			}
			//插入数据成功后清零insertarray数组，方便下次使用
			insertarray.length = 0;
	}
	/**************************************************************************
	采用遍历的方法将背景色变黑
	**************************************************************************/
	function changeColorToblack(){
		var tt = document.getElementById("mytable");
		for (var i =0;i<tt.rows.length ; i++){
			var row=tt.rows[i];
			for(var j = 0;j<row.cells.length ;j++ ){
				row.cells[j].style.backgroundColor="black";
			}
		}
	}
	/**************************************************************************
	采用遍历的方法将背景色变白
	**************************************************************************/
	function changeColorTowhite(){
		var tt = document.getElementById("mytable");
		for (var i =0;i<tt.rows.length ; i++){
			var row=tt.rows[i];
			for(var j = 0;j<row.cells.length ;j++ ){
				row.cells[j].style.backgroundColor="white";
			}
		}
	}
	/**************************************************************************
	处理点击事件
	**************************************************************************/
	function cellClick(){
		//取得事件源
		var cell = event.srcElement;
		cell.style.backgroundColor="white";
		if(click1==null){//第一次点击
			click1=cell;
		}else{
			click2=cell;
			if(click1.innerText!=click2.innerText){
				setTimeout(changeColorToblack,300);
			}
			else{
				 removeVal(click1.id+","+click2.id);
				 removeVal(click2.id+","+click1.id);
			}
			click1=null; 
			click2=null;
		}
		if(isPass()){
			if(confirm("已经通关，是否继续！")){
				var len = document.getElementById("game_select").value;
				parseInt();
				document.getElementById("game_select").value=parseInt(len)+1;
				createTable(document.getElementById("game_select").value);
			}
		}	
	}
	/**************************************************************************
	处理是否通关
	**************************************************************************/
	function isPass(){
		var tt=document.getElementById("mytable");
		var flag=true; 
		for(var i=0;i<tt.rows.length;i++){
				var row=tt.rows[i];
				for(var j=0;j<row.cells.length;j++){
					//通关的依据是 单元格上有数字的全部要变白
					if(row.cells[j].innerText!="" && row.cells[j].style.backgroundColor!="white"){
						flag=false;
						break;//节约计算机资源
					}
				}
			}
			return flag;
	}
	/**************************************************************************
	计时处理函数
	**************************************************************************/
	var temp=screen.width;
	function timeCount(){
		document.getElementById('txt').value=time;
		$("div_content").style.width=temp+"px";
		temp-=40;
		time=time-1;
		timer=setTimeout("timeCount()",50);
		if(time==-1){
			clearTimeout(timer);
			if(confirm("游戏时间已用完，需要重新开始吗？")){
				var length =$("game_select").value;
				createTable(length);
				$("div_content").style.width=screen.width;
				temp = screen.width;
				time=40;
			}
		}
	}
	/**************************************************************************
	生成帮助数组的函数
	**************************************************************************/
	function createHelpArray(){
		var length = document.getElementById("game_select").value;//获得边长
		//根据单元格的ID去的单元格的内容，比较
		var helpArrayIndex=0;
		for(var i =0;i<(length*length);i++){
			//取得每一个单元格
			var cellValue = $(i+1).innerText;
			for(var j =i+1;j<(length*length);j++){
				var cellValueCurrent = $(j+1).innerText;
				if(cellValue==cellValueCurrent){
					helpArray[helpArrayIndex++]=(i+1)+","+(j+1);
				}
			}
		}
	}
	/**************************************************************************
	处理帮助的函数
	**************************************************************************/
	function myHelp(){
		if(helpArray.length==0){
			alert("亲爱的，已经没有提示了！");
		}else{
			var ans = helpArray[0];
			var points = ans.split(",");//为啥这里取不到对象呢？？
			$(points[0]).style.color="red";
			$(points[1]).style.color="red";
			removeVal(ans);//移除已经提示过的元素
		}	
	}
	/**************************************************************************
	取得具体的对象
	**************************************************************************/
	function $(oid){
			return document.getElementById(oid);
		}
	/**************************************************************************
	移除helpArray数组中的元素
	***************************************************************************/
	function removeVal(val){	
		for(var i = 0;i<helpArray.length;i++){
			if(helpArray[i]==val){
				helpArray.splice(i,1);
			}
		}
	}