(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  var responsive = {
    small: {
      animation: 'fade',
      max_width: 768,
      suffix: '-small'
    },
    medium: {
      max_width: 1024,
      suffix: '-medium'
    }
  };
  $('.skitter-large').skitter({
    responsive: responsive
  });
  $('.skitter-themed').skitter({
    navigation: true,
    responsive: responsive
  });
  $('.skitter-thumb').skitter({
    thumbs: true,
    responsive: responsive
  });
  $('.skitter-navigation').skitter({
    dots: false,
    navigation: true,
    responsive: responsive
  });
  $('.skitter-dots').skitter({
    responsive: responsive
  });
  $('.skitter-dots-with-preview').skitter({
    preview: true,
    responsive: responsive
  });
  $('.skitter-numbers').skitter({
    dots: false,
    numbers: true,
    responsive: responsive
  });
  $('.skitter-progressbar').skitter({
    progressbar: true,
    responsive: responsive
  });
  $('.skitter-focus').skitter({
    focus: true,
    responsive: responsive
  });
  $('.close-banner').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.small-banner').addClass('hide');
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQU07QUFDTixNQUFJLGFBQWE7QUFDZixXQUFPO0FBQ0wsaUJBQVcsTUFETjtBQUVMLGlCQUFXLEdBRk47QUFHTCxjQUFRO0FBSEgsS0FEUTtBQU1mLFlBQVE7QUFDTixpQkFBVyxJQURMO0FBRU4sY0FBUTtBQUZGO0FBTk8sR0FBakI7QUFXQSxJQUFFLGdCQUFGLEVBQW9CLE9BQXBCLENBQTRCO0FBQzFCLGdCQUFZO0FBRGMsR0FBNUI7QUFHQSxJQUFFLGlCQUFGLEVBQXFCLE9BQXJCLENBQTZCO0FBQzNCLGdCQUFZLElBRGU7QUFFM0IsZ0JBQVk7QUFGZSxHQUE3QjtBQUlBLElBQUUsZ0JBQUYsRUFBb0IsT0FBcEIsQ0FBNEI7QUFDMUIsWUFBUSxJQURrQjtBQUUxQixnQkFBWTtBQUZjLEdBQTVCO0FBSUEsSUFBRSxxQkFBRixFQUF5QixPQUF6QixDQUFpQztBQUMvQixVQUFNLEtBRHlCO0FBRS9CLGdCQUFZLElBRm1CO0FBRy9CLGdCQUFZO0FBSG1CLEdBQWpDO0FBS0EsSUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCO0FBQ3pCLGdCQUFZO0FBRGEsR0FBM0I7QUFHQSxJQUFFLDRCQUFGLEVBQWdDLE9BQWhDLENBQXdDO0FBQ3RDLGFBQVMsSUFENkI7QUFFdEMsZ0JBQVk7QUFGMEIsR0FBeEM7QUFJQSxJQUFFLGtCQUFGLEVBQXNCLE9BQXRCLENBQThCO0FBQzVCLFVBQU0sS0FEc0I7QUFFNUIsYUFBUyxJQUZtQjtBQUc1QixnQkFBWTtBQUhnQixHQUE5QjtBQUtBLElBQUUsc0JBQUYsRUFBMEIsT0FBMUIsQ0FBa0M7QUFDaEMsaUJBQWEsSUFEbUI7QUFFaEMsZ0JBQVk7QUFGb0IsR0FBbEM7QUFJQSxJQUFFLGdCQUFGLEVBQW9CLE9BQXBCLENBQTRCO0FBQzFCLFdBQU8sSUFEbUI7QUFFMUIsZ0JBQVk7QUFGYyxHQUE1QjtBQUlBLElBQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBWTtBQUN6QyxNQUFFLGNBQUY7QUFDQSxNQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLGVBQWhCLEVBQWlDLFFBQWpDLENBQTBDLE1BQTFDO0FBQ0QsR0FIRDtBQUlELENBcEREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoKCkgPT4ge1xuICBsZXQgcmVzcG9uc2l2ZSA9IHtcbiAgICBzbWFsbDoge1xuICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICBtYXhfd2lkdGg6IDc2OCxcbiAgICAgIHN1ZmZpeDogJy1zbWFsbCdcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgbWF4X3dpZHRoOiAxMDI0LFxuICAgICAgc3VmZml4OiAnLW1lZGl1bSdcbiAgICB9XG4gIH1cbiAgJCgnLnNraXR0ZXItbGFyZ2UnKS5za2l0dGVyKHtcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlXG4gIH0pXG4gICQoJy5za2l0dGVyLXRoZW1lZCcpLnNraXR0ZXIoe1xuICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci10aHVtYicpLnNraXR0ZXIoe1xuICAgIHRodW1iczogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlXG4gIH0pXG4gICQoJy5za2l0dGVyLW5hdmlnYXRpb24nKS5za2l0dGVyKHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItZG90cycpLnNraXR0ZXIoe1xuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItZG90cy13aXRoLXByZXZpZXcnKS5za2l0dGVyKHtcbiAgICBwcmV2aWV3OiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItbnVtYmVycycpLnNraXR0ZXIoe1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIG51bWJlcnM6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci1wcm9ncmVzc2JhcicpLnNraXR0ZXIoe1xuICAgIHByb2dyZXNzYmFyOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItZm9jdXMnKS5za2l0dGVyKHtcbiAgICBmb2N1czogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlXG4gIH0pXG4gICQoJy5jbG9zZS1iYW5uZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCh0aGlzKS5jbG9zZXN0KCcuc21hbGwtYmFubmVyJykuYWRkQ2xhc3MoJ2hpZGUnKVxuICB9KVxufSlcbiJdfQ==
