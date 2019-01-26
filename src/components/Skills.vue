<template>
    <section class="skills">
      <div class="container">
        <div class="skills__container">
            <h2 class="skills__title">
                awesome <br> skillz
            </h2>
            <div class="skills__goodVibes">
                <img 
                    class="skills__goodVibesSmile" 
                    src="~@/assets/img/about/smile.svg"
                >
                
                <img
                    class="skills__goodVibesRound" 
                    src="~@/assets/img/about/goodvibes.svg"
                >

            </div>
            <div class="skills__cards">
                <div 
                    class="skills__card"
                    v-for="skill in skills"
                    :key="skill.name"
                >
                    <div class="skills__img">
                        <!-- <img :src="skill.img"> -->

                        <img src="~@/assets/img/about/illustration.svg">
                    </div>
                    
                    <div class="skills__name">
                        {{skill.name}}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>

// @ is an alias to /src

export default {
  name: "Skills",
  data: function() {
    return {
        skills: [
            {
                name: "illustration",
                img: "~@/about/illustration.svg"
            },
            {
                name: "motion",
                img: "~@/public/about/motion.svg"
            },
            {
                name: "user interface",
                img: "public/about/ui.svg"
            },
            {
                name: "fast drinking",
                img: "./about/about/drinking.svg"
            }
        ]
    }
  },
  props: {
  }
};
</script>
<style scoped>
.skills {
  color: white;
  background-color:  #F54123;
}
.skills__container {
    position: relative;
  width: 66%;
  margin: 0 auto;
}

.skills__goodVibes {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -30%, 1px);
    width: 110px;
    height: 110px;
}
.skills__goodVibesRound, .skills__goodVibesSmile {
    position: absolute;
}
.skills__goodVibesRound {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: rotateIt 10s linear infinite;

}
.skills__goodVibesSmile {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 1px);
}
.skills__title {
  font-family: 'integral cf';
  font-size: 2.5rem;

}
.skills__cards {
    margin-top: 8vh;
    display: flex;
    justify-content: space-between;
}
.skills__card {
    border: 2px solid white;
    border-radius: 5px;
    flex-basis: 22.5%;
    text-align: center;
}
.skills__img {
    padding: 16px 0;
}
.skills__name {
    border-top: 2px solid white;
    text-transform: uppercase;
    align-items: center;
    padding: 16px 0;
}
</style>

