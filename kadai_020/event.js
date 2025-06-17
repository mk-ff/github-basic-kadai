const btn = document.getElementById('btn');
console.log(btn);

const heading = document.getElementById('text');
console.log(text);

btn.addEventListener('click', () => {
  heading.textContent="ボタンをクリックしました";
});