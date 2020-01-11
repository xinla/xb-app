export default {
  /**
   * actionsheet
   * @param {*} Objcet classOverflow-需要禁止滚动的类名
   */
  actionsheet (Objcet, classOverflow) {
    let that = this
    let box = document.createElement('div')
    let ul = document.createElement('ul')
    let header = document.createElement('div')
    let title = document.createElement('span')
    let cancel = document.createElement('div')
    let mask = document.createElement('div')
    box.className = 'vit-actionsheet'
    header.className = 'vit-header vit-border-bottom'
    cancel.className = 'vit-cancel'
    mask.className = 'vit-mask'
    document.body.appendChild(box)
    document.body.appendChild(mask)
    document.body.style.overflow = 'hidden'
    document.body.addEventListener('touchmove', that.moveFn, {passive:false})
    if (classOverflow) document.querySelector('.' + classOverflow).style.overflow = 'hidden'
    box.appendChild(header)
    box.appendChild(ul)
    header.appendChild(cancel)
    header.appendChild(title)
    title.innerHTML = Objcet.title || ''
    let str = ''
    let items = Objcet.items || []
    items.forEach(item => {
      str += '<li class="vit-border-bottom">' + item.name + '</li>'
    })
    ul.innerHTML = str
    if (items.length > 4) {
      box.style.height = '6.4rem'
      ul.style.height = '5.2rem'
      ul.addEventListener('touchmove', function (e) {
        e.stopPropagation()
      })
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.transform = 'translateY(0%)'
      }, 1)
      let li = ul.getElementsByTagName("li")
      items.forEach((item, index) => {
        li[index].index = index
        li[index].onclick = function () {
          that.hideActionsheet(box, mask, classOverflow)
          let obj = {
            code: item.code,
            item: item.name,
            index: index
          }
          resolve(obj)
        }
      })
      cancel.onclick = function () {
        that.hideActionsheet(box, mask, classOverflow)
      }
    })
  },
  hideActionsheet (box, mask, classOverflow) {
    let that = this
    box.style.transform = 'translateY(100%)'
    setTimeout(() => {
      document.body.removeChild(box)
      document.body.removeChild(mask)
      document.body.style.overflow = ''
      if (classOverflow) document.querySelector('.' + classOverflow).style.overflow = 'auto'
      document.body.removeEventListener('touchmove', that.moveFn, {passive:false})
    }, 300)
  },
  moveFn (e) {
    e.preventDefault()
  },
}