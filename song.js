let audio = document.createElement('audio')
    audio.src = 'http://otnk0zw0q.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3'
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
$('.icon-pause').on('click',function(){
        audio.pause()
        $('.disc-container').removeClass('playing')
        $('.pointer').removeClass('play').addClass('pause')
    })
$('.icon-play').on('click',function(){
        audio.play()
        $('.disc-container').addClass('playing')
        $('.pointer').removeClass('pause').addClass('play')
    })
