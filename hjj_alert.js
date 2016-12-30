(function($){
          $.Halert=function(title,text,callback){
                if(title==undefined){
                  title=""
                }
                if(text==undefined)
                  text=""
                
               $("body").append(
                  '<div class="H_box">'+
                      '<div class="H_head">'+
                          '<h3>'+title+'</h3>'+
                      '</div>'+
                      '<div class="H_conter">'+
                          text+
                      '</div>'+
                      '<div class="H_foot">'+
                            '<div>'+
                                '<button class="H_ok">确定</button>'+
                                '<button class="H_qx">取消</button>'+
                            '</div>'+
                      '</div>'+
                  '</div>'
                )           
                $(".H_qx,.H_ok").click(function(){
                  $(".H_box").remove();
                })
                
                $(".H_head").mousedown(function(e){
                    var x=e.clientX-($(".H_box")[0].offsetLeft);
                    var y=e.clientY-($(".H_box")[0].offsetTop);
                    $(".H_head").mousemove(function(e){
                        $(".H_box").css({
                          "margin-left":0,
                          "left":e.clientX-x,
                          "top":e.clientY-y
                        })
                    })
                    $(".H_head").mouseup(function(){
                      console.log(123)
                      $(".H_head").unbind('mousemove');
                    })  
                })
                if(typeof callback=="function"){
                  callback(); 
                }                
          }
        })(jQuery)