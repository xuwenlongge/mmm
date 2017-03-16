/**
 * Created by Administrator on 2017/3/16/016.
 */
$(function () {
//console.log("1")
    $.ajax({
        url:'http://192.168.15.133:3000/api/getcategorytitle',
        success:function(data){
           var module =  template('module1',data);
            $('.nav').html(module);
                console.log(data);
            $('.nav li').on('click',function(){
                //console.log(this);
               var titleid =  this.id;
                var that = this;
                $.ajax({
                    url:'http://192.168.15.133:3000/api/getcategory',
                    data:{
                        titleid:titleid
                    },
                    success:function(data){
                        console.log(data)
                        var m2 = template('module2',data);
                        //console.log($(that));
                        //console.log($(that).next());
                        $(that).next().html(m2);
                    }
                })


            })


        }
    })


})