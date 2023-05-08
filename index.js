console.log("fuck u js")
//声明变量
//var 哪里都可以用
var a =1;
//let 只能在定义之后用 假如在第十行定义了let 十行之前不能用
 let b =2;
//const 也是只能定义后用 const只能设置值 不能重置值 正常的写法减少bug应该用const 但是为了方便还是用 var
 const c=3;

 //变量使用
 var hello ="HEllo";
 console.log(hello);//把变量里的内容输出来
//p2.字符串拼接
 var str = "hello ";
 var str1 = "big ";
 var str2 = "world";
 console.log(str+str1+str2);

 //P2.1数字拼接
 var num =1;
 console.log(num+1);//2
 console.log(str+1);//hello1

 //模板字符串
 
let bool1 = true;
console.log(`1+1 is${1+1}`);
//感叹号在里面是取反！
console.log(`布尔值的相反值是${!bool1}`);

//数据类型typeof和instanceof
//创建一个静态数组
var people = ["wang","lin","lee"];
 var one = 1;
 var str2 = "csgo";
 var bolean = true;
//创建一个对象
var pers = {
    fistName:"lee",
    lastName:"power",
};
//创建一个函数 方法 小括号里面是传进来的参数
function sayItOut(pers){
    console.log("hellow"+pers.fistName);
}
//执行
console.log("--------typeof----------");
console.log(typeof people);//typeof 是js的内部类 输出数组的时候会报错
console.log(typeof one);
console.log(typeof str2);
console.log(typeof bolean);
console.log(typeof pers);
console.log(typeof sayItOut);

console.log("--------instanceof----------");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str2 instanceof String);
console.log(bolean instanceof Boolean);
console.log(pers instanceof Object);
console.log(sayItOut instanceof Function);

//数字运算
let numa =100;
console.log('------------基本数学运算-----------');
console.log(numa+25);
console.log(numa-100);
console.log(numa*100);
console.log(numa/1500);
console.log('------------额外数学运算-----------');
console.log(numa%1500);//取余
console.log(++numa);//自增1
console.log(-- numa);//自减1
console.log('------------Math对象运算-----------');
console.log(Math.PI);//圆周率
console.log(Math.sqrt(numa));//平方根

//字符串转换成数字
let numb = '150';
let flo1 = '1.5';
console.log('=============字符串转换成数字=============');
console.log(parseInt('100'));
console.log(parseInt(numb));
console.log(parseInt('ABC'));
console.log(parseInt(0xf)); //这种情况会变成16进制

console.log('=============字符串转换成浮点数=============');
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));


console.log('=============字符串转换成数字会忽略任何符号=============');
console.log(parseInt('1.5'));
console.log(parseInt('1+1'));

console.log('=============字符串转换成数字模板字符串=============');
console.log(parseInt(`${1+1}`));//模板字符串会先计算模板里面的值 然后再执行其他操作

console.log('=============数字转换成字符串=============');
console.log(numb.toString());
console.log(flo1.toString());
console.log((100).toString());

//异常
console.log('=============抛出异常=============');
//写两个方法
// function crit(){
//     throw "throwing an exception";
// }
// function logErr(theExce){
//     console.log(theExce);
// }
//  throw '我的异常';
 //throw true;//为什么会灰色？因为抛出异常会打断代码执行
 console.log('=============try.catch=============');
//  try {
//     crit();
//  } catch (ex){
//     console.log('报错了');
//     logErr(ex);
//  } finally{
//     console.log('我跑了！');
//  }


//date对象
 let now = new Date();//获取当前时间 UTC时间

 console.log(now);

 let that_sMe = new Date(1999,0,19);//在代码里月份是从0开始计算
 console.log(that_sMe)

 //自定义设置时间
 let demoDate = new Date();
 demoDate.setMonth(0);
 console.log('我设置的月份',demoDate);

 console.log(`Day of the week:${ demoDate.getDay()}`);//0是周日
 console.log(`Date:${demoDate.getDate()}`)//今天的日期

 //等号的作用
 function equal(){
    let a = 1;
    let b = '1';
    console.log('===================现在a是数字b是字符 如果用两个等号 ==的话就是返回true 因为两个等号是会转换类型 三个等号===是绝对相等实际使用要用三个等号===========================');
    console.log('===================不等于的情况：在等号前面加上感叹号!=这是简单的不等于 ！==两个等号的话会检查当前的数据类型实际操作要经常用！==减少bug===========================');
    console.log('===================参考下面if语句===========================');
 }  

 //if语句
  var status =1;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层
    if(status === 200){
        console.log('状态等于200！走这里');
    }else if(status === 800){
        console.log('状态等于800！')
    }
    else{
        console.log('都不是！');
    }

