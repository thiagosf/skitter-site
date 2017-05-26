$(() => {
  let responsive = {
    small: {
      animation: 'fade',
      max_width: 768,
      suffix: '-small'
    },
    medium: {
      max_width: 1024,
      suffix: '-medium'
    }
  }
  $('.skitter-large').skitter({
    responsive: responsive
  })
  $('.skitter-themed').skitter({
    navigation: true,
    responsive: responsive
  })
  $('.skitter-thumb').skitter({
    thumbs: true,
    responsive: responsive
  })
  $('.skitter-navigation').skitter({
    dots: false,
    navigation: true,
    responsive: responsive
  })
  $('.skitter-dots').skitter({
    responsive: responsive
  })
  $('.skitter-dots-with-preview').skitter({
    preview: true,
    responsive: responsive
  })
  $('.skitter-numbers').skitter({
    dots: false,
    numbers: true,
    responsive: responsive
  })
  $('.skitter-progressbar').skitter({
    progressbar: true,
    responsive: responsive
  })
  $('.skitter-focus').skitter({
    focus: true,
    responsive: responsive
  })
  $('.close-banner').on('click', function(e) {
    e.preventDefault()
    $(this).closest('.small-banner').addClass('hide')
  })
})
