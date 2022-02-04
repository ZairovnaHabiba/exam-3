let headerBtn = document.getElementById('headerBtn');
let modalBox = document.getElementById('modalBox');
let closeBtn = document.getElementById('closeBtn');

headerBtn.addEventListener('click',function(){
    headerBtn.classList.add('none');
  modalBox.classList.add('show')
});
closeBtn.addEventListener('click', function(){
    headerBtn.classList.remove('none')
  modalBox.classList.remove('show')
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("goTop").style.display='block';
  } else {
    document.getElementById("goTop").style.display='none';
  }
}
nextBtn.addEventListener('click', function(){
  hero.classList.add('none')
})
