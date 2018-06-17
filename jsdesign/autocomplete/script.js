$(function(){
    
    var haystack = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    
    $('#search').keyup(function(e) {
        
        var suggest = $('#suggestion');
        var code = e.keyCode;
        if(code == 13) {
            $(this).val(suggest.val());
            suggest.val("");
            return false;
        }
    
        var needle = $(this).val().toLowerCase();
        // console.log(needle);
    
        // compare input with haystack
        $.each(haystack, function(key, val) {
            // console.log($(haystack));
            // console.log(val.slice(0,needle.length));
            if (needle == val.slice(0,needle.length).toLowerCase()) {
                // console.log(val);
                suggest.val(val);
                return false;
            }
            else {
                suggest.val("");
            }
        });
        if (needle.length == 0) {
            suggest.val("");
        }
    });
    
    // pagination
    var texts = [];
    var content = $('ul.pg-content');
    
    $(function() {
        $('ul.pg-content > li').each(function(){
            // console.log($(this)[0]);
            texts.push(this);
        });
    
        // console.log(texts.length);
        
        $('.page-link').click(function(){
            var curr = parseInt($(this).text());
            var pageArr = texts.slice((3 * (curr - 1)), 3 * curr);
            var html = '';
            // console.log(pageArr);
            $.each(pageArr, function(key, val){
                // console.log(val);
                html += val.outerHTML;
            });
            // console.log(html);
            content.html(html);
        });
    });
    
    // shopping cart
    $(".plus").click(function(){
        var num = $(this).parent().children("span");
//单品数量增加
        num.text(parseInt(num.text())+1);
//商品总数增加
        var totalNum = parseInt($(".totalNum").text());
        totalNum++
        $(".totalNum").text(totalNum);
//计算总价
        var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
        console.log(goods_price);
        $(".totalPrice").text(parseInt($(".totalPrice").text())+goods_price);
    });

//点击减少按钮触发事件
    $(".minus").click(function(){
        var num = $(this).parent().children("span");
        if(parseInt(num.text())){
            num.text(parseInt(num.text())-1);
            var totalNum = parseInt($(".totalNum").text());
            totalNum--
            $(".totalNum").text(totalNum);
            var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
            $(".totalPrice").text(parseInt($(".totalPrice").text())-goods_price);
        } else{
            num.text("0");
        }
    });
    
    // callback
    function f1(f2) {
        console.log("我是f1");
        if (f2 && typeof(f2) === "function") { //写上判断是个好习惯
            f2();
        }
    }
    
    function f2() {
        console.log("我是f2");
    }
    
    f1(function() {
        console.log("我是f2");
        f1(function() {
            console.log("我是f2");
        });
    });
    
    // Promise
    function func2() {
        return new Promise(function(resolve, reject){
            setTimeout(resolve, 1000);
        });
    }
    
    func2().then(function(){
        console.log('promise example 1');
        return func2();
    }).then(function(){
        console.log('promise example 2');
        return func2();
    }).then(function(){
        console.log('promise example 3');
        return func2();
    });
    
    // Closure
    function c1(){
        
        var number=999;
        
        nAdd = function(){
            number+=1;
        }
        
        function c2(){
            console.log(number);
        }

        return c2;
    }
    
    var result=c1();
    result(); // 999
    nAdd();
    result(); // 1000
    
    // closure
    function player(name) {
        return {
            getName: function() {
                return name;
            },
            setName: function(newName) {
                name = newName;
            }
        }
    };
    
    var pengfei = player('pengfei');
    console.log(pengfei.getName());
    pengfei.setName('gaozhao');
    console.log(pengfei.getName());
    
    // var name = "The Window".split('');
    
    // name.slice(0, 3).forEach(function (element) {
    //     console.log(element);
    // });
    
    // function tryArguments(e) {
    //     return arguments[0];
    // }
    //
    // console.log(tryArguments(name));
    
    // console.log(window.document.getElementsByTagName('input')[0]);
    
    // var removed = document.getElementsByTagName('datalist');
    // var removed2 = $('datalist');
    // console.log(removed2[0].children[0]);
    
    function addaaa(obj){
        console.log(obj);
        if ($(obj).hasClass('aaa')){
            $(obj).removeClass('aaa');
        }
        else {
            $(obj).addClass('aaa');
        }
    }
    
    $('h3').click(function(e){
        addaaa(this);
    });
    
    // setInterval animation
    // function moveLeft(elem, distance) {
    //     var left = 0;
    //
    //     function frame() {
    //         left++;
    //         elem.css('margin-left', left);
    //
    //         if (left == distance)
    //             clearInterval(timeId)
    //     }
    //
    //     var timeId = setInterval(frame, 1); // draw every 10ms
    // }
    //
    // moveLeft($('#search-container'), 1000);
    
    
    var arr = [1,2,3,4,5,0];
    var maxval = Math.max.apply( Math, arr )
    console.log(maxval);
    
    function addOptions() {
        var option = document.createElement("option");
        $(option).attr("value","java");
        $("datalist").html(option);
    }
    
    function returnArg () {
        var args = Array.prototype.slice.call(arguments);
        return args[0];
    }
    
    console.log(returnArg([102, 101]));
    
});