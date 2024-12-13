const teamMembers = [
    {
        name: 'Cristiano D. Bailke',
        email: 'cristianobailke@gmail.com',
        github: 'https://github.com/cristianobailke',
        instagram: 'https://www.instagram.com/cristianoblke/',
        facebook: 'https://www.facebook.com/cristiano.bailke/',
        image: 'imagens/cristiano.jpg',
        behance:'https://www.behance.net/cristianobailke',
        linkedin: 'https://www.linkedin.com/in/cristiano-bailke-1500aa245/',
        whatsapp:'55999051551'
        
    },
    {
        name: 'Sarah Hassen',
        email: 'sarahcshassen@gmail.com',
        github: 'https://github.com/SarahHassen',
        instagram: 'https://www.instagram.com/sarahcshassen/',
        facebook: 'https://www.facebook.com/sahhassen.c.a',
        image: 'imagens/sarah.jpg',
        linkedin: 'https://www.linkedin.com/in/sarah-hassen-1b9163263/',
        whatsapp:'51985112933'
    },
    {
        name: 'Gustavo Ferreira',
        email: 'gferreira3105@gmail.com',
        github: 'https://github.com/fer-rei-ra',
        instagram: 'https://instagram.com/fer.r31.ra',
        image: 'imagens/gustavo.jpg',
        linkedin: 'https://www.linkedin.com/in/fer-rei-ra/',
        whatsapp:''
    },
    {
        name: 'Sany Maikel',
        email: 'sanymaikelsouzadeoliveira@gmail.com',
        github: '',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGiLpEZZtjwQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703096468645?e=1739404800&v=beta&t=-O3i_0qn8Reupdw3rl4sTPOZzZp6CiIl3bi6GRcaBRY',
        linkedin: 'https://www.linkedin.com/in/sany-maikel-souza-de-oliveira/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        whatsapp:''
    },
    {
        name: 'Danielly Azevedo',
        email: 'daniellyazevdo@gmail.com',
        github: 'http://github.com/danyazevedo',
        instagram: 'https://www.instagram.com/danyy_azevedoo',
        image: 'imagens/danyy.jpg',
        behance: '',
        whatsapp:'55999061551'
    },
    {
        name: 'Daniela F. Rodrigues',
        email: 'lucas.rodrigues@example.com',
        github: 'https://github.com/daniFelicio/daniFelicio',
        instagram: '',
        facebook: '',
        image: 'imagens/danyoculos.jpg',
        linkedin: 'https://www.linkedin.com/in/daniela-felicio-rodrigues-69a911190',
        whatsapp:'519835555552'
    },
    {
        name: 'Felipe Roth',
        email: 'batatoroth@gmail.com',
        github: 'https://github.com/FelipeRoth',
        instagram: 'https://www.instagram.com/felips_rs/profilecard/?igsh=MWJxdnRtcmpnanEzdA==',
        facebook: 'https://facebook.com/beatrizlima',
        image: 'imagens/feliperoth.jpg',
        linkedin: 'https://www.linkedin.com/in/felipe-r-091142254/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        whatsapp:'55999061551'
    },
    {
        name: 'Augusto M. S. Nunes',
        email: 'augustomiguelnunes@hotmail.com',
        github: '',
        instagram: 'https://www.instagram.com/augustomiguelsantosnunes',
        facebook: '',
        linkedin: 'https://www.linkedin.com/in/augusto-miguel-nunes-05a09b196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        image: 'imagens/augusto.jpg',
        whatsapp:'51984494135'
    },
    {
        name: 'Luis G. L. Nascimento',
        email: 'luisgustavo8069@gmail.com',
        github: 'https://github.com/Luis-ln',
        instagram: 'https://www.instagram.com/ln_loopes/profilecard/?igsh=dTI3NHBrdzY4Mm1r',
        facebook: '',
        image: 'imagens/lgustavo.jpg',
        linkedin: 'https://br.linkedin.com/in/lu%C3%ADs-gustavo-lopes-nascimento-941188341',
         whatsapp:'55999061551'
    },
    {
        name: 'Luis F. L. Costa',
        email: 'fernanda.almeida@example.com',
        github: 'https://github.com/filip3e',
        instagram: 'https://instagram.com/fernandaalmeida',
        facebook: 'https://facebook.com/fernandaalmeida',
        image: 'imagens/luisfelipe.jpg',
        linkedin: '',
        whatsapp:'55999061551'
    },
    {
        name: 'Marlene Gunchorowski',
        email: 'designerdione@gmail.com',
        github: 'https://github.com/Dione33',
        instagram: '',
        facebook: '',
        image: 'imagens/marlene.jpg',
        behance:'https://www.behance.net/designerdione',
         whatsapp:'51981189921'
    },
    {
        name: 'Lucas O. Faria',
        email: 'lucasdeoliveira.1994@gmail.com',
        github: 'https://github.com/94LucasOliveira',
        instagram: '94lucasoliveira',
        facebook: 'https://www.facebook.com/tchukas.oliveira',
        image: 'imagens/lucasfaria.jpg',
        linkedin: 'https://www.linkedin.com/in/94lucasoliveira',
         whatsapp:'51995939157'
       
    }
];

const teamContainer = document.getElementById('team-container');

function createSocialLink(url, iconClass) {
    return url ? `<a href="${url}" class="social-icon" target="_blank" rel="noopener noreferrer">
                    <i class="${iconClass}"></i>
                  </a>` : '';
}

teamMembers.forEach(member => {
    const memberCard = `
        <div class="card">
            <div class="card-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="card-content">
                <h2 class="card-title">${member.name}</h2>
                <p class="card-email">${member.email}</p>
                <div class="card-social">
                    ${createSocialLink(member.github, 'fab fa-github')}
                    ${createSocialLink(member.instagram, 'fab fa-instagram')}
                    ${createSocialLink(member.facebook, 'fab fa-facebook')}
                    ${createSocialLink(member.linkedin, 'fab fa-linkedin')}
                    ${createSocialLink(member.behance, 'fab fa-behance')}
                    ${createSocialLink(member.whatsapp, 'fab fa-whatsapp')}
                    
                </div>
            </div>
        </div>
    `;
    teamContainer.innerHTML += memberCard;
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.style.height = '350px';
    card.style.maxWidth = '350px';
});


function updateCardSizing() {
    const cards = document.querySelectorAll('.card');
    const isMobile = window.innerWidth <= 768;

    cards.forEach(card => {
        if (isMobile) {
            card.style.height = 'auto';
            card.style.maxWidth = '100%';
        } else {
            card.style.height = '350px';
            card.style.maxWidth = '350px';
        }
    });
}

window.addEventListener('load', updateCardSizing);
window.addEventListener('resize', updateCardSizing);