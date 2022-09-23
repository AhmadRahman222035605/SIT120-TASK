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

                    By: User121
                    <br>
                    <br>
                    <br>
                    <br>  
                    Hi! Do you wanna play Minecraft with me?
                
                    </div>
                    <div id="content2">                    
                    Message Date: 1 week ago
                    <br>

                    By: Jack1212
                    <br>
                    <br>
                    <br>
                    <br>
                    Hey bro. Lets get in touch. I would like to be friends with you!</div>

                    <div id="content3">
                    Message Date: 2 weeks ago
                    <br>

                    By: userx1x1
                    <br>
                    <br>
                    <br>
                    <br>
                    Hey Whats up?
                    
                    </div>
                    <footer>
                    
                    </footer>
    </div>

    `
})
var app = new Vue({
    el: '#app',
    data: {

    }
});
