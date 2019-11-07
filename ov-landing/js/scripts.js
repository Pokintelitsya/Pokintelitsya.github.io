"use strict";var OverlayManager=function(){var e=document.getElementById("black-overlay");function n(){var n=this;this.onShouldCloseOverlaysHandlers=[],e.onclick=function(){n.invokeShouldCloseOverlays()}}return n.prototype.invokeShouldCloseOverlays=function(){var e=!0,n=!1,t=void 0;try{for(var o,a=this.onShouldCloseOverlaysHandlers[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){(0,o.value)()}}catch(e){n=!0,t=e}finally{try{e||null==a.return||a.return()}finally{if(n)throw t}}},n.prototype.showOverlay=function(){e.classList.add("active")},n.prototype.hideOverlay=function(){e.classList.remove("active")},n.prototype.addShouldCloseOverlaysListener=function(e){this.onShouldCloseOverlaysHandlers.push(e)},n}(),overlayManager=new OverlayManager,HeaderManager=function(){var e,n=document.getElementById("hamburger-button"),t=document.getElementById("mobile-menu"),o=document.querySelectorAll("#mobile-menu li.submenu-parent");var a=function(){n.onclick=function(){n.classList.contains("close")?l():r()};var t=!0,a=!1,u=void 0;try{for(var d,v=function(){var e=d.value;e.getElementsByTagName("a")[0].onclick=function(){i(e)||o.forEach((function(e){s(e)})),c(e)}},y=o[Symbol.iterator]();!(t=(d=y.next()).done);t=!0)v()}catch(e){a=!0,u=e}finally{try{t||null==y.return||y.return()}finally{if(a)throw u}}e.addShouldCloseOverlaysListener((function(){l()}))},r=function(){e.invokeShouldCloseOverlays(),t.classList.add("active"),e.showOverlay(),n.classList.add("close")},l=function(){t.classList.remove("active"),e.hideOverlay();var a=!0,r=!1,l=void 0;try{for(var i,c=o[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var u=i.value;s(u)}}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}n.classList.remove("close")},i=function(e){return e.classList.contains("active")},c=function(e){e.classList.toggle("active")},s=function(e){e.classList.remove("active")};return function(n){e=n,a()}}(),headerManager=new HeaderManager(overlayManager),copyText=document.getElementById("urlId");function myFunction(){var e=document.getElementById("urlId");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy");var n=document.getElementById("myTooltip");n.classList.add("active"),n.innerHTML="Copied"}function outFunc(){document.getElementById("myTooltip").innerHTML="Copy to clipboard"}copyText.value=copyText.innerHTML=window.location.href;