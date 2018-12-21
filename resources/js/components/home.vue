<template lang="html">

<div>

  <v-parallax
     dark
     src="images/fox-bg.jpg"
     height="500"
     class = "mt-5"
   >

   <v-container fill-height>

  <v-layout align-center row wrap justify-space-between >

      <v-flex  xs12 sm12 md4 order-md2 class = "text-xs-center">

<img src="images/cafe2.png"  style="max-width: 240px;"/>

      </v-flex>

      <v-flex  xs12 sm12 md7 order-md1 class = "text-xs-center"  style="font-family: Lato,sans-serif;">

        <h1 style="letter-spacing: 1px; ">Welcome to Nescafe</h1>

        <h2>Nescafe is good to your health and it helps you focus and relax when you are doing something great just keep going</h2>


          <v-flex vv-cta >


          </v-flex>
      </v-flex>





  </v-layout>



</v-container>
 </v-parallax>






<div id="inner_remaining" style=" background: #000000;">


<v-container fill-height>



<v-layout align-center justify-center wrap>

<v-flex xs12 class = "text-xs-center">

<h2 style="font-family: Lato,sans-serif; color: #000;  font-size: 30px;" >  </h2>
</v-flex>


<v-container grid-list-lg >


<v-layout wrap>

<v-flex xs12 sm4 md3>






  <v-img class = "image-shine"
            src="images/alegria.png"

            height = "300"

          ></v-img>


</v-flex>


<v-flex xs12 sm4 md3>


<v-img class = "image-shine"
          src="images/frappe.png"

                      height = "300"

        ></v-img>

</v-flex>

<v-flex xs12 sm4 md3>

<v-img class = "image-shine"
          src="images/3in1.png"

                      height = "300"

        ></v-img>


</v-flex>


<v-flex xs12 sm4 md3>
<v-img class = "image-shine"
          src="images/original.png"

                      height = "300"

        ></v-img>



</v-flex>

</v-layout>


</v-container>



</v-layout>


</v-container>


</div>
</div>
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
