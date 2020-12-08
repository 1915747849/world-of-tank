define(['jquery'],function($){
    var $leftdatedd = $('.date-dd');
    var $rightdatedd = $('.date-dd2')
    var $centerdate = $('.centerimg')
    var $banner = $('.maincont')
    var $huodong = $('.huodong')
    var lefttmps
    var righttmps
    var centertmp
    var huodong
    var banner
    
    function initimges(data){
    //  重磅新闻JSON ----------------
    centertmp =
    `
    ${
        data.centerimg.map((v,i)=>{
            return`
            <div class="imgblock">
                    <img src="${v.imgurl}" alt="" >
                    <span class="centersha">
                    </span>
                </div>
                <div class="imgshadow">
                    <h2>哈罗恩勋章背后的故事</h2>
                    <p>来聊聊《坦克世界》中的史诗成就——“哈罗恩勋章”背后的真实历史故事，以及如何在游戏中获得这一史诗成就吧！</p>
                    <span>
                        <strong>攻略</strong> 2020/12/01
                    </span>  
                </div>
            `
        })
    }
    `
     //  左侧新闻JSON ----------------
    lefttmps = 
        ` 
         ${
            data.imglist.map((v,i)=>{
                return`
            <div>
             <dd  class="dd-1">
                 <span class="ddshadow"></span>
                 <img src="${v.imgurl}" alt="">
             </dd>
             <dd class="dd-2"> 
                 <h2>假日行动2021即将登场!</h2>
                 <p>一年中最神奇的时刻即将来临!</p>
            <span><b>活动</b>  2020/12/01</span>
             </dd>
             </div>
                `
            }).join('')
         }  
        
        ${
            data.imglist2.map((v,i)=>{
                return`
            <div>
                <dd class="dd-1">
                <span class="ddshadow"></span>
                <img src="${v.imgurl}" alt="">
            </dd>
            <dd class="dd-2">
                <h2>每日精选;冬日超值每日特惠开启</h2>
                <p>整整一个月的超值优惠活动等您参
                    与！每一天都迎来新的24小时限时特惠，千万不要错过</p>
                <span><b>活动</b> 2020/12/01</span>
            </dd>
            </div>
                `
            }).join('')
         }  
        ${
            data.imglist3.map((v,i)=>{
                return`
                <div>
                <dd class="dd-1">
                <span class="ddshadow"></span>
                <img src="${v.imgurl}" alt="">
            </dd>
            <dd class="dd-2">
                <h2>2020年12月:活动一览</h2>
                <p>双旦活动前瞻</p>
                <span><b>活动</b> 2020/11/30</span>
            </dd>
            </div>
                `
            }).join('')
         } 
    `
  //  右侧新闻JSON ----------------
    righttmps =
    `
    ${
        data.imglist4.map((v,i)=>{
            return`
            <div>
            <dd class="dd-1">
                <span class="ddshadow"></span>
                <img src="${v.imgurl}" alt="">
            </dd>
            <dd class="dd-2">
                <h2>[周末福利]紧锣密鼓</h2>
                <p>周末迎来全局经验兑换折扣1:35,
                    还有经验、个人储备、配件福利!</p>
                <span>话动2020/11/26</span>
            </dd>
        </div>
            `
        }).join('')
     }  
    
    ${
        data.imglist5.map((v,i)=>{
            return`
            <div>
            <dd class="dd-1">
                <span class="ddshadow"></span>
                <img src="${v.imgurl}" alt="">
            </dd>
            <dd class="dd-2">
                <h2>当之无愧奖:小坦克大故事</h2>
                <p>请欣赏这个精彩的故事吧!</p>
                <span>新闻2020/11/26</span>
            </dd>
        </div>
            `
        }).join('')
     }  
    ${
        data.imglist6.map((v,i)=>{
            return`
            <div>
                <dd class="dd-1">
                        <span class="ddshadow"></span>
                        <img src="${v.imgurl}" alt="">
                    </dd>
                    <dd class="dd-2">
                        <h2>排位赛黄金组3V3公开赛
                            报名中</h2>
                        <p>第—届《坦克世界》排位赛黄金组
                            3V3公开赛，报名火热进行中!</p>
                        <span>新闻2020/11/26</span>
                </dd>
            </div>
            `
        }).join('')
     } 
     
    `  
     //  活动栏JSON ----------------
    huodong = `
         ${data.imglist2.map((v,i)=>{
             return`
                <li>
                    <div class="box1">
                    <span class="box1shadow"></span>
                    <img src="${v.imgurl}" alt="">
                    <p>每日精选闪亮登场</p>
                    </div>                
                    <div class ="box2">
                        <span>剩余时间:</span>
                        <p>28天</p>
                    </div>
                </li>
             `
         }).join('')}
         ${data.imglist3.map((v,i)=>{
            return`
            <li>
            <div class="box1">
            <span class="box1shadow"></span>
            <img src="${v.imgurl}" alt="">
            <p>战斗通行证第3赛季</p>
            </div>
            <div class ="box2">
                <span>剩余时间:</span>
                <p>3天</p>
            </div>
        </li>
            `
        }).join('')}
        ${data.imglist.map((v,i)=>{
            return`
            <li>
            <div class="box1">
            <span class="box1shadow"></span>
            <img src="${v.imgurl}" alt="">
            <p>领取您的当之无愧奖</p>
            </div>
            <div class ="box2">
                <span>剩余时间:</span>
                <p>333天</p>
            </div>
        </li>
            `
        }).join('')}
        ${data.imglist5.map((v,i)=>{
            return`
            <li>
            <div class="box1">
            <span class="box1shadow"></span>
            <img src="${v.imgurl}" alt="">
            <p>极地挑战:狩猎S系战斗之星!</p>
            </div>
            <div class ="box2">
                <span>剩余时间:</span>
                <p>4天</p>
            </div>
        </li>
            `
        }).join('')}
    `
    //  轮播图JSON ----------------

    banner = `
     ${data.imglist.map((v,i)=>{
         return`
         <li>
                    <img src="${v.imgurl}" alt="" class="maincontimg r">
                    <span class="shadow">

                    </span>
                    <div class="maintext l">
                        <p>领取您的2020当之无愧奖</p>
                    </div>
            </li>
         `
     }).join()}
     ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>公平游戏，我们并肩作战</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>1.11版本更新一览！</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>假日行动2021：获取大型补给箱</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>假日行动2021：活动规则</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>账号安全专区！</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>了解哈罗德勋章的故事</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <li>
                   <img src="${v.imgurl}" alt="" class="maincontimg r">
                   <span class="shadow">

                   </span>
                   <div class="maintext l">
                       <p>Сука блядь！！！</p>
                   </div>
           </li>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
         <ul class="buttonmove" >
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `
    }).join()}
    ${data.imglist2.map((v,i)=>{
        return`
        <span class="leftbutton">  
        </span>
        <span class="rightbutton">  
        </span> 
        `
    }).join()}
    `
    
    $leftdatedd.html(lefttmps)
    $rightdatedd.html(righttmps) 
    $centerdate.html(centertmp)
    $huodong.html(huodong)
    $banner.html(banner)
    ;}
    return initimges;
})
