//���ݶ�����
	var insertarray = new Array();//��̬������Ҫ���������
	var rnumbers=new Array();     //����������
	var helpArray= new Array();   //��ʽΪ��1,2����
	var time=40;                  //��ʱ������
	var click1=null;              //�������¼�1�Ķ���
	var click2=null;			  //�������¼�2�Ķ���
	/**************************************************************************
	����������������������
	**************************************************************************/
	function createTable(count){
		var number = count;//�������
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
			var row = table.insertRow();//������
			for(j=0;j<number;j++){
				var id=tempId++;
				var cell = row.insertCell();//������
				cell.id =id;
				cell.height="90px";
				cell.width="90px";
				cell.onclick=cellClick;
				cell.innerHTML=" ";
			}
		}
		//��div������Ʊ��
		var content = document.getElementById("content");
		content.appendChild(table);
		//������������ڴ˼���һ���жϣ��ж�����������ż��
		//��õ�ǰѡ���option��ǩ��ֵ
		var length = document.getElementById("game_select").value;
		setTimeout(changeColorToblack,(length*length*1000));//������ɫ��ڣ���ʱ��ֵ�Ƕ�̬�仯��
		if((length%2)!=0){//�ж���ż
			createRandom1(length);
			//����Ҫ�����˳������innsertarray
			insertArray(length);
			//֮��ִ�в������
			arrayInsert();
			rnumbers.length=0;
		}else{
			createRandom2(length);
			//����Ҫ�����˳������innsertarray
			insertArray(length);
			//֮��ִ�в������
			arrayInsert();
			rnumbers.length=0;
		}	
		createHelpArray();//helpArray��ʼ��
	}
	/**************************************************************************
	������Ҫ�����ݸ�ʽ�����飨1,1,2,2,3,3��  ��ȡ����ķ�ʽ����,javascript
	Ϊ����������β�����뷽����push().
	**************************************************************************/
	function insertArray(number){
		var	needsNO=0;
		if(number*number%2!=0){
			needsNO=(number*number-1)/2;
		}else{
			needsNO=number*number/2;
		}
		for(var i=0;i<needsNO;i++){//����������β�����루i+1��
			insertarray.push(i+1);
			insertarray.push(i+1);
		}
	}
	/**************************************************************************
	����������ĺ��������汾:
	�˷�������һ�黥����ͬ������������Ǿ�����ϸ�������Ƿ��֣�
	���跽���Ϊ10*10����ôҪ����һ�ٸ�����ͬ�����֣��ֲ���1~100֮�䣬
	ֻʣ�������������ʱ�򣬲��������ڶ������ɹ��ļ���Ϊ2/100�����һ�����ɹ��ļ��ʽ�Ϊ1/100
	�����¼��໥������Ҳ����˵�����γɹ����ɵļ��ʲ������֮һ�����������ڴ��أ�
	Ϊ�ˣ������˷����ĸĽ��汾��
	function createSuperRandom()
	**************************************************************************/
	function createRandom1(number){//����Ĳ�����̬�ı�������ĸ���
		 var num = number;
		 for(var i=0;i<(num*num-1);i++){//�����Ļ�����number��ƽ��-1����
			 var num1=Math.random();//�������������Χ��0~1
			 var num2=(num1*num*num)+1;//����1-num*num��С��
			 var num3=parseInt(num2);//��С��ȡ������
			 if(i==0){ //��һ��װ������Ҫ�ж�
				rnumbers[i]=num3;
			 }else{ //����ÿ�ζ���Ҫ�������е�ÿһλ���бȽ�
				var flag=true;//Ĭ�ϵ�ǰ������������������
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
	����������ĺ���ż���汾
	**************************************************************************/
	function createRandom2(number){//����Ĳ�����̬�ı�������ĸ���
		 //var rnumbers=new Array();
		 var num = number;
		 for(var i=0;i<(num*num);i++){//ż���Ļ�����num��ƽ������
			 var num1=Math.random();//�������������Χ��0~1
			 var num2=(num1*num*num)+1;//����1-NUm*num��С��
			 var num3=parseInt(num2);//��С��ȡ������

			 if(i==0){ //��һ��װ������Ҫ�ж�
				rnumbers[i]=num3;
			 }else{ //����ÿ�ζ���Ҫ�������е�ÿһλ���бȽ�
				var flag=true;//Ĭ�ϵ�ǰ������������������
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
	�������õ����ݲ�������
	**************************************************************************/
	function arrayInsert(){
		for(var i =0;i<rnumbers.length;i++){
			var cell = document.getElementById(rnumbers[i]);
			cell.innerHTML =insertarray[i];
			}
			//�������ݳɹ�������insertarray���飬�����´�ʹ��
			insertarray.length = 0;
	}
	/**************************************************************************
	���ñ����ķ���������ɫ���
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
	���ñ����ķ���������ɫ���
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
	�������¼�
	**************************************************************************/
	function cellClick(){
		//ȡ���¼�Դ
		var cell = event.srcElement;
		cell.style.backgroundColor="white";
		if(click1==null){//��һ�ε��
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
			if(confirm("�Ѿ�ͨ�أ��Ƿ������")){
				var len = document.getElementById("game_select").value;
				parseInt();
				document.getElementById("game_select").value=parseInt(len)+1;
				createTable(document.getElementById("game_select").value);
			}
		}	
	}
	/**************************************************************************
	�����Ƿ�ͨ��
	**************************************************************************/
	function isPass(){
		var tt=document.getElementById("mytable");
		var flag=true; 
		for(var i=0;i<tt.rows.length;i++){
				var row=tt.rows[i];
				for(var j=0;j<row.cells.length;j++){
					//ͨ�ص������� ��Ԫ���������ֵ�ȫ��Ҫ���
					if(row.cells[j].innerText!="" && row.cells[j].style.backgroundColor!="white"){
						flag=false;
						break;//��Լ�������Դ
					}
				}
			}
			return flag;
	}
	/**************************************************************************
	��ʱ������
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
			if(confirm("��Ϸʱ�������꣬��Ҫ���¿�ʼ��")){
				var length =$("game_select").value;
				createTable(length);
				$("div_content").style.width=screen.width;
				temp = screen.width;
				time=40;
			}
		}
	}
	/**************************************************************************
	���ɰ�������ĺ���
	**************************************************************************/
	function createHelpArray(){
		var length = document.getElementById("game_select").value;//��ñ߳�
		//���ݵ�Ԫ���IDȥ�ĵ�Ԫ������ݣ��Ƚ�
		var helpArrayIndex=0;
		for(var i =0;i<(length*length);i++){
			//ȡ��ÿһ����Ԫ��
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
	��������ĺ���
	**************************************************************************/
	function myHelp(){
		if(helpArray.length==0){
			alert("�װ��ģ��Ѿ�û����ʾ�ˣ�");
		}else{
			var ans = helpArray[0];
			var points = ans.split(",");//Ϊɶ����ȡ���������أ���
			$(points[0]).style.color="red";
			$(points[1]).style.color="red";
			removeVal(ans);//�Ƴ��Ѿ���ʾ����Ԫ��
		}	
	}
	/**************************************************************************
	ȡ�þ���Ķ���
	**************************************************************************/
	function $(oid){
			return document.getElementById(oid);
		}
	/**************************************************************************
	�Ƴ�helpArray�����е�Ԫ��
	***************************************************************************/
	function removeVal(val){	
		for(var i = 0;i<helpArray.length;i++){
			if(helpArray[i]==val){
				helpArray.splice(i,1);
			}
		}
	}