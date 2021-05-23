<template>
  <div class="bodyStyle container" >
    <div class="container" v-if="loadingProp.loading">
      <b-row>
        <b-col v-for="count in [0,0,0,0,0,0]" :key="count" cols="12">
            <content-placeholders >
              <content-placeholders-heading :img="true" />
              <content-placeholders-text :lines="15" />
            </content-placeholders>
        </b-col>
      </b-row>
    </div>
    <b-container v-else-if="error.parametersError == 1" >
      <b-row>
        <b-col sm="12" md="12" lg="8">
          <b-jumbotron>
            <b-card-header header-bg-variant="danger" header-text-variant="white"> 
              <h3><b>Sorry!</b></h3> We could not identify your Blog.
            </b-card-header>
          </b-jumbotron>
        </b-col>
        <b-col sm="12" md="12" lg="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
    <div class="row" v-else-if="error.parametersError == 0">
    <div class="col-sm-12 col-md-12 col-lg-8">   
    <h1 >{{ blogContent.title }}</h1>
    <p>Published by <b>Blogger</b></p>
    <hr/>
    <br/><br/>
    <p v-html="bodyContent"></p>
    <b-col>
        <p>Share : </p>
        <a :href="`https://www.facebook.com/sharer.php?u=${this.baseUrl}/blogs/${this.blogContent.title_slug}`" target="_blank"><b-icon-facebook></b-icon-facebook></a>&emsp;
        <a :href="`https://twitter.com/intent/tweet?url=${this.baseUrl}/blogs/${this.blogContent.title_slug}`" target="_blank"><b-icon-twitter></b-icon-twitter></a>&emsp;
        <a :href="`whatsapp://send?text=${this.baseUrl}/blogs/${this.blogContent.title_slug}`" target="_blank"><b-icon-watch></b-icon-watch></a>&emsp;
        <a :href="`https://www.linkedin.com/shareArticle?url=${this.baseUrl}/blogs/${this.blogContent.title_slug}`" target="_blank"><b-icon-linkedin></b-icon-linkedin></a>
    </b-col>
    <div class="">
      <br>
      <b-row >
        <b-col cols="12" v-for="comment in this.blogContent.approved_comments"  :key="comment">
            <b-card border-variant="success" header="Comment">
              <b-card-body>
                <p>From : {{comment.name}}</p>
                <p>{{comment.comment}}</p>
              </b-card-body>
            </b-card>
            <div border-variant="primary" class="replySection" header-bg-variant="transparent" header="Reply" v-for="reply in comments.reply" :key="reply.id">
              <div v-if="reply.comment_id==comment.id">
                <b-card border-variant="primary" class="replySection" header-bg-variant="transparent" header="Reply">
                  <p>{{reply.reply}}</p>
                </b-card>
              </div>
            </div>
          
        </b-col>
      </b-row>  
      <br>
      <h4>Comment</h4>
      <hr>
       <b-alert v-show="this.comment.postResponse.showMessage == 1" show :variant="`${this.comment.postResponse.statusVariant}`" dismissible>
           <b>{{this.comment.postResponse.message}}</b>
        </b-alert>
       <br> 
      <form>
        <b-row>
          <b-col cols="6">
            <label>Name</label>
            <b-form-input class="form-control"  v-model="comment.name" placeholder="Name :" @keyup="checkThisFieldEmpty('name')" :state="comment.state.name" aria-describedby="input-live-feedback"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback" > 
              {{this.comment.state.errorMessage.name}}
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="6">
            <label>E-Mail</label>
            <b-form-input class="form-control" v-model="comment.email" :state="comment.state.email"  @keyup="checkThisFieldEmpty('email')" aria-describedby="input-live-feedback-email" placeholder="E-Mail :"></b-form-input> 
            <b-form-invalid-feedback id="input-live-feedback-email">
              {{this.comment.state.errorMessage.email}}
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12"><br>
            <label>Comment</label>
            <b-form-textarea rows="5" class="form-control" v-model="comment.comment" :state="comment.state.comment" aria-describedby="input-live-feedback-comment"  @keyup="checkThisFieldEmpty('comment')" placeholder="Comment"></b-form-textarea>
            <b-form-invalid-feedback id="input-live-feedback-comment">
              {{this.comment.state.errorMessage.comment}}  
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12"><br>
          <b-button variant="success" @click="sendComment()">Send your comment</b-button>
          </b-col>
        </b-row>
      </form>
    </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4">   
      <Sidebar/>
    </div>  
    </div>
  </div>
