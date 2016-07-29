window.onload = function() {
     var vies = {
         sqeres: function(foo){
             var div = document.getElementById('wrepperCanvas'),
                 div2 = document.createElement('div');
                 div.appendChild(div2);
                 div2.className = 'success';
                 div2.setAttribute('id','ufa' + foo.index)
                 div2.style.width = model.razsize() +'px';
                 div2.style.height = model.razsize() + 'px';
         },
         circl: function(foo){
             div = document.getElementById('ufa' + foo.index);
             div2 = document.createElement('div');
             div.appendChild(div2);
             div2.style.width = model.razsize() +'px';
             div2.style.height = model.razsize() + 'px';
             div2.style.borderRadius =  model.razsize()/2 +'px'
             div2.style.boxShadow = ' inset 0 0 20px 2px rgba(0,0,0,0.9)'
             div2.className = 'success2';

             div2.setAttribute('id', foo.index)
             this.option(div2, foo.value)

         },
         option: function(x,y){
             switch (y) {
                 case 1 :
                     x.style.backgroundColor = ' #FF0000';
                     break;
                 case 2 :
                     x.style.backgroundColor = '#ADFF2F';
                     break;
                 case 3 :
                     x.style.backgroundColor = ' #98FB98';
                     break;
                 case 4 :
                     x.style.backgroundColor = ' #AFEEEE';
                     break;
                 case 5 :
                     x.style.backgroundColor = ' #D8BFD8';
                     break;
                 case 6 :
                     x.style.backgroundColor = "#0040ff";
                     break;
                 case 7 :
                     x.style.backgroundColor = "#ff0080";
                     break;
                 case 8 :
                     x.style.backgroundColor = "#D2691E";
                     break;
                 case 9 :
                     x.style.backgroundColor = "#FF7F50";
                     break;
                 case 10 :
                     x.style.backgroundColor = " #A9A9A9";
                     break;
                 default:
                     x.style.backgroundColor = "#FFF";
                     break;
             }
         },
         massag: function(msg){
             var div = document.getElementById('count');
             div.innerHTML = msg;
         }
     };
    var model = {
        point: '',
        count: 0,
        foo : [],
        size : 10,
        width : 500,
        rotate: false,
        razsize : function(){
            var wid =  this.width / this.size - 1.1
            return wid;
        },
        const : function(x , y){
             this.value = 0;
             this.index = +(x+''+y);
        },
        circl : function(){
             for(var i = 0; i < this.size; i++){
                 this.foo[i] = [];
                 for(var j = 0; j < this.size; j++){
                    this.foo[i][j] = new this.const(i,j);
                 }
             }
        this.drawAll();
        },
        drawAll: function(){
            for(var i = 0; i < this.size; i++){
                for(var j = 0; j < this.size; j++){
                    vies.sqeres(this.foo[i][j]);
                }
            }
            model.remdom();
        },
        remdom : function(){
                for (var i = 0; i < this.foo.length; i++) {
                    for (var j = 0; j < this.foo[i].length; j++) {
                        this.foo[i][j].value = Math.ceil(Math.random()*9);
                    }
                }
            for (var i = 0; i < this.foo.length; i++) {
                for (var j = 0; j < this.foo[i].length; j++) {
                   if(j< this.foo[i].length-1){
                       if(this.foo[i][j].value == this.foo[i][j+1].value){
                               this.foo[i][j+1].value = this.foo[i][j+1].value + 1;
                       }
                   }
                }
            }
            for (var i = 0; i < this.foo.length; i++) {
                for (var j = 0; j < this.foo[i].length; j++) {
                    if(i< this.foo[i].length-1){
                        if(this.foo[i][j].value == this.foo[i+1][j].value){
                            this.foo[i+1][j].value = this.foo[i+1][j].value + 1;
                        }
                    }
                }
            }

        this.test();
        },
        test: function(){
            for(var i = 0; i < this.size; i++){
                for(var j = 0; j < this.size; j++){
                    if(this.foo[i][j].value){
                        vies.circl(this.foo[i][j]);
                    }
                }
            }
        }

};
    var controler = {

        count: false,
        cont: function() {
            var div = document.getElementsByClassName('success2');
            for (var i = 0; i < div.length; i++) {
                      div[i].onclick =  controler.touth.bind(controler);
            }
        },
        touth : function(e){
            var div2 = e.target,
                div3 = div2.id,
                div4 = document.getElementById(div3);
                div4.style.opacity = '0.5';
            this.lop(div4);
        },
        lop: function(e){
            var div1 = +e.id+ 1,
                div1id = document.getElementById(div1),
                div2 = +e.id- 1,
                div2id = document.getElementById(div2),
                div3 = +e.id+ 10,
                div3id = document.getElementById(div3),
                div4 = +e.id- 10,
                div4id = document.getElementById(div4);
            if(+e.id < 10){
                div1id.onclick =  controler.touth1.bind(controler);
                div2id.onclick =  controler.touth2.bind(controler);
                div3id.onclick =  controler.touth3.bind(controler);
            } else if(+e.id > 89){
                div1id.onclick =  controler.touth1.bind(controler);
                div2id.onclick =  controler.touth2.bind(controler);
                div4id.onclick =  controler.touth4.bind(controler);
            } else {
                div1id.onclick =  controler.touth1.bind(controler);
                div2id.onclick =  controler.touth2.bind(controler);
                div3id.onclick =  controler.touth3.bind(controler);
                div4id.onclick =  controler.touth4.bind(controler);
            }


        },
        touth1: function(e){
            model.point = false;
            var div = e.target,
                div2 = div.id,
                div3,
                div4;
            if(div2 < 10){
                div3 = 0;
                div4 = +div2;
            } else {
                    div3 = +div2.charAt(0);
                    div4 = +div2.charAt(1);
            }
            var div6 = document.getElementById(div2);
            vies.option(div6 ,model.foo[div3][div4-1].value);
            var div7 = div.id - 1,
                div8 = document.getElementById(div7);
            div8.style.opacity = 1;
            vies.option(div8 ,model.foo[div3][div4].value);
                var div5 = model.foo[div3][div4].value + model.foo[div3][div4-1].value;
                model.foo[div3][div4].value = div5 - model.foo[div3][div4].value;
                model.foo[div3][div4-1].value = div5 - model.foo[div3][div4].value;
            div8.style.opacity = 1;
                    controler.touth5()

            if(model.point == false){
                var div10 = model.foo[div3][div4].value + model.foo[div3][div4-1].value;
                model.foo[div3][div4].value = div10 - model.foo[div3][div4].value;
                model.foo[div3][div4-1].value = div10 - model.foo[div3][div4].value;
                var div11 = document.getElementById(model.foo[div3][div4].index);
                var div12 = document.getElementById(model.foo[div3][div4-1].index);
                setTimeout(function() {
                    vies.option(div11 ,model.foo[div3][div4].value);
                    vies.option(div12 ,model.foo[div3][div4-1].value);
                }, 600);

            }

            return true;
        },
        touth2: function(e){
            model.point = false;
            var div = e.target,
                div2 = div.id,
                div3,
                div4;
            if(div2 < 10){
                div3 = 0;
                div4 = +div2;
            } else {
                    div3 = +div2.charAt(0);
                    div4 = +div2.charAt(1);
            }

            var div6 = document.getElementById(div2);
            vies.option(div6 ,model.foo[div3][div4+1].value);
            var div7 = +div.id + 1,
                div8 = document.getElementById(div7);
            div8.style.opacity = 1;
            vies.option(div8 ,model.foo[div3][div4].value);
            var div5 = model.foo[div3][div4].value + model.foo[div3][div4+1].value;
            model.foo[div3][div4].value = div5 - model.foo[div3][div4].value;
            model.foo[div3][div4+1].value = div5 - model.foo[div3][div4].value;
                controler.touth5()
            if(model.point == false){
                var div10 = model.foo[div3][div4].value + model.foo[div3][div4+1].value;
                model.foo[div3][div4].value = div10 - model.foo[div3][div4].value;
                model.foo[div3][div4+1].value = div10 - model.foo[div3][div4].value;
                var div11 = document.getElementById(model.foo[div3][div4].index);
                var div12 = document.getElementById(model.foo[div3][div4+1].index);
                setTimeout(function() {
                    vies.option(div11 ,model.foo[div3][div4].value);
                    vies.option(div12 ,model.foo[div3][div4+1].value);
                }, 600);}
            return true;
        },
        touth3: function(e){
            model.point = false;
            var div = e.target,
                div2 = div.id,
                div3,
                div4;
            if(div2 < 10){
                div3 = 0;
                div4 = +div2;
            } else {
                    div3 = +div2.charAt(0);
                    div4 = +div2.charAt(1);
            }

            var div6 = document.getElementById(div2);
            vies.option(div6 ,model.foo[div3 - 1][div4].value);
            var div7 = +div.id - 10,
                div8 = document.getElementById(div7);
            div8.style.opacity = 1;
            vies.option(div8 ,model.foo[div3][div4].value);
            var div5 = model.foo[div3][div4].value + model.foo[div3-1][div4].value;
            model.foo[div3][div4].value = div5 - model.foo[div3][div4].value;
            model.foo[div3-1][div4].value = div5 - model.foo[div3][div4].value;
                controler.touth5()
            if(model.point == false){
                var div10 = model.foo[div3][div4].value + model.foo[div3-1][div4].value;
                model.foo[div3][div4].value = div10 - model.foo[div3][div4].value;
                model.foo[div3-1][div4].value = div10 - model.foo[div3][div4].value;
                var div11 = document.getElementById(model.foo[div3][div4].index);
                var div12 = document.getElementById(model.foo[div3-1][div4].index);
                setTimeout(function() {
                    vies.option(div11 ,model.foo[div3][div4].value);
                    vies.option(div12 ,model.foo[div3-1][div4].value);
                }, 600);}
            return true;


        },
        touth4: function(e){
            model.point = false;
            var div = e.target,
                div2 = div.id,
                div3,
                div4;
            if(div2 < 10){
                div3 = 0;
                div4 = +div2;
            } else {
                    div3 = +div2.charAt(0);
                    div4 = +div2.charAt(1);
            }

            var div6 = document.getElementById(div2);
            vies.option(div6 ,model.foo[div3+1][div4].value);
            var div7 = +div.id + 10,
                div8 = document.getElementById(div7);
            div8.style.opacity = 1;
            vies.option(div8 ,model.foo[div3][div4].value);
            var div5 = model.foo[div3][div4].value + model.foo[div3+1][div4].value;
            model.foo[div3][div4].value = div5 - model.foo[div3][div4].value;
            model.foo[div3+1][div4].value = div5 - model.foo[div3][div4].value;
                controler.touth5()
            if(model.point == false){
                var div10 = model.foo[div3][div4].value + model.foo[div3+1][div4].value;
                model.foo[div3][div4].value = div10 - model.foo[div3][div4].value;
                model.foo[div3+1][div4].value = div10 - model.foo[div3][div4].value;
                var div11 = document.getElementById(model.foo[div3][div4].index);
                var div12 = document.getElementById(model.foo[div3+1][div4].index);
                setTimeout(function() {
                    vies.option(div11 ,model.foo[div3][div4].value);
                    vies.option(div12 ,model.foo[div3+1][div4].value);
                }, 600);}

            return true;

        },

        touth5: function(){
                 var point;
                 for (var i = 0; i < model.foo.length; i++) {
                     for (var j = 0; j < model.foo[i].length; j++) {
                         if (j < model.foo[i].length - 2) {
                             if (model.foo[i][j].value == model.foo[i][j + 1].value && model.foo[i][j + 1].value == model.foo[i][j + 2].value) {
                                 var toto = [];
                                 for (var a = 0; a <= i; a++) {
                                     for (var b = j; b <= j + 2; b++) {
                                         if (a < i) {
                                             toto.push(model.foo[a][b].value);
                                         }
                                     }
                                 }
                                 for (c = 0; c < 3; c++) {
                                     var div = Math.ceil(Math.random() * 9);
                                     toto.unshift(div)
                                 }
                                 for (var o = 0; o <= i; o++) {
                                     for (var p = j; p <= j + 2; p++) {
                                         var div3 = +o + '' + p,
                                             div1 = document.getElementById(+div3),
                                             div4 = toto.shift();
                                         model.foo[o][p].value = div4;
                                         vies.option(div1, model.foo[o][p].value);
                                     }
                                 }
                                 model.count = model.count + 3;
                                 vies.massag(model.count);
                               model.point = true
                                 console.log(model.point)
                                 return;
                             }
                         }
                     }


                 }


                 for (var i = 0; i < model.foo.length; i++) {
                     for (var j = 0; j < model.foo[i].length; j++) {
                         if (i < model.foo[i].length - 2) {
                             if (model.foo[i][j].value == model.foo[i + 1][j].value && model.foo[i + 1][j].value == model.foo[i + 2][j].value) {
                                 var toto = [];
                                 for (var a = 0; a <= i + 2; a++) {
                                     for (var b = j; b <= j; b++) {
                                         if (a < i) {
                                             toto.push(model.foo[a][b].value);
                                         }
                                     }
                                 }
                                 for (c = 0; c < 3; c++) {
                                     var div = Math.ceil(Math.random() * 9);
                                     toto.unshift(div)
                                 }
                                 for (var o = 0; o <= i + 2; o++) {
                                     for (var p = j; p <= j; p++) {
                                         var div3 = +o + '' + p,
                                             div1 = document.getElementById(+div3),
                                             div4 = toto.shift();
                                         model.foo[o][p].value = div4;
                                         vies.option(div1, model.foo[o][p].value);
                                     }
                                 }
                                 model.count = model.count + 3;
                                 vies.massag(model.count);
                                 model.point = true
                                 console.log(model.point)
                                 return;


                             }
                         }
                     }
                 }


            model.point = false;
            console.log(model.point)


        }



    };
    function init(){
        model.circl()
        console.log(model.foo);
        controler.cont();
        controler.touth5();



    }
    init();



}