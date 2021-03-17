const asideItemTitle = document.querySelectorAll('.aside-item__title')
const checkboxValue = document.querySelectorAll('.aside-item__checkbox-value')
const asideTabTitle = document.querySelectorAll('.aside-item__tab-title')
const switchBtn = document.querySelectorAll('.product__content-switch')
const productItems = document.querySelector('.product-items')
const btnTile = document.querySelector('.btn-tile')
const btnList = document.querySelector('.btn-list')
const product = document.querySelector('.switch__product')
const collection = document.querySelector('.switch__collection')
const switchButton = document.querySelector('.product__content-switch')

btnList.addEventListener('click', onCLickList)
btnTile.addEventListener('click', onCLickTile)
product.addEventListener('click', onClickProduct)
collection.addEventListener('click', onClickCollection)
switchButton.addEventListener('click', onClickSwithButton)
checkboxValue.forEach(check)
asideItemTitle.forEach(onTabClick)
asideTabTitle.forEach(onTabClick)

function onCLickList () {
  btnList.classList.add('active')
  btnTile.classList.remove('active')
  productItems.classList.add('list')
}
function onCLickTile () {
  btnList.classList.remove('active')
  btnTile.classList.add('active')
  productItems.classList.remove('list')
}
function check(item) {
  item.addEventListener('click', function(){
    let currentCheck = item
    currentCheck.classList.toggle('checked')
  })
}
function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item
    currentBtn.parentElement.classList.toggle('active')
  })
}
function onClickSwithButton() {
  switchButton.classList.toggle('checked')
  product.classList.toggle('checked')
  collection.classList.toggle('checked')
}
function onClickProduct() {
  product.classList.add('checked')
  collection.classList.remove('checked')
  switchButton.classList.remove('checked')
}
function onClickCollection() {
  product.classList.remove('checked')
  collection.classList.add('checked')
  switchButton.classList.add('checked')
}







