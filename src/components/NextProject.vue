<template>
    <div class="nextProject">
        <div class="nextProject__img">
            <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
        </div>
        <router-link class="txt"  :to="projectInfos.name">
            zzzzzz... <br>
            boring, <br>
            next. <br>
        </router-link>
    </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as next from '../assets/animations/next.json';
import { projects } from "../datas/projects.js";

export default {
    name: "NextProject",
    components: {
        Lottie
    },
    props: {
        index: Number,
    },
    data: function(){
        return {
            projectInfos: projects[this.index],
            defaultOptions: {
                animationData: next.default,
                // autoplay: false,
                // loop: false
            },
            animationSpeed: 1
        
        }
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        playAnimation: function(){
            this.anim.setSpeed(1);
            this.anim.play();
        },
        reverseAnimation: function(){
            this.anim.setSpeed(-1);
            this.anim.play();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nextProject {
    padding: 2vh 0 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nextProject__img {
    height: 200px;
    width: auto;
    svg {
        height: 200px;
        width: auto;
    }
}
.txt {
    font-family:'integral cf';
    line-height: 1;
    margin-left: 2vw;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    color: #0B3536;

}
</style>
