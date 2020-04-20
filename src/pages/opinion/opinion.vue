<template>
<div>
    <div class="contain">
     <div class="row">
         <p class="name">意见与反馈</p>
     </div>
        <div class="row text">
            <textarea v-model="opinion"  
            maxlength="200" 
            placeholder="点击这里输入您的建议" 
            class="input" 
            ></textarea>
            <p class="word-count">{{word_count}}/200</p>

        </div>
        <div class="row">
          <div>
            <label class="name">相关截图（选填）</label>
            <label class="img-count">{{img_count}}/2</label>
          </div>
        <!-- v-for是vue的语法，循环语句，循环显示当前上传的照片 -->
          <label v-for="(item, index) in src" :key="index">
            <img class="img" :src="item" >
          </label>
        <!-- v-if是判断语句，判断当前照片数量如果小于2张，就显示添加照片的按钮；反之就不显示了在这里添加点击事件，点击按钮调用uploadPicture方法上传照片 -->
          <label v-if="img_count < 2" @click="uploadPicture">
            <img class="add-img" :src="addimage">
          </label>
        </div>
        <div class="row">
        <div class="name">微信号（选填）</div>
        <input
          v-model='wechat'
          class = "wechat-input"
          maxlength='20'
          placeholder="如果想要详细交流，可以点击这里留下微信号哦~"
        />
        </div>
    </div>
    <button class="button" @click="submmit">提交</button>
</div>
</template>
<script>
export default {
    data(){
        return{
            opinion:"",
            addimage:"../../static/images/addimage.png",
            word_count:0,
            src:[],
            img_count:0,
            wechat:"",
            //用三元运算符直接读取缓存里面的用户信息
            userinfo: wx.getStorageSync('userinfo')? wx.getStorageSync('userinfo') : {}
        }
    },
     watch:{
         opinion(){
         this.word_count = this.opinion.length   
         },
         src() {
           this.img_count = this.src.length
         }   
        },
    methods:{
        uploadPicture(){
          let that = this
          wx.chooseImage({
            count: 2,
            sizeType: ['original','compressed'],
            sourceType: ['album','camera'],
            success: (res)=>{
              const tempFilePaths = res.tempFilePaths
              //用that.src来调用data函数定义的src变量
              that.src.push(tempFilePaths)
              console.log('that.src',that.src)
              
            },
            fail: ()=>{
              wx.wx.showToast({
                title: '上传图片失败',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result)=>{
                  
                },
                fail: ()=>{},
                complete: ()=>{}
              });
            },
            complete: ()=>{}
          });
        },
        async submmit(){
          const data = {
            opinion: this.opinion
          }
          wx.request({
            url:"http:/localhost:5757/weapp/createopinion",
            method:"POST",
            data:data,
            success:function(res){
              console.log("请求成功")
            }
          })
        }
    }
}

</script>
<style lang="scss">
.contain{
  background:#FFFFFF;
  font-size:15px;
  .text {
    height: 110px;
  }
  .row{
    border-bottom: 1px #E8E8E8 solid;
    padding: 5px 15px;
    .name {
      width:80%;
      height: 40px;
      line-height: 40px;
    }
    .input {
      width:100%;
      height:85px;
      font-size:14px;
      padding-top:5px;
    }
    .word-count {
      float:right;
      color: #808080;
    }
    .img-count {
      float:right;
      line-height: 40px;
      color: #808080;
    }
    .add-img {
      width:80px;
      height:80px;
    }
    .img {
      width:66px;
      height:66px;
      margin-bottom:7px;
      margin-right: 10px;
    }
    .wechat-input{
      font-size:14px;
    }
  }
}  
button {
  margin:20px auto;
  width:90%;
  border-radius: 5px;
  background:#EA5149;
  font-size:16px;
  color:#FFFFFF;
  font-weight:bold;
}

</style>