!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=window.localStorage,o=function(){var e=JSON.parse(r.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("ul");e.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n        <p class="f-bold">'+e.name+'</p>\n        <p class="li-fs">'+e.email+'</p>\n        <p class="li-fs li-bb">'+e.phone+"</p><br>\n      ",n.appendChild(t)}),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){o();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=e.elements,a=n.name,u=n.email,c=n.phone,i=n.company,l=n.notes,s=n.twitter,f={name:a.value,email:u.value,phone:c.value,company:i.value,notes:l.value,twitter:s.value},p=JSON.parse(r.getItem("contacts"))||[];p.push(f),r.setItem("contacts",JSON.stringify(p)),o(),e.reset()})})}]);