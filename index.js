$('#anim').textillate({ in: { effect: 'fadeInUp' } });
$('#links a').textillate({ in: { effect: 'fadeInUp'} });

const tl = new gsap.timeline();

tl.from('.lrow a',{
    stagger: .2,
    opacity: 0,
    x:10
})

gsap.from('#hero img',{
    stagger: .2,
    opacity: 0.2,
    y: 60,
},'-=1')