$(function(){
	
	var vm = new Vue({
		el:'.container',
		data:{
			xuank:"",
			xuank1:'',
			xuank2:'',
			xuank3:'',
			one:true,
			two:false,
			three:false,
			four:false,
			info:''
		},
		methods:{
			y(){
				if(this.one) return ;
				this.two=false;
				this.three=false;
				this.four=false;
				this.one = !this.one;
			},
			e(){
				if(this.two) return 
				this.one = false;
				this.three=false;
				this.four=false;
				this.two = !this.two
			},
			s(){
				if(this.three) return 
				this.one = false;
				this.two=false;
				this.four=false;
				this.three = !this.three
			},
			si(){
				if(this.four) return 
				this.one = false;
				this.two=false;
				this.three=false;
				this.four = !this.four
			},
		},
		mounted(){
			this.$http({
				url:"data.txt",
				method:"GET"
			}).then(function(res){
				this.xuank = res.data.new_news;
				this.xuank1 = res.data.action_news;
				this.xuank2 = res.data.product_news;
				this.xuank3 = res.data.today_news;
				this.info = res.data.info
			})
		}
	});
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
