let result = [];
window.result = result;
let times;
const links = [
  'https://baidu.com',
  'https://www.cnblogs.com/',
  'https://www.infoq.cn/',
];
let current = 0;
const timer = setInterval(() => {
  console.log('current', current);
  if (current > 2) clearInterval(timer);
  location.href = links[current];
  current++;
  // setTimeout(() => {
  //   result.push(document.title);
  // }, 1000);
}, 3000);
