const words=['digital','web','software','business','automation'];
const word=document.getElementById('rotating-word');
let i=0;
setInterval(()=>{i=(i+1)%words.length;word.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-12px)'}],{duration:220,easing:'ease-in'}).finished.then(()=>{word.textContent=words[i];word.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:380,easing:'ease-out'});});},2200);
const particles=document.querySelector('.particles');
for(let n=0;n<34;n++){const p=document.createElement('i');p.className='particle';p.style.left=Math.random()*100+'%';p.style.animationDuration=(7+Math.random()*12)+'s';p.style.animationDelay=(-Math.random()*14)+'s';p.style.transform=`scale(${.5+Math.random()*1.5})`;particles.appendChild(p)}
const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.getElementById('year').textContent=new Date().getFullYear();
