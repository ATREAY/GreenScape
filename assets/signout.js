import{initializeApp as u}from"https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";import{getAuth as d,GoogleAuthProvider as l,onAuthStateChanged as m,signOut as p}from"https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f={apiKey:"AIzaSyCScmGtQoqxNRtlophEZC8rz4LgXockpJQ",authDomain:"green-scape.firebaseapp.com",databaseURL:"https://green-scape-default-rtdb.firebaseio.com",projectId:"green-scape",storageBucket:"green-scape.appspot.com",messagingSenderId:"694859846248",appId:"1:694859846248:web:6693e554c4abc99a6061dd",measurementId:"G-LNEKQ2SE19"};u(f);const i=d();new l;const c=document.getElementById("userSignOut"),g=document.getElementById("userName"),y=document.getElementById("userEmail"),h=async()=>{p(i).then(()=>{alert("You have signed out successfully!"),window.location.assign("index.html")}).catch(r=>{})};m(i,r=>{r?(g.innerHTML=r.displayName,y.innerHTML=r.email):(c.style.display="none",message.style.display="none")});c.addEventListener("click",h);
