function makeBox(title, description, imagelink, delay) {return(`<div class="pointbox" data-aos="fade-left" data-aos-delay="${delay}"><img src="${imagelink}""></img><p class="title">${title}</p><p class="subtitle">${description}</p></div>`)};
function btn() {
    document.getElementById('btn-0').classList.add('btn-0-up');
    setTimeout(function () {
        console.log("done");
        var body = document.getElementsByTagName('body')[0]
        body.removeChild(document.getElementById('btn-0'))
        body.classList.remove('start')
        var [container, points] = [document.createElement('div'), document.createElement('div')]
        container.classList.add('container');
        container.innerHTML = '<div class="tnav"><a href="" class="neon-button" data-aos="fade-left">Dashboard</a><a href="https://discord.gg/XsmMzqs9Gs" target="_blank" class="neon-button" data-aos="fade-left" data-aos-delay="100">Discord</a><p class="title inline" style="margin-left: 0.5em; justify-self: right;" data-aos="fade-left" data-aos-delay="300">Ascella.host</p></div>';
        body.append(container);
        var welcome = '<p class="title welcome" data-aos="fade-left" data-aos-delay="500">Welcome to the Ascella Uploader</p>'
        var subwelcome = '<p class="subtitle welcome" data-aos="fade-left" data-aos-delay="650">Looking to score an invite? Join the <a href="https://discord.gg/XsmMzqs9Gs" target="_blank">Discord</a>.</p>'

        container.innerHTML += welcome + subwelcome;
        container.appendChild(points);
        points.classList.add('center-flex');
        points.innerHTML += makeBox(
            'Customization', 
            'Make your images your own. Apply filters, add embeds, and more from the <a href="">dashboard</a> or using our Discord bot.', 
            'https://www.ascella.host/domains.png',
            '1000'
        ) + makeBox(
            'Domains', 
            'Choose from a variety of custom domains to host your images. You can always change later from the <a href="">dashboard</a> or using our bot.', 
            'https://www.ascella.host/domains.png',
            '1100'
        ) + makeBox(
            'Dashboard',
            'A simple dashboard to modify your domain, make URL redirects, and customize your images.',
            'https://www.ascella.host/dashboard.png',
            '1200'
        ) + makeBox(
            'What are you waiting for?',
            'To get started, join our <a href="https://discord.gg/XsmMzqs9Gs">Discord</a>, get a code and redeem it with our bot. It\'s that easy!',
            'redeem.png',
            '1300'
        )
    }, 1000);
}