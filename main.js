function addClassName0() {
    document.getElementById('btn-0').classList.add('btn-0-up');
    setTimeout(function () {
        console.log("done");
        var body = document.getElementsByTagName('body')[0]
        body.removeChild(document.getElementById('btn-0'))
        body.classList.remove('start')
        var container = document.createElement('div')
        container.classList.add('container');
        container.innerHTML = '<div class="tnav"><a class="neon-button" data-aos="fade-left">Dashboard</a><a class="neon-button" data-aos="fade-left" data-aos-delay="100">Discord</a></div>';
        body.append(container);
        var welcome = '<p class="title" data-aos="fade-left" data-aos-delay="500">Welcome to the Ascella Uploader</p>'
        var subwelcome = '<p class="subtitle" data-aos="fade-left" data-aos-delay="650">Looking to score an invite? Join the <a href="https://discord.gg/XsmMzqs9Gs" target="_blank">Discord</a>.</p>'
        container.innerHTML += welcome + subwelcome;
    }, 1000);
}