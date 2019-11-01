import questions_json from '../../content/data/questions.json'
import results_json from '../../content/data/results.json'
import 'web-animations-js'
import Pace from 'pace-js'
import 'pace-js/themes/white/pace-theme-flash.css'

export default {
  data () {
    return {
      TITLE: 'Я выжил в киберпанке России будущего! А сможешь ли ты?',
      DESC: '',
      animation_time: 200,
      swap_pages_time: 400,
      quest_pages: questions_json,
      page_index: 1,
      present_index: 2,
      finalpage: results_json.results,
      hover_pupsen: false,
      hover_cooldown: false,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      playing_music: false,
      final_text_id: 0,
      final_texts: [
        'АААА! Вскочив с кровати, ты ошалело смотришь по сторонам. На смартфоне уютно мерцает дата: 2018 год. На этот раз тебе повезло — и мрачное будущее оказалось всего лишь дурным сном.',
        'АААА! Резко вскочив из-за стола, ты ошалело смотришь по сторонам. На мониторе, рядом с с которым ты заснул, открыта последняя страница квеста про будущее. А на смартфоне уютно мерцает дата: 2018 год.'
      ],
      final_texts_2: [
        'Не хочешь дожидаться, пока этот сон станет явью — регистрируйся на сайте pochtoy.com',
        'Жалеешь, что плюмбуса у тебя по-прежнему нет - регистрируйся на сайте pochtoy.com'
      ]
    }
  },

  computed: {

      winURL(){
        return 'https://pochta.nozomu.ru/';
      },
    },

  methods: {

  FullUrl: function (url) {
    return "url('../content/img/quest/" + url + "')"
  },

  QuestionFontSize: function (string) {
    let DEFAULT_FONT = 1.4;
    let NORMAL_SIZE = 40;
    let MIN_FONT = 0.9;
    let extra_length = Math.max(0, string.length - NORMAL_SIZE);
    let new_font = Math.max( MIN_FONT, DEFAULT_FONT*Math.exp(-extra_length/400) );
    return new_font + 'em';
  },
  AnswerFontSize: function (string, questions) {
    let DEFAULT_FONT = 1.4;
    if (questions.length!=3) return DEFAULT_FONT;

    let NORMAL_SIZE = 15;
    let MIN_FONT = 0.9;
    let extra_length = Math.max(0, string.length - NORMAL_SIZE);
    let new_font = Math.max( MIN_FONT, DEFAULT_FONT*Math.exp(-extra_length/250) );
    return new_font + 'em';
  },

  CheckPupsen: function(event){
    if (this.page_index != 56) return;
    let e = event || window.event;
    let rect = document.getElementById('pic-row').getBoundingClientRect();
    if (e.clientX < 0.5*(rect.left+rect.right)) this.hover_pupsen = true;
    else this.hover_pupsen = false;
  },

  Pupsen: function(){
    if (this.hover_pupsen) return "row-reverse";
    return "row";
  },

  AnswerHtml: function(text, id){
    if (id>186&id<191) return '';
    return '>' + text;
  },

  HandleResize: function(event){
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;
  },

  CheckMobilePortrait: function(){
    if (this.MobileAndTabletcheck()&&(this.height > this.width)) return 'flex';
    return 'none';
  },

  BiggerImage: function(id){
    if (id>184&&id<191) return ['single-picture-secret'];
    return [''];
  },


  Share_kont: function(purl, ptitle) {
    let url  = 'http://vk.com/share.php?';
    url += 'url='          + encodeURIComponent(purl);
    this.Share_popup(url);
  },
  Share_aceb: function(purl, ptitle) {
    let url  = 'http://www.facebook.com/sharer.php?';
    if (this.MobileAndTabletcheck()) { url = 'http://m.facebook.com/sharer.php?' }
    url += '&u='       + encodeURIComponent(purl);
    url += '&p[title]='     + encodeURIComponent(ptitle);
    this.Share_popup(url);
  },
  Share_twi: function(purl, ptitle) {
      let url  = 'http://twitter.com/share?';
      url += 'text='      + encodeURIComponent(ptitle);
      url += '&url='      + encodeURIComponent(purl);
      url += '&counturl=' + encodeURIComponent(purl);
      this.Share_popup(url);
    },

  Share_popup: function(url) {
    window.open(url,'','toolbar=0,status=0,width=626,height=436');
  },
  MobileAndTabletcheck: function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  },

    Start: function() {
      this.CrossBlur("hello-card-wrapper", "game-card-wrapper",'flex');
      Pace.stop();
      this.OpenFullscreen(document.documentElement);
    },

   OpenFullscreen: function(elem) {
     if (!this.MobileAndTabletcheck()) return;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },

    CrossBlur: function(begin, end, display_type){
      let start = document.getElementById(begin);
      start.animate(
        [
          { opacity: 1},
          { opacity: 0}
        ], {
          duration: this.swap_pages_time,
          easing: 'linear',
        });
      
      let game = document.getElementById(end);
      game.animate(
        [
          { opacity: 0},
          { opacity: 1}
        ], {
          duration: this.swap_pages_time,
          easing: 'linear',
        });
      game.style.display = display_type;

      window.setTimeout(() => {
        start.style.display = 'none';
        start.style.opacity = 0;
        game.style.opacity = 1;
      }, this.swap_pages_time)
    },

    SwapPage: function(to_id){

      if (to_id==0) { this.Finish() }

      if (to_id==-1) {
        to_id = this.present_index;
      }

      if (to_id==2||to_id==52||to_id==81) this.present_index = to_id;

      if (to_id>185&&to_id<190) {
        this.final_text_id = 1;
        window.setTimeout(() => { 
          this.SwapPage(Number(to_id)+1);
        }, 3000)
      }

      let latency = 0;
      if (to_id==57&&this.MobileAndTabletcheck()) latency = 1000;

      window.setTimeout(()=>{ 
        this.AnimateSwap();
        window.setTimeout(()=>{
          this.page_index = to_id;
          this.hover_pupsen = false;
        }, this.animation_time*0.65)
      }, latency)
      

    },

    AnimateSwap: function(){

      document.getElementById("pipboy-content").animate(
        [
          { transform: 'skew(0)' , opacity: 1},
          { transform: 'skew(1.5rad)', opacity: 0, offset: 0.35},
          { transform: 'skew(0rad)', opacity: 0, offset: 0.36},
          { transform: 'skew(0)', opacity: 1}
        ], {
          duration: this.animation_time*2,
          iterations: 1,
          easing: 'cubic-bezier(0,.75,1,-0.19)',
        }
      );
    },

    Finish: function () {
      this.CrossBlur('pipboy-content','final_content','block');
    },

    ToSite: function(){
      let myAudio = document.getElementById("player");
      if (myAudio.duration > 0 && !myAudio.paused) {
        myAudio.pause();
        this.playing_music = false;
      }
      window.open('https://www.pochtoy.com/?utm_source=Lentach&utm_medium=Quest_new_link&utm_campaign=davay_poleghe',"_blank");
    },

    Restart: function () {
      this.CrossBlur('final_content','pipboy-content','block');
      this.SwapPage(1);
      setTimeout(() => {
        this.final_text_id = 0;
      }, 2000);
    },

    ToggleMusic: function () {
      let myAudio = document.getElementById("player");
      if (myAudio.duration > 0 && !myAudio.paused) {
        myAudio.pause();
        this.playing_music = false;
        }
      else {
        myAudio.play();
        this.playing_music = true;
          };
  },


    ScrollTest: function (y) {

      let isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

      let options = {
        "behavior": "smooth",
        "left": 0,
        "top": y
      };

      if (isSmoothScrollSupported) {
          // Native smooth scrolling
          window.scrollTo(options);
      } else {
          // Old way scrolling without effects
          window.scrollTo(options.left, options.top);
      }
    }

  },

  mounted: function () {
    window.addEventListener('resize', this.HandleResize);
    window.addEventListener('orientationchange', this.HandleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.HandleResize);
    window.removeEventListener('orientationchange', this.HandleResize);
  },
created(){
  Pace.start();
}

}