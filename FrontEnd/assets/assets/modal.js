/*const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null;
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
}
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal);
});
*/
var modal = document.getElementById("modal");

var btn = document.getElementById('btn-modif');
btn.onclick = function() {
alert('rgrtgrg')
    //modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
