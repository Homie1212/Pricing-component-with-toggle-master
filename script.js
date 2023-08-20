'use strict';

const slider=document.querySelector('.outer');
const inner=document.querySelector('.inner');
const outer=document.querySelector('.outer');
const basicdol=document.querySelector('.basd');
const profdol=document.querySelector('.prfd');
const masdol=document.querySelector('.mdl')


slider.addEventListener('click',function(){
    inner.classList.toggle('le');
    outer.classList.toggle('li');
    if(basicdol.textContent==='199.99'){
        basicdol.textContent='19.99';
    }
    else{
        basicdol.textContent='199.99'
    }
    if(profdol.textContent==='249.99'){
        profdol.textContent='24.99';
    }
    else{
        profdol.textContent='249.99'
    }
    if(masdol.textContent==='399.99'){
        masdol.textContent='39.99';
    }
    else{
        masdol.textContent='399.99'
    }
})