
<template>

    <div class="main_content">

        <div class="doctor-image">
                <img src="@/images/main/doctor.png">
        </div>
        
        <div class="about">

              <div class="QUALIFICATIONS" >
                <img src="@/images/main/Untitled-1.png">
              </div>
              
              <ul class="qualification">
                  <strong id="st" >
                    <span >
                        <span class="under-line">Diplomé</span> du Collège Français de Chirurgie Plastique, Reconstructrice et Esthétique.<br>
                    </span>
                  </strong>
                  <br>

                  <strong id="st">
                    <span>
                      <span class="under-line">Diplôme</span>
                       Universitaire de Microchirurgie. Faculté de Médecine Paris 7 <br></span>
                  </strong>
                  <br>

                  <strong id="st">
                    <span>
                      <span class="under-line">Diplôme</span>
                       d'anatomie appliqué à la chirurgie plastique. Faculté de Médecine Paris 5</span>
                  </strong>

              </ul>

              <router-link to="/Lire" className="button1">LIRE</router-link>
				

            
        </div>

          <div class="slideshow-container">

                <div 
                     class="mySlides fade"
                     v-for="(el, index) in my_array"
                     :key="index"
                     :style="{display: slide_number === index ? 'block' : 'none'}"
                     > 
                    <img id="mySlides" :src="(el.img)">
                    <div class="text"><p>{{ el.title }}</p></div> 
                </div>  
            
            
                <a class="prev carousel-control" @click="plusSlides(0)"></a>
                <a class="next carousel-control" @click="plusSlides(1)"></a>
          </div>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                my_array: [
                    { 
                       img:require('@/assets/images/proces.png'),
                       title: 'Rhinoplastie'
                    },
                    { 
                       img:require("@/assets/images/Image.jpeg"),
                       title: 'Rhinoplastie'
                    }
                ],
                slide_number: 1
            }
        },
        
        methods:{
            plusSlides(is_back){
                if(is_back){
                    if(this.slide_number > 0){
                        this.slide_number -= 1;                       
                    }
                }else{
                    if(this.slide_number + 1 < this.my_array.length){
                        this.slide_number += 1;
                    }
                }
            }
        }

    }
    

</script>



