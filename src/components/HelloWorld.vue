<template>
  <div class="hello" id="hello-wrapper">

   <audio preload="none" loop id="player">
    <source src="../../content/mp3/2049.mp3" id="audio" type="audio/mp3">
  </audio>

    <div class="hello-card-wrapper game-card-wrapper" id="game-card-wrapper">
            <a href="http://www.picturer.ru" target="_blank" class="picturer"><img class="logo" src="content/img/logo.png"></a>
      <div class="pip-boy">
        <div class="pip-boy-inner">
          <div id="pipboy-content">
            <div class="question" :style="{ fontSize:QuestionFontSize(quest_pages[page_index].question) }" v-html="quest_pages[page_index].question"></div>
            <div class="picture-row" id="pic-row" :style="{ flexDirection:Pupsen() }">
              <div class="picture" @mouseover="CheckPupsen()" @click="SwapPage(choice.to_id)" v-for="choice in quest_pages[page_index].answers" v-show="choice.img" :key="choice.text" :style="{ backgroundImage:FullUrl(choice.img) }">
                <div class="under-text" :style="{ fontSize:AnswerFontSize(choice.text, quest_pages[page_index].answers) }" v-html="choice.text"></div>
              </div>
              <div class="picture single-picture" :class="BiggerImage(page_index)" v-if="quest_pages[page_index].img" :style="{ backgroundImage:FullUrl(quest_pages[page_index].img) }"></div>
            </div>
            <div class="text-row" v-if="quest_pages[page_index].img">
                  <div class="answer-text" @click="SwapPage(choice.to_id)" v-for="choice in quest_pages[page_index].answers" :key="choice.text" :style="{ fontSize:AnswerFontSize(choice.text, quest_pages[page_index].answers) }" v-html="AnswerHtml(choice.text,choice.to_id)"></div>
              </div>
          </div>
          <div class="final-page" id="final_content">
            <div class="final-body">
              <div class="final-body-row">
                <div class="final-photo final-photo-1"></div>
                <div class="final-text">{{final_texts[final_text_id]}}</div>
              </div>
              <div class="final-body-row">
                <div class="final-text">{{final_texts_2[final_text_id]}}</div>
                <div class="final-photo final-photo-2"></div>
              </div>
              <div class="final-body-row">
                <div class="final-photo final-photo-3"></div>
                <div class="final-text">Получи бесплатную ячейку на складе в США и заказывай на её адрес любые товары из американских магазинов. Как только товары придут на склад — их сразу же отправят тебе в Россию.</div>
              </div>
              <div class="final-body-row">
                <div class="final-text">А ещё до 25 октября у нас скидка 30% на все лёгкие посылки. Уложись в один килограмм — и мы доставим тебе твой кибернетический (или не очень) ништячок всего за $11!</div>
                <div class="final-photo final-photo-4"></div>
              </div>
            </div>
            <div class="final-button-row">
                <div class="final-left-block">
                  <div class="sos-left">
                    <div class="sos-ic sos-vk" v-on:click="Share_kont(winURL,TITLE)"></div>
                    <div class="sos-ic sos-fb" v-on:click="Share_aceb(winURL,TITLE)"></div>
                    <div class="sos-ic sos-tw" v-on:click="Share_twi(winURL,TITLE)"></div>
                  </div>
                  <div class="button button-restart" @click="Restart">Начать заново</div>
                </div>
              <div class="button button-site" @click="ToSite"></div>
            </div>
            
          </div>
          <div class="noise-container">
            <div class="error-noise">
              <div class="error-effect">
                <div class="old-tv-content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pip-boy-hand"></div>
        <div class="pip-boy-outer"></div>
        <div class="pip-boy-knob" :class="{'pip-boy-knob-off':playing_music}" @click="ToggleMusic()"></div>
        <a href="https://www.pochtoy.com/?utm_source=Lentach&utm_medium=Quest_new_link&utm_campaign=davay_poleghe" target="_blank" class="pochtoy-icon"></a>
        <transition name="fade">
          <div class="plumbus-hand" v-show="page_index==190" @click="SwapPage('191')"></div>
        </transition>

       
      </div>
    </div>

    <div class="hello-card-wrapper" id="hello-card-wrapper">
      <div class="button button-start" @click="Start"> </div>
      <a href="http://www.picturer.ru" target="_blank" class="picturer"><img class="logo" src="content/img/logo.png"></a>
    </div>

    <div class="hello-card-wrapper turn-card-wrapper" :style="{display: CheckMobilePortrait()}">
      <div class="turn-text">поверните девайс, чтобы начать игру</div>
      <div class="turn-icon"></div>
    </div>
    <div class="hello-card-wrapper stretch-card-wrapper">
      <div class="turn-text">увеличьте окно браузера, чтобы начать игру</div>
      <div class="turn-icon stretch-icon"></div>
    </div>

  </div>
</template>

<script src="./main.js"></script>
<style src="./main.css"></style>
<style src="./tv.css"></style>