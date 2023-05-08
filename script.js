      // Inicia na primeira etapa
      let etapaAtual = 1;

      // Funções de resposta do usuário
      function respostaSim() {
        if (etapaAtual === 1) {
          // Respondeu Sim na primeira etapa
          etapaAtual = 2;
          document.getElementById('etapa1').classList.add('escondido');
          document.getElementById('etapa2').classList.remove('escondido');
          atualizaProgresso(33);
        } else if (etapaAtual === 2) {
          // Respondeu Sim na segunda etapa
          etapaAtual = 3;
          document.getElementById('etapa2').classList.add('escondido');
          document.getElementById('etapa3').classList.remove('escondido');
          atualizaProgresso(66);
        }
      }

      function respostaNao() {
        if (etapaAtual === 1) {
            etapaAtual = 3;
      document.getElementById('etapa1').classList.add('escondido');
      document.getElementById('etapa3').classList.remove('escondido');
      atualizaProgresso(100);
    } else if (etapaAtual === 2) {
      // Respondeu Não na segunda etapa
      etapaAtual = 3;
      document.getElementById('etapa2').classList.add('escondido');
      document.getElementById('etapa3').classList.remove('escondido');
      atualizaProgresso(100);
    }
  }

  function atualizaProgresso(porcentagem) {
    const barra = document.querySelector('.progresso-barra');
    barra.style.width = porcentagem + '%';
  }

  // Função para encaminhar para outro site
  function encaminhaSite() {
    window.location.href = 'https://newdetox.bytebuilders.com.br/';
  }