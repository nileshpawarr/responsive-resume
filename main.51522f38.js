parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FVPG":[function(require,module,exports) {
function e(){var e,t=new Date,n=(new Date(t.getYear(),t.getMonth(),t.getDate()),t.getYear()),s=t.getMonth(),o=t.getDate(),a=new Date("01/06/2014".substring(6,10),"01/06/2014".substring(0,2)-1,"01/06/2014".substring(3,5)),c=a.getYear(),r=a.getMonth(),i=a.getDate(),l="",d="",m="",u=n-c;if(s>=r)var g=s-r;else{u--;g=12+s-r}if(o>=i)var v=o-i;else{v=31+o-i;--g<0&&(g=11,u--)}return d=(e={years:u,months:g,days:v}).years>1?" years":" year",m=e.months>1?" months":" month",e.years>0&&e.months>0?l=e.years+d+" and "+e.months+m:e.years>0&&0==e.months&&(l=e.years+d),l}document.getElementById("total-experience").innerText=e();var t=function(e,t){var n=document.getElementById(e),s=document.getElementById(t);n&&s&&n.addEventListener("click",function(){s.classList.toggle("show-menu")})};t("nav-toggle","nav-menu");var n=document.querySelectorAll(".nav__link");function s(){document.getElementById("nav-menu").classList.remove("show-menu")}n.forEach(function(e){return e.addEventListener("click",s)});var o=document.querySelectorAll("section[id]");function a(){var e=window.pageYOffset;o.forEach(function(t){var n=t.offsetHeight,s=t.offsetTop-50;sectionId=t.getAttribute("id");var o=document.querySelector(".nav__menu a[href*="+sectionId+"]");o&&(e>s&&e<=s+n?o.classList.add("active-link"):o.classList.remove("active-link"))})}function c(){var e=document.getElementById("scroll-top");e&&(this.scrollY>=200?e.classList.add("show-scroll"):e.classList.remove("show-scroll"))}window.addEventListener("scroll",a),window.addEventListener("scroll",c);var r=document.getElementById("theme-button"),i="dark-theme",l="bx-sun",d=localStorage.getItem("selected-theme"),m=localStorage.getItem("selected-icon"),u=function(){return document.body.classList.contains(i)?"dark":"light"},g=function(){return r.classList.contains(l)?"bx-moon":"bx-sun"};function v(){document.body.classList.add("scale-cv")}function f(){document.body.classList.remove("scale-cv")}d&&(document.body.classList["dark"===d?"add":"remove"](i),r.classList["bx-moon"===m?"add":"remove"](l)),r.addEventListener("click",function(){document.body.classList.toggle(i),r.classList.toggle(l),localStorage.setItem("selected-theme",u()),localStorage.setItem("selected-icon",g())});var h=document.getElementById("area-cv"),y=document.getElementById("resume-button"),L={margin:0,filename:"Nilesh-Pawar-Resume.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:4},jsPDF:{format:"a4",orientation:"portrait"}};function E(){html2pdf(h,L)}y.addEventListener("click",function(){v(),E(),setTimeout(f,5e3)});
},{}]},{},["FVPG"], null)
//# sourceMappingURL=main.51522f38.js.map