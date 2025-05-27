fetch('data/ads.json')
  .then(res => res.json())
  .then(sections => {
    const container = document.getElementById('cheat-sheet');
    sections.forEach((sec, secIndex) => {
      const secEl = document.createElement('section');
      secEl.classList.add(sec.color);

      const header = document.createElement('h2');
      header.className = 'section-header';
      header.innerText = `${sec.number}. ${sec.emoji} ${sec.title}`;
      secEl.appendChild(header);

      const cmdContainer = document.createElement('div');
      cmdContainer.className = 'commands';

      sec.commands.forEach((cmdObj, cmdIndex) => {
        const btn = document.createElement('button');
        btn.className = 'cmd-button';
        btn.innerText = cmdObj.cmd;
        btn.setAttribute('aria-label', cmdObj.desc);
        btn.addEventListener('click', () => {
          document.getElementById('modal-title').innerText = cmdObj.cmd;
          document.getElementById('modal-text').innerHTML = `
            <p>${cmdObj.desc}</p>
            <p><a href="${cmdObj.link}" target="_blank" style="color: #5CA9E6; font-weight: bold;">🔗 Acessar recurso</a></p>
          `;
          document.getElementById('modal').style.display = 'flex';
        });
        cmdContainer.appendChild(btn);
      });

      secEl.appendChild(cmdContainer);
      container.appendChild(secEl);
    });
  });

document.querySelector('.close').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
};

document.getElementById('backToTopBtn').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Mostrar o botão quando rolar
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Voltar ao topo quando clicar
  document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.getElementById('btnTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });