/**
 * Created by gaole on 11/6/16.
 */
window.onload = function () {
    var lis = document.querySelectorAll('.header > ul > li');
    var main = document.querySelectorAll('.main');

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            clearActive(lis);
            this.classList.add('active');
            changeContent(main, this.index);
        }
    }
};

function clearActive(lis) {
    for(var i = 0; i < lis.length; i++){
        lis[i].classList.remove('active');
    }
}

function changeContent(main, index) {
    for(var i = 0; i < main.length; i++){
        main[i].style.display = 'none';
    }
    main[index].style.display = 'block';
}