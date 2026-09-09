const DATA={
  xinglover:{user:'看星星的人',pass:'DZMTQRMOZM2008'},
  shangxin:{user:'伤心的太极端了吧',pass:'SZRQRMTSFZ997'},
  xingxing:{user:'星星493',pass:'35971804102'}
};
const ORDER={xinglover:0,xingxing:1,shangxin:2};
function progress(){return Number(localStorage.getItem('haijinghua_progress')||0)}
function advance(step){if(progress()<step)localStorage.setItem('haijinghua_progress',String(step))}
function showTab(id,button){document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');button.classList.add('active');const key=document.body.dataset.account;if(sessionStorage.getItem('zb_'+key)==='1'){if(key==='xinglover'&&id==='message')advance(1);if(key==='xingxing'&&id==='collect')advance(2);if(key==='shangxin'&&id==='drafts')advance(3);refreshGate(key)}}
function openLogin(){const key=document.body.dataset.account,need=ORDER[key]||0;if(progress()<need){const names=['看星星的人','星星493'];alert('线索尚未连接。请先查看“'+names[need-1]+'”账号中的私密内容。');return}document.getElementById('modal').classList.add('show');document.getElementById('account').focus()}
function closeLogin(){document.getElementById('modal').classList.remove('show')}
function login(key){const need=ORDER[key]||0;if(progress()<need){closeLogin();openLogin();return false}const d=DATA[key],u=document.getElementById('account').value.trim(),p=document.getElementById('pass').value.trim();if(u===d.user&&p.toUpperCase()===d.pass){sessionStorage.setItem('zb_'+key,'1');closeLogin();unlock(key)}else document.getElementById('error').textContent='账号或密码不正确。';return false}
function unlock(key){const need=ORDER[key]||0;if(sessionStorage.getItem('zb_'+key)!=='1'||progress()<need)return;document.querySelectorAll('[data-private]').forEach(x=>x.hidden=false);document.querySelectorAll('[data-locked]').forEach(x=>x.hidden=true);const b=document.querySelector('.login');if(b){b.textContent='已登录';b.disabled=true}refreshGate(key)}
function refreshGate(key){const gate=document.querySelector('[data-final-gate]'),button=document.querySelector('[data-publish]');if(key==='shangxin'&&gate&&button){const ready=progress()>=4;gate.hidden=ready;button.hidden=!ready}}
function publishEnding(){if(progress()<4){alert('还缺少特训学校教官账号中的私信证据。');return false}if(!confirm('确定以王萱萱的名字发布这篇草稿吗？'))return false;advance(5);return true}
document.addEventListener('DOMContentLoaded',()=>{const key=document.body.dataset.account,need=ORDER[key]||0;const b=document.querySelector('.login');if(progress()<need&&b)b.textContent='线索未解锁';unlock(key);refreshGate(key);if(location.hash==='#drafts'&&key==='shangxin'&&sessionStorage.getItem('zb_shangxin')==='1'){const panel=document.getElementById('drafts'),tab=[...document.querySelectorAll('.tab')].find(x=>x.textContent.includes('草稿箱'));if(panel&&tab)showTab('drafts',tab)}});
