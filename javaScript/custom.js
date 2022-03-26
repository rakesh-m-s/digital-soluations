// Image Load
	(function(root,factory){if(typeof exports==="object"){module.exports=factory(root)}else if(typeof define==="function"&&define.amd){define([],factory(root))}else{root.LazyLoad=factory(root)}})(typeof global!=="undefined"?global:this.window||this.global,function(root){"use strict";const defaults={src:"data-original",srcset:"data-srcset",selector:".ll"};const extend=function(){let extended={};let deep=!1;let i=0;let length=arguments.length;if(Object.prototype.toString.call(arguments[0])==="[object Boolean]"){deep=arguments[0];i++}
let merge=function(obj){for(let prop in obj){if(Object.prototype.hasOwnProperty.call(obj,prop)){if(deep&&Object.prototype.toString.call(obj[prop])==="[object Object]"){extended[prop]=extend(!0,extended[prop],obj[prop])}else{extended[prop]=obj[prop]}}}};for(;i<length;i++){let obj=arguments[i];merge(obj)}
return extended};function LazyLoad(images,options){this.settings=extend(defaults,options||{});this.images=images||document.querySelectorAll(this.settings.selector);this.observer=null;this.init()}
LazyLoad.prototype={init:function(){if(!root.IntersectionObserver){this.loadImages();return}
let self=this;let observerConfig={root:null,rootMargin:"0px",threshold:[0]};this.observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.intersectionRatio>0){self.observer.unobserve(entry.target);let src=entry.target.getAttribute(self.settings.src);let srcset=entry.target.getAttribute(self.settings.srcset);if("img"===entry.target.tagName.toLowerCase()){if(src){entry.target.src=src}
if(srcset){entry.target.srcset=srcset}}else{entry.target.style.backgroundImage="url("+src+")"}}})},observerConfig);this.images.forEach(function(image){self.observer.observe(image)})},loadAndDestroy:function(){if(!this.settings){return}
this.loadImages();this.destroy()},loadImages:function(){if(!this.settings){return}
let self=this;this.images.forEach(function(image){let src=image.getAttribute(self.settings.src);let srcset=image.getAttribute(self.settings.srcset);if("img"===image.tagName.toLowerCase()){if(src){image.src=src}
if(srcset){image.srcset=srcset}}else{image.style.backgroundImage="url('"+src+"')"}})},destroy:function(){if(!this.settings){return}
this.observer.disconnect();this.settings=null}};root.lazyload=function(images,options){return new LazyLoad(images,options)};if(root.jQuery){const $=root.jQuery;$.fn.lazyload=function(options){options=options||{};options.attribute=options.attribute||"data-original";new LazyLoad($.makeArray(this),options);return this}}
return LazyLoad})

window.addEventListener("load", function(event) {
    lazyload();
});

$(window).on('scroll', function() {
     if($('.navbar').length){
        var strickyScrollPos=111;
        if($(window).scrollTop()>strickyScrollPos){
          $('.header-bg').addClass('header-fixed');
        }
        else if($(this).scrollTop()<=strickyScrollPos){
          $('.header-bg').removeClass('header-fixed');
        }
      }
});


$(document).on("click",function(){
	$(".navbar-collapse").removeClass("show");
})


$(".navbar-collapse").on("click",function(e){
	e.stopPropagation()
})

$(".nav-close").on("click",function(){
	$(".navbar-collapse").removeClass("show");
})


