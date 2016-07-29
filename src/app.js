$(() => {
  $('.skitter-large').skitter({
    responsive: {
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
  })
  $('.skitter-themed').skitter({
    navigation: true,
    responsive: {
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
  })
  $('.close-banner').on('click', function(e) {
    e.preventDefault()
    $(this).closest('.small-banner').addClass('hide')
  })
})
