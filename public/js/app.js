(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQU07QUFDTixNQUFJLGFBQWE7QUFDZixXQUFPO0FBQ0wsaUJBQVcsTUFETjtBQUVMLGlCQUFXLEdBRk47QUFHTCxjQUFRO0FBSEgsS0FEUTtBQU1mLFlBQVE7QUFDTixpQkFBVyxJQURMO0FBRU4sY0FBUTtBQUZGO0FBTk8sR0FBakI7QUFXQSxJQUFFLGdCQUFGLEVBQW9CLE9BQXBCLENBQTRCO0FBQzFCLGdCQUFZO0FBRGMsR0FBNUI7QUFHQSxJQUFFLGlCQUFGLEVBQXFCLE9BQXJCLENBQTZCO0FBQzNCLGdCQUFZLElBRGU7QUFFM0IsZ0JBQVk7QUFGZSxHQUE3QjtBQUlBLElBQUUsZ0JBQUYsRUFBb0IsT0FBcEIsQ0FBNEI7QUFDMUIsWUFBUSxJQURrQjtBQUUxQixnQkFBWTtBQUZjLEdBQTVCO0FBSUEsSUFBRSxxQkFBRixFQUF5QixPQUF6QixDQUFpQztBQUMvQixVQUFNLEtBRHlCO0FBRS9CLGdCQUFZLElBRm1CO0FBRy9CLGdCQUFZO0FBSG1CLEdBQWpDO0FBS0EsSUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCO0FBQ3pCLGdCQUFZO0FBRGEsR0FBM0I7QUFHQSxJQUFFLDRCQUFGLEVBQWdDLE9BQWhDLENBQXdDO0FBQ3RDLGFBQVMsSUFENkI7QUFFdEMsZ0JBQVk7QUFGMEIsR0FBeEM7QUFJQSxJQUFFLGtCQUFGLEVBQXNCLE9BQXRCLENBQThCO0FBQzVCLFVBQU0sS0FEc0I7QUFFNUIsYUFBUyxJQUZtQjtBQUc1QixnQkFBWTtBQUhnQixHQUE5QjtBQUtBLElBQUUsc0JBQUYsRUFBMEIsT0FBMUIsQ0FBa0M7QUFDaEMsaUJBQWEsSUFEbUI7QUFFaEMsZ0JBQVk7QUFGb0IsR0FBbEM7QUFJQSxJQUFFLGdCQUFGLEVBQW9CLE9BQXBCLENBQTRCO0FBQzFCLFdBQU8sSUFEbUI7QUFFMUIsZ0JBQVk7QUFGYyxHQUE1QjtBQUlBLElBQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBWTtBQUN6QyxNQUFFLGNBQUY7QUFDQSxNQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLGVBQWhCLEVBQWlDLFFBQWpDLENBQTBDLE1BQTFDO0FBQ0QsR0FIRDtBQUlELENBcEREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJCgoKSA9PiB7XG4gIGxldCByZXNwb25zaXZlID0ge1xuICAgIHNtYWxsOiB7XG4gICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgIG1heF93aWR0aDogNzY4LFxuICAgICAgc3VmZml4OiAnLXNtYWxsJ1xuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICBtYXhfd2lkdGg6IDEwMjQsXG4gICAgICBzdWZmaXg6ICctbWVkaXVtJ1xuICAgIH1cbiAgfVxuICAkKCcuc2tpdHRlci1sYXJnZScpLnNraXR0ZXIoe1xuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItdGhlbWVkJykuc2tpdHRlcih7XG4gICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlXG4gIH0pXG4gICQoJy5za2l0dGVyLXRodW1iJykuc2tpdHRlcih7XG4gICAgdGh1bWJzOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLnNraXR0ZXItbmF2aWdhdGlvbicpLnNraXR0ZXIoe1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci1kb3RzJykuc2tpdHRlcih7XG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci1kb3RzLXdpdGgtcHJldmlldycpLnNraXR0ZXIoe1xuICAgIHByZXZpZXc6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci1udW1iZXJzJykuc2tpdHRlcih7XG4gICAgZG90czogZmFsc2UsXG4gICAgbnVtYmVyczogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlXG4gIH0pXG4gICQoJy5za2l0dGVyLXByb2dyZXNzYmFyJykuc2tpdHRlcih7XG4gICAgcHJvZ3Jlc3NiYXI6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZVxuICB9KVxuICAkKCcuc2tpdHRlci1mb2N1cycpLnNraXR0ZXIoe1xuICAgIGZvY3VzOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmVcbiAgfSlcbiAgJCgnLmNsb3NlLWJhbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy5zbWFsbC1iYW5uZXInKS5hZGRDbGFzcygnaGlkZScpXG4gIH0pXG59KVxuIl19
