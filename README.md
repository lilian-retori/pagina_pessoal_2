Instruções de Instalação e Uso - Página de Perfil com Glassmorphism
📁 Estrutura de Arquivos
Para implementar esta página de perfil, você deve criar a seguinte estrutura de pastas:

text
projeto-perfil/
├── index.html        (Arquivo HTML principal)
├── style.css         (Estilos CSS com glassmorphism)
├── app.js            (JavaScript para animações)
└── image.jpg         (Imagem de fundo fornecida)
🚀 Instalação Rápida
Passo 1: Preparar os Arquivos
Crie uma nova pasta para o projeto

Copie a imagem anexada para a pasta com o nome image.jpg

Crie os arquivos HTML, CSS e JavaScript copiando o código fornecido

Passo 2: Configurar a Imagem de Fundo
No arquivo CSS, verifique se a referência à imagem está correta:

css
.hero-background {
    background-image: url('image.jpg');
}
Passo 3: Abrir a Página
Abra o arquivo index.html em qualquer navegador moderno

Certifique-se de que todos os arquivos estão na mesma pasta

🎨 Personalização
Alterando Cores
No arquivo style.css, modifique as variáveis no :root:

css
:root {
  --primary-color: rgba(33, 128, 141, 1);     /* Cor principal */
  --text-color: #13343b;                      /* Cor do texto */
  --card-background: rgba(255, 255, 255, 0.15); /* Fundo dos cards */
}
Modificando Informações
No arquivo index.html, substitua as informações pelos seus dados:

Nome e título

Informações de contato

Experiências profissionais

Habilidades e competências

Formação acadêmica

Ajustando Animações
No arquivo app.js, você pode modificar:

Velocidade do efeito typewriter alterando typeSpeed

Textos que aparecem no efeito typewriter no array texts

Duração das animações alterando as variáveis de tempo

🔧 Funcionalidades Técnicas
Efeito Glassmorphism
O efeito de vidro é criado através de:

css
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid