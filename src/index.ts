const fastclick = require('fastclick')
const debounce = require('lodash.debounce')
const tocbot = require('tocbot')

require('waypoints/lib/noframework.waypoints')
require('waypoints/lib/shortcuts/sticky')

fastclick.attach(document.body);

const Waypoint = (<any>window).Waypoint

const pageHeader = document.querySelector('.PageHeader')
const PAGE_HEADER_COLLAPSED_CLASS = 'PageHeader--collapsed'
const PAGE_HEADER_OPEN = 'PageHeader--open'

const aboutMeAside = document.querySelector('.AboutMeAside')
const ABOUT_ME_ASIDE_STICKY = 'AboutMeAside--sticky'
const ABOUT_ME_ASIDE_BOTTOM_CLASS = 'AboutMeAside--bottom'

const workWithMeFooter = document.querySelector('.WorkWithMeFooter')

document.querySelectorAll('pre>code')
  .forEach((block) => {
    (window as any).hljs.highlightBlock(block)
  })

window.addEventListener(
  'resize',
  debounce(() => {
    Waypoint.refreshAll()
  }, 20)
)

if (pageHeader) {
  const pageHeaderBurger = pageHeader.querySelector('.Burger')
  const BURGER_X = 'Burger--x'
  if (pageHeaderBurger) {
    pageHeaderBurger.addEventListener('click', function () {
      pageHeader.classList.toggle(PAGE_HEADER_OPEN)
      pageHeaderBurger.classList.toggle(BURGER_X)
    })
  }
  new Waypoint({
    element: document.getElementById('content'),
    offset: 90,
    handler: function (direction: any) {
      switch (direction) {
        case 'up':
          pageHeader.classList.remove(PAGE_HEADER_COLLAPSED_CLASS)
          break
        case 'down':
          pageHeader.classList.add(PAGE_HEADER_COLLAPSED_CLASS)
          break
      }
    }
  })

  if (aboutMeAside) {
    new Waypoint({
      element: aboutMeAside,
      offset: 110,
      handler: function (direction: any) {
        switch (direction) {
          case 'up':
            aboutMeAside.classList.remove(ABOUT_ME_ASIDE_STICKY)
            break
          case 'down':
            aboutMeAside.classList.add(ABOUT_ME_ASIDE_STICKY)
            break
        }
      }
    })
  }


  if (workWithMeFooter && aboutMeAside) {
    new Waypoint({
      element: workWithMeFooter,
      offset: '100%',
      handler: function (direction: any) {
        switch (direction) {
          case 'up':
            aboutMeAside.classList.remove(ABOUT_ME_ASIDE_BOTTOM_CLASS)
            break
          case 'down':
            aboutMeAside.classList.add(ABOUT_ME_ASIDE_BOTTOM_CLASS)
            break
        }
      }
    })
  }
}

if (document.querySelector('.js-toc')) {
  tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.js-toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.js-toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h2, h3',
  })
}
