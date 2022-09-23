//Creates a component called message to display the old messages in the inbox. Each message is put into a content box
Vue.component('message',{
    template: ` 
    <div class="container">
                    <div id="main" style="font-size: 20px;">
                    <br>
                    <br>
                    YOU HAVE NO NEW MESSAGES
                    </div>
                    <div id="content1">
                    Message Date: 6 days ago
                    <br>

                    By: User1212
                    <br>
                    <br>
                    <br>
                    <br>  
                    Hi! Do you wanna play Minecraft with me?
                    <br>
                    <br>
                    <br>
                    <check-readd style="color:black;">Read</check-readd>
                    </div>
                    <div id="content2">                    
                    Message Date: 1 week ago
                    <br>

                    By: Jack1212
                    <br>
                    <br>
                    <br>
                    <br>
                    Hey bro. Lets get in touch. I would like to be friends with you!
                    <br>
                    <br>
                    <br>
                    <check-readd style="color:black;">Read</check-readd>
                    </div>

                    <div id="content3">
                    Message Date: 2 weeks ago
                    <br>

                    By: userx1x1
                    <br>
                    <br>
                    <br>
                    <br>
                    Hey Whats up?
                    <br>
                    <br>
                    <br>
                    <br>
                
                    <check-readd style="color:black;">Read</check-readd>
                    </div>
                    <footer>
                    <h1>Your Groups</h1>
                    <br>
]
                    <p v-for="group in Groups">{{Groups}}</p>
]
                    </footer>
    </div>

    `,
    data(){
        return {
            Groups: ["Minecraft Group", "12 Members", "Chess Group", "240 Members"],
          }
    } ,

})















Vue.component('check-readd',{
    template: '#check-read'
});

Vue.component('navigation',{
    props:['message'],
    template: `
    <div id="nav" style="margin-top: 0;">
            <!--Creates the navigation bar using the library-->
        <nav class="navbar navbar-expand navbar-light" style="background-color: rgba(12, 245, 199, 0.409); height: 60px;">
            <a href="./index.html">
            <!--Logo button which takes you back to the index page-->
            <button id="GC" class="btn btn-primary btn-lg">{{message}}</button>
            </a>
  
  
            <input id="search" type="text" placeholder="Search"> <!--Search bar added. Without funtionality-->
            <button id="sub" type="submit">submit</button>
            <a href="./inbox.html">
            <!--Inbox button which takes you back to the inbox page-->
            <button id="inbox" class="btn btn-primary btn-lg">INBOX</button>
            </a>
        </nav>
    </div>
    `
})

var newapp = new Vue({
    el: '#newapp',
    data: {

    }
});

var app = new Vue({
    el: '#app',
    data: {

    }
});
