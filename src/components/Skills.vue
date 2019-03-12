<template>
    <section class="skills">
      <div class="container">
        <div class="skills__container">
            <h2 class="skills__title">
                awesome <br> skillz
            </h2>
            <div class="skills__cards">
                <div 
                    :class="`skills__card ${skill.name}`"
                    v-for="skill in skills"
                    :key="skill.name"
                >
                    <div class="skills__img">
                        <img :src="skill.img">

                    </div>
                    
                    <div class="skills__name ">
                        {{skill.name}}
                    </div>
                </div>
            </div>
            <img class="skills__waves" src="../assets/img/about/wave.svg">
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
                img: "../assets/about/about_illustration.svg"
            },
            {
                name: "motion",
                img: "../assets/about/about_motion2.svg"
            },
            {
                name: "user interface",
                img: "../assets/about/about_ui.svg"
            },
            {
                name: "fast drinking",
                img: "../assets/about/about_drinking.svg"
            }
        ]
    }
  },
  props: {
  }
};
</script>
<style lang="scss" scoped>
.skills {
    z-index: 0;
  color: white;
  background-color:  #F54123;
  .container {
    z-index: 0;

    @media screen and (max-width: 600px) {
        padding: 50px 0px 50px 0!important;
    }
  }
}
.skills__container {
    position: relative;
    width: 66%;
    margin: 0 auto;
    @media screen and (max-width: 750px) {
        width: 100%;

    }
    .drinking .skills__img {
        transform: translateX(3px);
    }
}

.skills__waves {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(25%, 0%, 1px);
    width: 165px;


    @media screen and (max-width: 750px) {
        transform: translate3d(10%, 0%, 1px);
        width: 90px;
        height: 90px;
    }
}
.skills__title {
  font-family: 'integral cf';
  font-size: 2.5rem;
    @media screen and (max-width: 900px) {
        font-size: 2.25rem;
    }

}
.skills__cards {
    margin-top: 8vh;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 950px) {
        flex-wrap: wrap;
    }
}
.skills__card {
    border: 2px solid white;
    border-radius: 4px;
    flex-basis: 22.5%;
    text-align: center;
    @media screen and (max-width: 950px) {
        flex-basis: 48%;
        margin-bottom: 30px;
        flex-wrap: no-wrap;
    }
}
.skills__img {
    height: 150px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-height: 75px;
    }
}
.skills__name {
    border-top: 2px solid white;
    text-transform: uppercase;
    align-items: center;
    padding: 16px 0;
}
</style>

