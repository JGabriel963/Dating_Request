const wapper = document.querySelector('.wapper')
const question = document.querySelector('.question')
const yesBtn = document.querySelector('.yesBtn')
const noBtn = document.querySelector('.noBtn')

const noBtnRect = noBtn.getBoundingClientRect()
const wapperRect = wapper.getBoundingClientRect()

yesBtn.addEventListener('click', function() {
    const imgCore = document.querySelector('.img-core')
    const shandow = document.querySelector('.shandow')

    question.textContent = "I Love You :)"
    imgCore.classList.add('animation')
    shandow.classList.add('animation')
})

noBtn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (wapperRect.width - noBtnRect.width) + 1)
    const j = Math.floor(Math.random() * (wapperRect.height - noBtnRect.height) + 1)

    noBtn.style.top = j + "px";
    noBtn.style.left = i + "px";
})