</template>

<script>
import config from '~/nuxt.config'
import Sidebar from '../common/sidebar'

export default {
  components:{
    Sidebar
  },
  loading:true,
  layout: 'front/layoutview',
  head() {
    let metaHead = this.blogContent;
    return {
      title: `${config.head.title} - ${this.blogContent.title}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: `${metaHead.blog_description}`
        },
        {
          hid: `og:image`,
          name: 'og:image',
          content: `${config.axios.apiBaseURL}/${metaHead.file_path}`
        },
        {
          hid: `og:title`,
          name: 'og:title',
          content: `${metaHead.title}`
        },
        {
          hid: `og:description`,
          name: 'og:description',
          content: `${metaHead.blog_description}`
        },
      ],
    }
  },
  props: {
    author: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      loadingProp:{
        loading : true
      },
      comment:{
        name:'',
        email:'',
        comment:'',
        postResponse:{
          message : '',
          statusVariant : '',
          showMessage : 0
        },
        state:{
          name:'asd',
          email:'asd',
          comment:'asd',
          errorMessage:{
            name:'Name is required',
            email:'Email is required',
            comment:'Comment too short'
          },
        }
      },
      blogContent: '',
      comments:{
        reply:''
      },
      error:{
        parametersError: 0
      },
      bodyContent:'',
      postUrlSlug: '',
      siteTitle: '...',
      baseUrl:config.axios.apiBaseURL,
    }
  },
  created() {
    this.postUrlSlug = this.$route.params.post
    this.fetchBlogInfo()
    this.siteTitle = this.blogContent.title
  },
  mounted(){
    console.log("");
  },
  methods: {
    fetchBlogInfo() {
      this.$axios
        .$get(`${config.axios.apiBaseURL}/api/blogs/search`, {
          params: { title: this.postUrlSlug },
        })
        .then((res) => (
          this.blogContent = res,
          this.comments.reply = res.replies,
          this.loadingProp.loading = false,
          this.error.parametersError = 0,
          this.setBlogImagePath()
        )).catch( (ress) => (this.loadingProp.loading = false),(this.error.parametersError = 1) );
        
    },
    checkThisFieldEmpty:function(field){
      let getFieldName = field;
      if(getFieldName == "name"){
        (this.comment.name.length < 1) ? this.comment.state.name = false:this.comment.state.name = true;
      }
      if(getFieldName == "email"){
        (this.comment.email.length < 10) ? this.comment.state.email = false:this.comment.state.email = true;
      }
       if(getFieldName == "comment"){
        (this.comment.comment.length < 10) ? this.comment.state.comment = false:this.comment.state.comment = true;
      }
    },
    sendComment:function(){
      if(this.comment.state.comment && this.comment.state.email && this.comment.state.name){
        this.$axios
        .$post(`${config.axios.apiBaseURL}/api/blogs/comment/create`, {id:this.blogContent.id,user_name: this.comment.name,user_mail: this.comment.email,user_comment: this.comment.comment 
        })
        .then((res) => (
            this.comment.postResponse.message = res.message,
            this.comment.postResponse.statusVariant = res.varient,
            this.comment.postResponse.showMessage = 1
          )
        )
        .catch( (asd) => 
          this.displayErrorMessage(asd.response.data.errors)
        )
      }else{
       this.comment.postResponse.showMessage = 0, 
       alert('Please fill error fields') 
      }
    },
    displayErrorMessage:function($errors){
       this.comment.postResponse.showMessage = 0; 
       let errors = $errors;
       if(errors.user_comment != undefined){
         this.comment.state.comment = false
         this.comment.state.errorMessage.comment = errors.user_comment[0]
       }
       if(errors.user_name != undefined){
         this.comment.state.name = false
         this.comment.state.errorMessage.name = errors.user_name[0]
       }
       if(errors.user_mail != undefined){
         this.comment.state.email = false
         this.comment.state.errorMessage.email = errors.user_mail[0]
       }
    },
    setBlogImagePath(){
      console.log("consoles");
      this.bodyContent = this.blogContent.content.replaceAll('/blogcontentfile','https://xiteb.net/projects/xiteb-blog-test/public/blogcontentfile');
    }

  },
}
</script>


<style >
body{
  font-family: 'Barlow Semi Condensed', sans-serif;
}
.bodyStyle{
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding: 30px 0px 0px 0px;
}
.replySection{
  margin:5px 0px 5px 20px;
}
</style>
