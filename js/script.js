// popupContainerShow

const callButton = document.querySelector('.callButton')
const closeButton = document.querySelector('.closeButton')
const popupWrapper = document.querySelector('.popupContainer')
const addClass = function() {
    popupWrapper.classList.add('popupContainerShow')
}
const remClass = function() {
    popupWrapper.classList.remove('popupContainerShow')
}


callButton.addEventListener('click', addClass)
closeButton.addEventListener('click', remClass)