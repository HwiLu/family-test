<template>
  <div>
	<div v-if="loginShow"><loginWindow @changeShow="getModel(arguments)"></loginWindow></div>
    
  	<div class="show">
  		<div class="mark-text">当前分数</div>
  		<div class="mark">{{mark}}</div>

  		<div class="row">
  			<div class="button right" @click="addMark(1)">+1</div>
  			<div class="button left" @click="addMark(-1)">-1</div>
  		</div>

  		<div class="row">
  			<div class="button right" @click="addMark(5)">+5</div>
  			<div class="button left" @click="addMark(-5)">-5</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import loginWindow from '@/components/loginWindow'

export default {
  components:{
    loginWindow
  },

	data(){
		return{
			mark:0,
			userinfo:{},
			loginShow:false

		}
	},
	methods:{
		addMark(add){
			this.mark = this.mark + add
			console.log("this.mark",this.mark)
		},
		getModel(val){
			this.loginShow = val[0]
			this.userinfo = val[1]
		}
		},
		showOpinion () {
			wx.navigateTo({
				url:'/pages/opinion/main'
			})
		},
		mounted(){
			const userinfo = wx.getStorageSync('userinfo')
			if(userinfo.openId){
				this.userinfo = userinfo
				console.log('用户信息：',userinfo)
			}else{
				wx.hideTabBar()
				this.loginShow = true
			}
		}

}
</script>

<style lang="scss">
.show{
	text-align: center;
	height: 180px;
	background: #ea5149;
	margin-bottom: 5px;
	color: #000;
	font-weight: bold;
	.mark-text{
		font-size: 20px;
		padding: 28px;
	}
	.mark{
		font-size: 88px;
	}
}
.row{
	margin:40px 56px;
	.button{
		width: 70px;
		height: 70px;
		line-height: 70px;
		border-radius: 20%;
		border:none;
		text-align: center;
		font-size: 25px;
		color: #fff;
		font-weight: bold;
  }
}
.right{
	background: #EA5149;
	float: right;
}
.left{
	background:#feb600;
	margin-right: 80px;
}

</style>