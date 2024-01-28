const consentFormEl = document.getElementById('consent-form')
const submitBtnEl = document.getElementById('submit-btn')
const modalEl = document.getElementById('modal')
const cancelBtnEl = document.getElementById('cancel-btn')
const btnModalContainerEl = document.getElementById('btn-modal-container')
const closeModalBtnEl = document.getElementById('close-modal-btn')
const contentModalContainerEl = document.getElementById('content-modal-container')

setTimeout(function(){
    modalEl.style.display = 'inline'
},1500)

closeModalBtnEl.addEventListener('click',function(){
    modalEl.style.display = 'none'
})

cancelBtnEl.addEventListener('mouseenter',function(){
    btnModalContainerEl.classList.toggle('modal-btn-reverse')
})

consentFormEl.addEventListener('submit',function(e){
    e.preventDefault()

    const consentFormElData = new FormData(consentFormEl)
    const fullname = consentFormElData.get('fullName')
    
    contentModalContainerEl.innerHTML = `<div id="loading-modal-container">
                                            <img src="images/loading.svg" class="modal-img">
                                            <p id="uploading-text">Uploading your data to the dark web...</p>
                                        </div>`
    setTimeout(function(){
        document.getElementById('uploading-text').textContent = "Making the sale..."
        
        setTimeout(function(){
            document.getElementById('loading-modal-container').innerHTML = `
            <h2>Thanks fella ${fullname}</h2>
            <p>We just sold the rights to your eternal soul</p>
            <img src="images/evilLaugh.gif" class="modal-img">
            `
            closeModalBtnEl.disabled = false
        },2000)
    
    },2000)   
                                     
})