console.log('===================进阶写法===========================');
var status =200;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层
var mes = '';
    if(status === 200){
        mes='ok';
    }else if(status === 800){
        mes='not ok';
    }
    else{
        mes='something else';
    }
    console.log(mes);
    var status =200;//这里设置状态等于了200所以走第一层 设置八百第二层 其他第三层

var mes = '';
    if(status === 200){
        mes='ok';
    }else if(status === 800 || status === 300 ){//   ||是或者的意思
        mes='not ok';
    }
    else{
        mes='something else';
    }
    console.log(mes);

    //switch语句

    const status1 = 500;

    switch(status1){
        case 200:
            console.log('ok');
            break;//如果是等于200就停止执行 没有break的话就会一直往下执行
            case 400:
                break;
                case 500:
                    console.log('ok');
                    break;
                    default:
                        console.log('default value')
                        break;
    }

    //数组
    console.log('===================创建数组===========================');

    let shuzuchangdu = 5; //数组长度是5

    let shuzu = [];

    let shuzu2 = Array(shuzuchangdu);//通过Arry对象创建数组 括号里可以直接加数字创建长度

    console.log(shuzu);
    console.log(shuzu2);//五个长度就可以容纳五个数组 如 [a,b,c,d,e]

    console.log('===================数组添加数据===========================');

    let arr = ["a", true , 2];

    console.log(arr[0]);//输出第一个数组 也就是a

    console.log(arr[1]);//输出第二个数组 也就是true

    console.log('===================对象数组长度===========================');

    let arrylength = 2;

    let arr2 = Array(arrylength);

    arr2[0] = "数组2的第二个数组等于这个！";

    console.log(arr2[0]);
    console.log(arr2[1]);//没设置值 找不到

    console.log('===================数组长度减1===========================');

    let arr3 = Array(3);//三个数组长度

    arr3[2] = "设置数组三的第二个值";

    console.log(arr3[2]);
    console.log(arr3[arr3.length - 1]);
    console.log(arr3[0]);
    console.log(arr3[1]);

    console.log('===================数组添加和移除===========================');

    //pop 和 push

    let arr5 = ["a",true, 2];//3个数组
    console.log(arr5.push("new value"));//在最后添加了 new value
    console.log(arr5);
    console.log(arr5.pop());//移除掉最后一个
    console.log(arr5);

    //shift 和 unshift

    let arr6 = ["a",true, 2];
    console.log(arr6.unshift("new value"));//在数组前面添加一个值
    console.log(arr6);
    console.log(arr6.shift());//移除第一个值
    console.log(arr6);

    //concat

    let arr7 = ["b",false,3];
    let newArr = arr6.concat(arr7);//这里把arr6和7拼接起来
    let newArr1 = arr7.concat([1,2,3]);//这是把arr7和新增的数组拼接起来
    console.log(newArr);
    console.log(newArr1);

    //循环语句
    console.log('===================循环只有小于 没有大于===========================');
    let nameqqq = ['js','java','mysql'];
    let whileXunHuan = 0;
    console.log('===================while循环===========================');
    while(whileXunHuan < nameqqq.length){ //为什么这么写？因为循环前是要循环的值 后面是循环的次数就是

        let nameq = nameqqq[whileXunHuan];
        console.log(nameq);
        whileXunHuan++;

    }

    console.log('===================for循环===========================');

    for(let forIndex = 0; forIndex <nameqqq.length; forIndex++){
        const name1 = nameqqq[forIndex];
        console.log(name1);
    }

    console.log('===================for of===========================');

    for (const name of nameqqq) {
        console.log(name);
    }
    console.log('===================for in===========================');
    for (var i in nameqqq){
        console.log(nameqqq[i]);
    }

    console.log('===================方法===========================');
    function fun (){
        console.log("这是方法");
    }
    console.log("执行方法",fun);
    fun();

    console.log('===================方法使用参数===========================');
    function fun1 (canshu,canshu1){//这里括号里是变量，一个变量只会输出一个对应值
        //这里是有一个参数来存想要输出的东西
        console.log("这是方法fun1"+canshu+canshu1);
    }
    console.log("执行方法",fun1);
    fun1("canshu","999");
    console.log('===================方法返回return===========================');
    var canshu2 = 999;
    function fun3(canshu2){
        if(canshu2 = 999){
            return "它等于了";
        }
    }
    let jieguuo = fun3();
    console.log("jieguo",jieguuo);
    fun3(canshu2);
    // let result1 = fun2(canshu6);
    // console.log("返回结果",result1);
    


    var ceshiFun = 12;
    var ceshiFun1 = 1;
    // function ceshiFun0 (ceshiFun,ceshiFun1) {
        
    //     let ceshiFun2 = ceshiFun+ceshiFun1;
    //     console.log("方法2",ceshiFun2);
    //     // return ceshiFun2;
        
    // }
    // let ceshiFun3 = ceshiFun0(ceshiFun2);
    // ceshiFun0();
    // console.log("测试方法",ceshiFun3);


    console.log('===================箭头方法===========================');
    const add = (a,b) =>a+b;
    console.log(add(1,2));


    const jian = (a,c) => {
        const result = a-c;
        return result;
    };
    console.log(jian(10,1));

    console.log('===================JSON===========================');
    console.log('===================去浏览器复制链接看数据示例 这里做了筛选===========================');
    console.log('===================搭配apipost===========================');
    function tinqijiekou() {
		$.ajax({
			url:'https://www.yiketianqi.com/free/week?appid=82923341&appsecret=ZFtS7yHg&unescape=1&cityid=101310302,101310303,101310304',
			type:"get",
			dataType:"json",
			success: function (response) {
				var Str ="";
				var tq = $('tbody[dom-type="table-listsb"]');
				tq.children().remove();
				
				var x=0;
				while (x<=2){
					
					var datas = response[x].data;

					var b=1;
					while(b<=1){
						var Str ='<tr>';
						Str += '<td>'+response[x].city+ '</td>';
						Str += '<td>'+datas[b].date + '</td>';
						Str += '<td>'+datas[b].wea + '</td>';
						Str += '<td>'+datas[b].win + '</td>';
						Str += '<td>'+datas[b].win_speed + '</td>';
						Str += '</tr>'
						tq.append(Str);
						b++;
					}
					x++;
				}
				
			}
			
		})
	}
    // <tbody dom-type="table-listsb">
	// 							<tr>
	// 								<td style="text-align:center" class="am-text-primary am-text-lg" colspan="7">
    //                                     <strong>无数据</strong></td>
	// 							</tr>
								
	// 						</tbody>
    console.log('===================注释掉的是如何引用数据===========================');
    [
        {
            "cityid": "101310302",
            "city": "西沙",//这里就是response[x].city
            "data": [//这里就是response[x].data 然后可以循环引用他下面的数据
                {
                    "date": "2022-10-09",//datas[b].date
                    "wea": "雷阵雨",
                    "wea_img": "yu",
                    "tem_day": "31",
                    "tem_night": "26",
                    "win": "东北风",
                    "win_speed": "4-5级转5-6级"
                },
                {
                    "date": "2022-10-10",
                    "wea": "雷阵雨",
                    "wea_img": "yu",
                    "tem_day": "31",
                    "tem_night": "26",
                    "win": "东北风",
                    "win_speed": "5-6级"
                }
            ]
        }
    ]

    console.log('===================结果示例===========================');

    console.log('===================对象===========================');
    const blank = {};//一个简单的对象由花括号组成
    console.log("blank 的类型是",typeof blank);//输出是object就是对象
    console.log("blank 的值是",blank);

    console.log('===================对象提供属性===========================');
    const book = {//这里面就是他的键值对
        title:"1984",//数字
        author:"作者",//字符串
        isAvailable:false//布尔值 （小提示：最后一个键值对不用加逗号）
    };
    console.log("book 的类型是",typeof book);
    console.log("book 的值是:",book);

    console.log('===================对象中定义方法===========================');
    const book1 = {//这里面就是他的键值对 //三个属性两个方法
        title:"1984",//数字
        author:"作者",//字符串
        isAvailable:false,//布尔值 
        chekIn:function(){ this.isAvailable = true},//这里给对象定义两个方法
        chekOut : function(){ this.isAvailable = false}
    };
    console.log("book1 type",typeof book1);
    console.log("book1 value:",book1);

    console.log('===================轻量化对象===========================');
    console.log('===================用关键字new创建对象实例===========================');
    const book2 = new Object();//使用new关键字创建对象实例
    console.log("定义book2");
    console.log("book1 type",typeof book2);
    console.log("book1 value:",book2);
    const data = {title:"123",author:"作者"};
    const book3 = new Object(data);//把data的值赋给新的book3
    console.log('===================完整示例===========================');
    const dataFunc = {//这里面就是他的键值对 
        title:"1984",//数字
        author:"作者",//字符串
        isAvailable:false,//布尔值 
        chekIn:function(){ this.isAvailable = true},//这里给对象定义两个方法
        chekOut : function(){ this.isAvailable = false}
    };
    const book0 = new Object(dataFunc);
    console.log("定义book0和dataFunc");
    console.log("book0 type",typeof book0);
    console.log("book0 value:",book0);
    console.log("dataFunc type",typeof dataFunc);
    console.log("dataFunc value:",dataFunc);
    console.log('===================如何访问上面的三个属性和两个方法===========================');
    //使用点表示法 .后面是属性名字
    console.log(book0.title);//比如打印出title
    //改变值
    book0.author="作者在这里被改变了";
    console.log(book0.author);

    console.log('===================分割线===========================');
    //使用括号表示法
    console.log(book0["title"]);//比如打印出title
    //改变值
    book0["author"]="作者在这里被改变了";
    console.log(book0);

    console.log('===================分割线===========================');
    //用在方法上
    console.log(book0.isAvailable);
    //调用方法
    book0.chekOut();//在这里调用方法把isAvailable的值改成false
    console.log(book0);
    //括号表示法不写了 实操用不上
    console.log('===================this关键字的讲解===========================');
    console.log('===================他是函数上下文的句柄===========================');
    console.log('案例1有个函数其中定义对象当使用他的时候返回this');
    console.log('案例1 this实际就是bookobj的本身');
    const bookobj = {
        chekIn:function(){
            return this;
        }
    }
    console.log("这是",bookobj.chekIn());//这句返回的就是对象定义本身
    console.log(bookobj.chekIn() === globalThis); //如果改成bookobj 等于true
    console.log('案例2有个函数定义在全局作用域');
    function anotherCheckIn(){
        return this;
    }
    console.log("案例2:", anotherCheckIn());
    console.log(anotherCheckIn() === globalThis);//在浏览器李这里全局对象是window

    console.log('===================Promise===========================');
    console.log('工作原理：new一个promise 传入一个回调函数 成功时调用第一个值 失败调用第二个');

    function promiseTimeOut(ms){
        return new Promise((resolve, reject) => {//他给我们这两个参数 一个是成功一个是失败
            //resolve(42);//一旦成功就可以直接使用resolve 传入值就直接写在括号里；
            //因为方法里有resolve, reject可以直接在方法里用timeout
            setTimeout(resolve,ms);//这么写计时走完了回执行promise定时这里用ms传入毫秒值 如果这里改成reject下面就会走失败
        })
    }
    //调用 并且指定值为2000
    promiseTimeOut(2000)//2000是2秒
        .then(() => {
            console.log("成功");
        }).catch(() => {//如果失败的话走这一行
            console.log("失败");
        })
        //闭合写法要查看闭合写法注释掉上面的代码
        promiseTimeOut(2000)//2000是2秒
        .then(() => {
            console.log("成功");
            return promiseTimeOut(1000);
        }).then(() =>{
            console.log("也完成了");
            //可以在这里传值
            return Promise.resolve(98);  
        }).then((result) =>{
            console.log(result);//这里把resolve的值传给了result
        }).catch(() => {//如果失败的话走这一行
            console.log("失败");
        })

        console.log('===================Async/Await===========================');
        async function async1(){
            return 666;
        }

        async function run() {
            //逻辑
            console.log("开始");
            await promiseTimeOut(2000);//等待上面的方法两秒
            const async2 = await async1(3000);
            console.log(async2);
            console.log("停止");
        }
        run();

        console.log('===================使用包===========================');
        console.log('在终端 输入 npm init -y 这个-y是跳过安装提示');
        console.log('接下来安装 包');
        console.log('npm install --save-dev prettier');
        /*
        然后会看到 package-lock.json 这个文件有这行代码 其中的test可以修改 为了确认使用包 添加了脚本 可以改test名 如format
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
        */
        //这个其实就是配置环境 没必要讲解 实操根据需求用