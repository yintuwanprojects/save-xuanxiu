<template>
  <div>
    <div v-if="quizStatus === 'pre'">
      <div class="mb-4">
        <h3 style="color: darkslategrey;">穿越回2021</h3>
<!--        <img src="../assets/into1-logo-1.png" style="width: 200px"/>-->
        <div class="p-2 board">
          <transition name="fade" appear>
            <h1 class="font-weight-bold" style="color: white;">拯救选秀</h1>
          </transition>
        </div>
        <br>
        <p>制作：Alpaca、大喵</p>
      </div>
      <div class="button6 enabled" @click="selectMode()">进入游戏</div>
    </div>
    <div v-if="quizStatus === 'selectMode'">
      <div>
        <transition name="fade" appear>
          <h4 class="font-italic" style="color: steelblue">2021年，对于内娱追星人来说是难忘的一年...</h4>
        </transition>
          <br>
        <transition name="fade" appear>
          <h5>如果有一个机会让你回到2021年的初春，你要怎么做才能拯救选秀？</h5>
        </transition>
      </div>
      <div v-for="(chapter, index) in chapters" :key="index">
        <div class="button6 mt-4 enabled" v-if="chapter['isActive']" @click="startQuiz('chapter1')">
          开启{{chapter["title"]}}
        </div>
        <div class="button6 mt-4 disabled" v-if="!chapter['isActive']">
          开启{{chapter["title"]}}
        </div>
      </div>
    </div>
    <div v-if="quizStatus === 'during'" class="question-text m-2">
      <transition name="fade" appear>
        <p class="m-2" style="white-space: pre-line" v-html="this.story"></p>
      </transition>
      <div v-for="(option, index) in options" :key="index">
        <div class="button6 options m-1" @click="chooseAns(index)">
          <strong style="color: darkslategray">{{ index }} {{ option }}</strong>
        </div>
      </div>
    </div>
    <div v-if="quizStatus === 'post'" class="question-text m-2">
      <h3>恭喜你获得了</h3>
      <h2>{{score}}分</h2>
      <p style="white-space: pre-line">{{scoreMsg}}</p>
      <div class="button6 return m-1" @click="resetPage">再玩一次</div>
    </div>
  </div>
</template>

<script>
import plot from "../assets/plot"
// import btnSound from "../assets/Tiny Button Push-SoundBible.com-513260752.wav"

export default {
  name: "Quiz",
  data: function () {
    return {
      chapters: [],
      page: null,
      language: 'chinese',
      timerMode: 20,
      currentChapter: 0,
      currentPage: 0,
      score: 0,
      quizStatus: "pre",
      countdown: 5,
      countdownInterval: null,
      loaded: false,
      isSelectMode: false
      // sound: new Audio(btnSound)
    }
  },
  mounted: function () {
    this.resetPage()
    this.loaded = true
  },
  computed: {
    story: function () {
      return this.page['html']
    },
    options: function () {
      return this.page['options'];
    },
    answer: function () {
      return this.page['answer']
    },
    scoreMsg: function () {
      if (this.score === 100) {
        return '能读到这段话的人就是Insider！'
      } else if (this.score > 70) {
        return 'Insider预备役\n是谁我不说'
      } else if (this.score > 40) {
        return '啊这...\n要想成为Insider还要更努力！'
      } else {
        return '这个level不太行\n罚你去listen十遍INTO1首专'
      }
    }
  },
  methods: {
    selectMode: function () {
      this.quizStatus = 'selectMode';
      this.isSelectMode = true;
      this.chapters = plot
    },
    startQuiz: function (chapter) {
      this.currentChapter = chapter;
      this.currentPage = "1"
      this.page = this.chapters[chapter]["pages"][this.currentPage];
      // this.sound.play();
      this.quizStatus = 'during';
    },
    nextQuestion: function (option) {
      this.currentPage = this.answer[option];
      this.page = this.chapters[this.currentChapter]["pages"][this.currentPage];
    },
    chooseAns: function (option) {
      // this.sound.play();
      this.nextQuestion(option)
    },
    resetPage: function () {
      // this.sound.play();
      this.language = 'chinese';
      this.timerMode = 20;
      this.page = '';
      this.quizStatus = 'pre';
      this.score = 0;
      this.currentPage = 0;
    },
    sendAnalytics: function () {
      this.$ga.event({
        eventCategory: 'CompleteQuiz',
        eventAction: 'completed ' + this.language,
        eventLabel: this.score,
      })
    }
  }
}
</script>

<style scoped>
.question-text {
  color: darkslategrey;
}
.board {
  background-color: #282829;
  border-style: solid;
  border-width: 5px;
  border-color: darkgrey;
}
.mode {
  background-color: lavender;
}
.selected {
  background-color: slateblue;
  color: whitesmoke;
}

</style>