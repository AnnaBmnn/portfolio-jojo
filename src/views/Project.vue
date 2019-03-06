<template>
  <div class="project">
    <div class="container">
      <div class="project__logo">
        <router-link class="logo " to="/">
          <img src="../assets/img/logo.svg">
        </router-link>
      </div>
      <div class="project__card">
        <div class="project__firstLine">
          <h1 class="project__title">{{this.projectInfos.name}}</h1>
          <div class="project__illus">
            <img class=""  :src="this.projectInfos.illus">
            <img class=""  :src="this.projectInfos.illus">
            <img class=""  :src="this.projectInfos.illus">
          </div>
        </div>
        <div class="project__infos">
          <div class="project__info">
            <div class="project__infoKey">type</div>
            <div class="project__infoContent">{{this.projectInfos.type}}</div>
          </div>
          <div class="project__info">
            <div class="project__infoKey">year</div>
            <div class="project__infoContent">{{this.projectInfos.year}}</div>
          </div>
          <div class="project__info">
            <div class="project__infoKey">role</div>
            <div class="project__infoContent">{{this.projectInfos.role}}</div>
          </div>
        </div>
      </div>

      <button-shadow class="project__btn" linkTo="/" linkContent="back" />
    </div>
    <div class="container container__txt">
      <div class="project__txt">
        {{this.projectInfos.txt}}
      </div>
    </div>
    <div class="waves">
      <img class="waves__img"  src="../assets/img/home/wave.svg">
    </div>
    <project-tesla v-if="this.projectInfos.name === 'tesla'" :imgs="this.projectInfos.imgs" />
    <project-vibu v-else-if="this.projectInfos.name === 'vibu'" :imgs="this.projectInfos.imgs" />
    <project-olympics v-else-if="this.projectInfos.name === 'olympics'" :imgs="this.projectInfos.imgs" />
    <next-project :index="(this.projectInfos.index)%4"></next-project>
  </div>
</template>

<script>
import { projects } from "../datas/projects.js";
import ButtonShadow from "@/components/ButtonShadow.vue";
import ProjectTesla from "@/components/ProjectTesla.vue";
import ProjectVibu from "@/components/ProjectVibu.vue";
import ProjectOlympics from "@/components/ProjectOlympics.vue";
import NextProject from "@/components/NextProject.vue";


export default {
  name: "project",
  components: {
    ButtonShadow,
    ProjectTesla,
    ProjectVibu,
    ProjectOlympics,
    NextProject
  },
  data: function(){
    return {
      projectInfos: projects.find((project)=>{
        return project.name == this.$route.params.slug;
    })
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  .container {
    height: unset;
    padding: 10vh 0;
  }
}
.container {
  @media screen and (max-width: 600px) {
    padding: 30px 0px 50px 0
  }
}
.project__logo {
  position: fixed;
  left: 2%;
  top: 10vh;
  margin-left: 0%;    

  @media screen and (max-width: 1000px) {
    left: 0%;    
  }
  @media screen and (max-width: 750px) {
    width: 60px;    
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    width: 90px;    
  }
}
.project__btn {
  position: absolute;
  right: 4%;
  top: 10vh;
}

.project__card {
  box-sizing: border-box;
  position: relative;
  padding: 50px 60px;
  width: 60%;
  margin: 0 auto;
  border: 3px solid #0B3536;
  border-radius: 6px;
  background-color: white;
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 20px;
    left: 20px;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    background-color: #0B3536;
  }
  @media screen and (max-width: 870px) {
    width: 50.5%;
  }
  @media screen and (max-width: 730px) {
    width: 100%;
    margin-top: 180px;
    padding: 50px 40px;

  }

}
.project__firstLine {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  
}
.project__title {
  font-family: 'integral cf';
  line-height: 0.6;
  font-size: 5.4rem;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1000px) {
    order: 2;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.25rem;
  }
}
.project__infos {
  margin-top: 80px;
}
.project__info {
  box-sizing: border-box;
  min-width: 10%;
  margin-right: 30px;
  display: inline-block;
  @media screen and (max-width: 730px) {
    margin-right: 0px;

    width: 49%;
    margin-bottom: 20px;
  }
}

.project__illus {
  img {
    margin-left: 20px;
    max-height: 60px;
    max-width: 60px;
    width: auto;
  }
  @media screen and (max-width: 1100px) {
    img {
      margin-left: 15px;
      max-height: 60px;
      max-width: 60px;

    }
  }
  @media screen and (max-width: 1050px) {
    img {
      margin-left: 10px;
      max-width: 50px;
      max-height: 50px;
    }
  }

  @media screen and (max-width: 1000px) {
    order: 1;
    margin-bottom: 20px;
    img {
      margin-left: 0px;
      margin-right: 10px;
    }
  }
}
.container__txt {
  padding-top: 5vh;
  @media screen and (max-width: 730px) {
    width: 100%;
  }
}
.project__txt {
  margin-left: 40%;
  width: 33%;
  @media screen and (max-width: 730px) {
    width: 90%;
    margin-left: 0%;
    margin: 0 auto;

  }
}
.project__infoKey {
  font-family: 'avenir';
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-size: 0.93rem;
  color: #F54123;
}
.project__infoContent {
  margin-top: 15px;
  font-family: 'Avenir';
  font-style: italic;
  font-weight: 900;
  line-height: 1.06rem;
  font-size: 0.875rem;
  color: #0B3536;
  @media screen and (max-width: 730px) {
    margin-top: 10px;
  }
}

.waves {
  position: absolute;
  bottom: 0;
  width: 200px;
  transform: translateY(30%);
  display: block!important;
  left: 8.5%;
}
</style>