// using selectors inside the element
const questions=document.querySelectorAll('.question');
// console.log(questions);
questions.forEach(function(question){
// console.log(question);
const btn=question.querySelector('.btn')
console.log(btn);
btn.addEventListener('click',function(){
    questions.forEach(function(item){
        if(item !==question){
            item.classList.remove('show-text');
        }
    })
    question.classList.toggle('show-text')
})
})
// traversing the dom
// const btns=document.querySelectorAll('.btn');
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question=e.currentTarget.parentElement;
//         question.classList.toggle('show-text')
//     })
// })