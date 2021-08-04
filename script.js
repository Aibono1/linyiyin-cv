// NAVBAR
let lastScrollTop = 0
navbar = document.getElementById('navbar')

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px"
  } else {
    navbar.style.top = "0"
  }
  lastScrollTop = scrollTop
})

// TYPED
var typed = new Typed('.typed', {
  strings: ["你好, 欢迎来到我的个人简历主页。",
    "我叫林亦吟，今年23岁，于去年毕业于英国的兰卡斯特大学。毕业之后我由于种种机缘巧合在前端这一快速发展的领域挖掘出了自己的热情，之后我在一家法企从零开始学习接触了相关的前端技术，在个人能力和技术实现上都有了不断地突破。我喜欢这一行业，希望回国后的现在也能够继续从事这一方面的工作。"],
  typeSpeed: 50
})

// COMPTEUR LIVE
let compteur = 0

$(window).scroll(function () {
  const top = $('.counter').offset().top - window.innerHeight

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function () {
      let $this = $(this), countTo = $this.attr('data-count')
      $({ countNum: $this.text() })
        .animate({
          countNum: countTo
        },
          {
            duration: 10000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum))
            },
            complete: function () {
              $this.text(this.countNum)
            }
          })
    })
    compteur = 1
  }
})

// AOS
AOS.init()