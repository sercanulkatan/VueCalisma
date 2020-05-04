new Vue({
        el: '#exercise',
        data: {
            value: '',
			value2: ''
        },
		methods:{
			keyDown:function(e){
				this.value=e.target.value
			},
			alertShow:function(){
				alert();
			}
		}
    });