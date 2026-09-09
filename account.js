const DATA={
  xinglover:{user:'看星星的人',pass:'DZMTQRMOZM2008'},
  shangxin:{user:'伤心的太极端了吧',pass:'SZRQRMTSFZ997'},
  xingxing:{user:'星星493',pass:'35971804102'}
};
function showTab(id,button){document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');button.classList.add('active')}
function openLogin(){document.getElementById('modal').classList.add('show');document.getElementById('account').focus()}
function closeLogin(){document.getElementById('modal').classList.remove('show')}
function login(key){const d=DATA[key],u=document.getElementById('account').value.trim(),p=document.getElementById('pass').value.trim();if(u===d.user&&p.toUpperCase()===d.pass){sessionStorage.setItem('zb_'+key,'1');closeLogin();unlock(key)}else document.getElementById('error').textContent='账号或密码不正确。';return false}
function unlock(key){if(sessionStorage.getItem('zb_'+key)!=='1')return;document.querySelectorAll('[data-private]').forEach(x=>x.hidden=false);document.querySelectorAll('[data-locked]').forEach(x=>x.hidden=true);const b=document.querySelector('.login');if(b){b.textContent='已登录';b.disabled=true}}
document.addEventListener('DOMContentLoaded',()=>unlock(document.body.dataset.account));
