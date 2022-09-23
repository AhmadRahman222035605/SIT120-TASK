Vue.component('card1',{
    template: `
<div class="card">
    <div class="top">
        <div class="Details">
            <img v-bind:src="image1" style="width: 40px; height: 40px;">
        </div>
        <b> POST BY: USER1212</b><br>

        Hey Everyone! Im a new member in this group. I am excited to meet you all and hopefully make friendships :)                    <br>       <br>         <br>

        <img v-bind:src="image" style="width: 100px; height: 100px;">
    </div>
        <br>
        <button style="width: 40px; z-index: -1;" v-on:click="likeNum" ><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>{{count}}</button>
        
        <br>
        0 comments

</div>

    `,
    data(){
        return {
            image: './Images/Hello.gif',
            image1: './Images/pfp1.png',

        
            count: 0,
          }
    } ,
      methods:{
        likeNum: function(){
          this.count +=1
        },
        myFunction(x) {
            x.classList.toggle("fa-thumbs-down");
        }
      }
})
Vue.component('card2',{
    template: `
<div class="card">
    <div class="top">
        <div class="Details">
            <img v-bind:src="image1" style="width: 40px; height: 40px;">
        </div>
        <b> POST BY: USER222</b><br>

        Hey Guys, <br> Who is ready to game! Lets form a party and play together        <br>       <br>         <br>

        <img v-bind:src="image" style="width: 100px; height: 100px;">
    </div>
        <br>
        <button style="width: 40px; z-index: -1;" v-on:click="likeNum" ><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>{{count}}</button>
        
        <br>
        0 comments

</div>

    `,
    data(){
        return {
            image: './Images/game.png',
            image1: './Images/pfp2.jpeg',

        
            count: 0,
          }
    } ,
      methods:{
        likeNum: function(){
          this.count +=1
        },
        myFunction(x) {
            x.classList.toggle("fa-thumbs-down");
        }
      }
})
Vue.component('card3',{
    template: `
<div class="card">
    <div class="top">
        <div class="Details">
            <img v-bind:src="image1" style="width: 40px; height: 40px;">
        </div>
        <b>POST BY: USER123</b><br>
        
        Meet Ginger. My dog. He is so cutee!       <br>       <br>         <br>

        <img v-bind:src="image" style="width: 100px; height: 100px;">
    </div>
        <br>
        <button style="width: 40px; z-index: -1;" v-on:click="likeNum" ><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>{{count}}</button>
        
        <br>
        0 comments

</div>

    `,
    data(){
        return {
            image: './Images/dog.jpg',
            image1: './Images/pfp3.png',

        
            count: 0,
          }
    } ,
      methods:{
        likeNum: function(){
          this.count +=1
        },
        myFunction(x) {
            x.classList.toggle("fa-thumbs-down");
        }
      }
})




  
  
  var app = new Vue({
    el: '#app',
    
  })