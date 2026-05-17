// Base de dados centralizada da aplicação (Projetos removido)
const profileData = {
  skills: [
    { name: 'Java', class: 'accent' },
    { name: 'SQL', class: 'accent' },
    { name: 'Estrutura de Dados', class: 'accent' },
    { name: 'Análise de Sistemas', class: 'accent' },
    { name: 'Flutter', class: '' },
    { name: 'JIRA', class: '' },
    { name: 'Git', class: '' }
  ],
  contacts: [
    {
      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
      content: `<a href="mailto:andressa_scosta@outlook.com">andressa_scosta@outlook.com</a>`
    },
    {
      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      content: `<span>(11) 96104-7570</span>`
    }
  ],
  links: [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/andressa-santos-ab2881169/', 
      icon: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>` 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/andressa-santoss', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>` 
    },
    { 
      name: 'Email', 
      url: 'mailto:andressa_scosta@outlook.com', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>` 
    }
  ]
};

// Inicialização da interface assim que a árvore DOM estiver pronta
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderContacts();
  renderLinks();
  initBackgroundEffect();
});

// Geração dinâmica das tags de habilidades
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  profileData.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = `pill ${skill.class}`;
    span.textContent = skill.name;
    container.appendChild(span);
  });
}

// Geração dinâmica dos elementos de contato
function renderContacts() {
  const container = document.getElementById('contact-container');
  if (!container) return;

  profileData.contacts.forEach(info => {
    const li = document.createElement('li');
    li.innerHTML = `${info.icon} ${info.content}`;
    container.appendChild(li);
  });
}

// Geração dinâmica da grade de botões de links externos
function renderLinks() {
  const container = document.getElementById('links-container');
  if (!container) return;

  profileData.links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'link-btn';
    a.href = link.url;
    a.target = link.url.startsWith('mailto') ? '_self' : '_blank';
    a.innerHTML = `${link.icon} ${link.name}`;
    container.appendChild(a);
  });
}

// Efeito de paralaxe sutil nos gradientes de fundo baseado no ponteiro do mouse
function initBackgroundEffect() {
  const blob1 = document.getElementById('blob1');
  const blob2 = document.getElementById('blob2');
  
  if (!blob1 || !blob2) return;

  window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;

    blob1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    blob2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  });
}