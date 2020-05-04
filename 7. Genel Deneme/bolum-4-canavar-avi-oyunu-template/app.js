new Vue({
	el: "#app",
	data: {
		gameStart: false,
		pHealth: 100,
		mHealth: 100,
		log: [],
		isFinish: false
	},
	methods: {
		startGame: function(){
			this.gameStart=true;
			this.pHealth=100;
			this.mHealth=100;
			this.log=[];
			this.log.push({
				'player':true,
				'text': 'Oyun Başladı'
			});
		},
		endGame: function(){
			this.gameStart=false;
		},
		attack: function(){
			if(!this.isFinish){
				var th = this;
				this.attackDetail(true, 10);
				setTimeout(function(){
					th.attackDetail(false, 10);
				},150);
			}
		},
		attackDetail: function(isPlayer, attack){
			var rnd=Math.floor(Math.random()*attack);
			if(isPlayer) this.mHealth-=rnd;
			else this.pHealth-=rnd;
			this.log.push({
				'player':isPlayer,
				'text': (isPlayer ? 'Oyuncu ':'Canavar ') + 'Saldırı ('+rnd+')'
			});
		},
		heal: function(){
			if(!this.isFinish){
				var rnd=Math.floor(Math.random()*50);
				var th = this;
				this.pHealth+=rnd;
				this.log.push({
					'player':true,
					'text': 'Oyuncu can yenileme ('+rnd+')'
				});
				setTimeout(function(){
					th.attackDetail(false, 50);
				},150);
			}
		},
		specialAttack:function(){
			if(!this.isFinish){
				var rnd=Math.floor(Math.random()*50);
				var th = this;
				this.mHealth+=rnd;
				this.log.push({
					'player':false,
					'text': 'Canavar can yenileme ('+rnd+')'
				});
				setTimeout(function(){
					th.attackDetail(true, 50);
				},150);
			}
		}
	},
	computed: {
		pHealthStyle: function(){
			return {
				'width': this.pHealth +'%'
			}
		},
		mHealthStyle: function(){
			return {
				'width': this.mHealth +'%'
			}
		}
	},
	watch: {
		pHealth: function(val, oldVal){
			if(val<=0){
				alert("Oyun Bitti! \n KAYBETTİN.");
				this.endGame();
			}
			else if(val>=100){
				this.pHealth=100;
			}
		},
		mHealth: function(val, oldVal){
			if(val<=0){
				alert("Oyun Bitti! \n KAZANDIN.");
				this.endGame();
			},
			else if(val>=100){
				this.mHealth=100;
			}
		}
	}
})