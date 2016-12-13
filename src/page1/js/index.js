window.onload=function(){
    var demo=new Vue({
        el:'#btngroup',
        data:{
            select:'按钮1'
        },
        methods:{
            makeActive:function(item){
                this.select=item;
            }
        }
    });
    
    var message=new Vue({
    	el:'#mydiv',
    	data:{
    		message:'hello'
    	}
    });
}