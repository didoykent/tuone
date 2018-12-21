<template>



<v-app>




  <v-navigation-drawer
       v-model="drawer"
       temporary
       absolute
       style="background-color: #041e30 !important;
       border-color: #041e30 !important;" dark>
     >

       <v-list class="pt-0" dense>

         <v-list-tile-content>

                 <router-link :to="{ name: '', params: {} }">ABOUT</router-link>
                 <router-link :to="{ name: '', params: {} }">SPONSORS</router-link>
                 <router-link :to="{ name: '', params: {} }">TEAM</router-link>
                 <router-link :to="{ name: '', params: {} }">GALLERY</router-link>
                 <router-link :to="{ name: '', params: {} }">LIBRARY</router-link>
                 <router-link :to="{ name: '', params: {} }">SHOP</router-link>

                  </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-navigation-drawer>

  <v-toolbar  fixed style="background-color: #041e30 !important;
  border-color: #041e30 !important;" dark>

      <v-toolbar-side-icon  @click.native.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

      <v-toolbar-title style = "margin:0px; " ><img src="images/cafe2.png"  style="max-width: 40px; margin-right:10px; display:flex; "/></v-toolbar-title><h2 style="font-size: 20px;">Jared Mega</h2>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn flat color = "#fff" >ABOUT</v-btn>
        <v-btn flat color = "#fff" >SPONSORS</v-btn>
        <v-btn flat color = "#fff" >TEAM</v-btn>
        <v-btn flat color = "#fff">GALLERY</v-btn>
        <v-btn flat color = "#fff">LIBRARY</v-btn>
        <v-btn flat color = "#fff">SHOP</v-btn>
          <v-btn flat class = "depressed  forbutton">English</v-btn>
      </v-toolbar-items>


    </v-toolbar>




<router-view></router-view>


  <v-footer class="pa-3"    style="background-color: #041e30 !important;
     border-color: #041e30 !important; height: auto;">
   <v-spacer></v-spacer>
   <div>&copy; {{ new Date().getFullYear() }}</div>
 </v-footer>



  </v-app>
</template>

<script>
export default {

  data(){


    return{

      drawer: false,
         items: [
           { title: 'Home', icon: 'dashboard' },
           { title: 'About', icon: 'question_answer' }
         ],
         right: null
    }
  }
}
</script>

 <style >



.fillimage{

background-image:  linear-gradient(220deg, rgb(255, 255, 255), #1DE9B6);
height: 40%;
}


.title{


  font-size: 20px!important;
    font-weight: 500;
    line-height: 1!important;
    letter-spacing: .02em!important;
    font-family: Roboto,sans-serif!important;
}

.headline {

  font-size: 24px!important;
      line-height: 32px!important;
}

.v-card .v-image::before{


  background-image: linear-gradient(135deg,hsla(0,0%,100%,0) 30%,hsla(0,0%,100%,.8),hsla(0,0%,100%,0) 70%);
    background-repeat: no-repeat;
    background-size: 200% 100%,auto,100% 2px,100% 2px,100% 1px,100% 1px;
    background-position: 200% 0,0 0,0 0,0 100%,0 4px,0 calc(100% - 4px);
}


.v-card .v-image::after{



}

.rounded-card img{
  background-color: red;
}


.image-shine:after {
  content: "";
  position: absolute;
    top: -60%;
  left: -50%;
  width: 20%;
  height: 200%;
  opacity: 0;
  transform: rotate(40deg);

  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}

/* Hover state - trigger effect */
.image-shine:hover:after {
  opacity: 1;
  left: 170%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

/* Active state */
.image-shine:active:after {
  opacity: 0;
}






 </style>
