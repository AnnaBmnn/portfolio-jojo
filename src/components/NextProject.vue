<template>
    <div class="nextProject">
        <img src="../assets/img/project/project_next.svg">
        <router-link class="txt"  :to="projectInfos.name">
            zzzzzz... <br>
            boring, <br>
            next. <br>
        </router-link>
    </div>
</template>

<script>
import { projects } from "../datas/projects.js";

export default {
    name: "NextProject",
    props: {
        index: Number
    },
    data: function(){
        return {
            projectInfos: projects[this.index]
        
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
.txt {
    font-family:'integral cf';
    line-height: 1;
    margin-left: 2vw;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    color: black;
}
</style>
