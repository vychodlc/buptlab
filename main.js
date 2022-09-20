function changeHover(index) {
  let imgs = document.getElementsByClassName('hoverimg')[0].getElementsByTagName('img');
  let dots = document.getElementsByClassName('clickdots')[0].getElementsByClassName('dot');
  for(let i=0; i<imgs.length; i++) {
    imgs[i].style.display = 'none'
    dots[i].className = 'dot'
  }
  imgs[index].style.display = '';
  dots[index].className = 'dot active';
  hoverIndex = index;
}

let hoverIndex = 0;
let hoverLengeh = document.getElementsByClassName('hoverimg')[0].getElementsByTagName('img').length;
let hoverInterval = setInterval(() => {
  changeHover(hoverIndex);
  hoverIndex = (hoverIndex+1)%hoverLengeh;
}, 2000);