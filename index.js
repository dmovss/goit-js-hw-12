import{S as L,a as P,i as l}from"./assets/vendor-Byks891O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const g=t=>` 
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="img-details">
      <p class="detail-item"><b>Likes:</b> ${t.likes}</p>
      <p class="detail-item"><b>Views:</b> ${t.views}</p>
      <p class="detail-item"><b>Comments:</b> ${t.comments}</p>
      <p class="detail-item"><b>Downloads:</b> ${t.downloads}</p>
    </div>
  </li>`,w=()=>{new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},v="https://pixabay.com/api/?",m=async(t,e)=>{const o=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:e});return(await P.get(`${v}${o}`)).data},c=document.querySelector(".js-page-form"),n=document.querySelector(".js-gallery"),y=document.querySelector(".js-loader"),h=document.querySelector(".load-more-btn-js"),r={searchedValue:"",page:null,total:null,perPage:18},S=async t=>{if(t.preventDefault(),r.searchedValue=c.elements.user_query.value.trim(),!r.searchedValue){l.error({message:"Please enter a valid search query!",position:"topRight"}),n.innerHTML="",c.reset(),p();return}r.page=1,f();try{const e=await m(r.searchedValue,r.page,r.perPage);if(e.hits&&e.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",c.reset(),d(),p();return}r.total=e.totalHits,b();const o=e.hits.map(i=>g(i)).join("");n.innerHTML=o,d()}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"}),d();return}},E=async()=>{p(),f(),r.page+=1;const e=(await m(r.searchedValue,r.page)).hits.map(o=>g(o)).join("");n.insertAdjacentHTML("beforeend",e),w(),d(),b(),R()},f=()=>{y.classList.remove("is-hidden")},d=()=>{y.classList.add("is-hidden")},q=()=>{h.classList.remove("is-hidden")},p=()=>{h.classList.add("is-hidden")},b=()=>{const e=Math.ceil(r.total/18);r.page>=e?(p(),l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):q()},R=()=>{const e=n.firstElementChild.getBoundingClientRect().height+102;scrollBy({behavior:"smooth",top:e*2})};h.addEventListener("click",E);c.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
