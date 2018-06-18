
var allButtons = $('#buttons >button')
for (let i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click',(x) => {
		var index = $(x.currentTarget).index()
		var p = index * - 920
		$('#images').css({
			transform: 'translateX(' + p +'px)'
		})
		n = index
        activeButton(allButtons.eq(n))
	})
}

var n = 0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')

function activeButton(a){
	a.addClass('active')
		.siblings('.active').removeClass('active')
}

var timerID = setInterval(() =>{
	n+=1
	allButtons.eq(n%size).trigger('click')
},4000)

document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timerID)
    }else{
        timerID = setInterval(() =>{
            n+=1
            allButtons.eq(n%size).trigger('click')
        },4000)
    }
})

$('.window').on('mouseenter',() => {
	window.clearInterval(timerID)
})

$('.window').on('mouseleave',() => {
	timerID = setInterval(() =>{
		n+=1
		allButtons.eq(n%size).trigger('click')
	},4000)
})

