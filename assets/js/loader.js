
let bottom = '<section id="footer" class="wrapper">' +
    '<div class="inner">' +
    ' <div class="split">' +
    '<div class="content">' +
    '<header>' +
    '<h2>About</h2>' +
    '</header>' +
    '<p>Software developer.</p>' +
    '<ul class="actions">' +
    '<li><a href="https://verloka.com/blog" class="button next">Blog</a></li>' +
    '</ul>' +
    '</div>' +
    '<ul class="contact-icons">' +
    '<li><a href="https://twitter.com/ogyreal" class="icon alt fa-twitter"><span class="label">twitter.com/ogyreal</span></a></li>' +
    '<li><a href="https://linkedin.com/in/verloka" class="icon alt fa-linkedin"><span class="label">linkedin.com/in/verloka</span></a></li>' +
    '<li><a href="scheme://somepage" class="icon alt fa-envelope"><span class="label">&lt;click to show email&gt;</span></a></li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</section>' +
    '<section class="wrapper style2 copyright">' +
    '<div class="inner">&copy; Vadym Verloka. All rights reserved.</div>' +
    '</section>';

let header = '<span class="logo"><a href="https://verloka.com">Vadym <span>Verloka</span></a></span><a href="#menu"><span>Menu</span></a>';

let menu = '<div class="inner">' +
    '<h2>Menu</h2>' +
    '<ul class="links">' +
    '<li><a href="https://verloka.com">Home</a></li>' +
    '<li><a href="https://verloka.com/portfolio">Portfolio</a></li>' +
    '<li><a href="https://verloka.com/blog">Blog</a></li>' +
    '</ul>' +
    '<a class="close"><span>Close</span></a>' +
    '</div>';

$('#header').html(header);
$('#menu').html(menu);
$('#BotomContent').html(bottom);

$('span:contains("click to show email")').on('click', () => {
    $('span:contains("click to show email")').text('hello@verloka.com');
    $('span:contains("click to show email")').unbind();

    let l1 = 'mailto';
    let l2 = ':';
    let l3 = 'hello';
    let l4 = '@';
    let l5 = 'verloka';
    let l6 = '.';
    let l7 = 'com';

    setTimeout(() => { $('.fa-envelope').attr('href', l1 + l2 + l3 + l4 + l5 + l6 + l7) }, 100);
});
