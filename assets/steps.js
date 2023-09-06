function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const r=document.querySelector("#chat-input"),g=document.querySelector("#send-btn"),s=document.querySelector(".chat-container"),l=document.querySelector("#theme-btn"),y=document.querySelector("#delete-btn");let c=null;const f="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",h=()=>{const t=localStorage.getItem("themeColor");document.body.classList.toggle("light-mode",t==="light_mode"),l.innerText=document.body.classList.contains("light-mode")?"dark_mode":"light_mode";const o=`<div class="default-text">
                            <h1>Plant Care Guide</h1>
                            <p>Nurture Your Plants to Perfection with GreenScape's Plant Care Guide!</p>
                        </div>`;s.innerHTML=localStorage.getItem("all-chats")||o,s.scrollTo(0,s.scrollHeight)},u=(t,o)=>{const n=document.createElement("div");return n.classList.add("chat",o),n.innerHTML=t,n},v=async t=>{const o="https://api.openai.com/v1/completions",n=document.createElement("p"),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`},body:JSON.stringify({model:"text-davinci-003",prompt:`I want you to act as a Botanist and provide me steps to grow a particular plant. I will provide you with a plant name and your role is to generate stepwise info about how to grow a plant. My first request is:${c}`,max_tokens:3e3,temperature:0,top_p:1,frequency_penalty:.5,presence_penalty:0})};try{const e=await(await fetch(o,a)).json();n.textContent=e.choices[0].text.trim()}catch{n.classList.add("error"),n.textContent="Oops! Something went wrong while retrieving the response. Please try again."}t.querySelector(".typing-animation").remove(),t.querySelector(".chat-details").appendChild(n),localStorage.setItem("all-chats",s.innerHTML),s.scrollTo(0,s.scrollHeight)},L=()=>{const o=u(`<div class="chat-content">
                    <div class="chat-details">
                        <img src="./images/chatbot.jpg" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span>
                </div>`,"incoming");s.appendChild(o),s.scrollTo(0,s.scrollHeight),v(o)},p=()=>{var n;if(c=r.value.trim(),!c)return;r.value="",r.style.height=`${m}px`;const t=`<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/user.jpg" alt="user-img">
                        <p>${c}</p>
                    </div>
                </div>`,o=u(t,"outgoing");(n=s.querySelector(".default-text"))==null||n.remove(),s.appendChild(o),s.scrollTo(0,s.scrollHeight),setTimeout(L,500)};y.addEventListener("click",()=>{confirm("Are you sure you want to delete all the chats?")&&(localStorage.removeItem("all-chats"),h())});l.addEventListener("click",()=>{document.body.classList.toggle("light-mode"),localStorage.setItem("themeColor",l.innerText),l.innerText=document.body.classList.contains("light-mode")?"dark_mode":"light_mode"});const m=r.scrollHeight;r.addEventListener("input",()=>{r.style.height=`${m}px`,r.style.height=`${r.scrollHeight}px`});r.addEventListener("keydown",t=>{t.key==="Enter"&&!t.shiftKey&&window.innerWidth>800&&(t.preventDefault(),p())});h();g.addEventListener("click",p);
