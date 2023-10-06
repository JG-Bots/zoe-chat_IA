const chalk = require('chalk')
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
console.log(bgcolor(`Iniciando...`, 'orange'))
// Importando módulos
const express = require('express');
const cors = require('cors');
const secure = require('ssl-express-www');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

// ...
let responses;
// Caminho do arquivo JSON
const responsesPath = path.join(__dirname, '/public/responses.json');
// Carregar respostas do arquivo JSON
try {
  const rawResponses = fs.readFileSync(responsesPath);
  responses = JSON.parse(rawResponses);
} catch (err) {
  console.error('Erro ao carregar respostas do arquivo JSON:', err);
  responses = {};
}

// Configuração inicial
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));

let conversationHistory = [];

// Adicione esta linha para usar o body-parser
app.use(bodyParser.json());

// ...

app.get('/adicionarResposta', (req, res) => {
const pergunta = req.query.pergunta;
const resposta = req.query.resposta;
  
if (pergunta && resposta) {
// Verificar se já existe uma resposta para a pergunta
if (responses[pergunta]) {
// Verificar se a resposta já existe na lista
if (!responses[pergunta].includes(resposta)) {
// Adicionar a nova resposta à pergunta existente
responses[pergunta].push(resposta);
} else {
return res.json({ success: false, message: 'Resposta já existente para a pergunta.' });
}
} else {
// Se não houver resposta para a pergunta, criar uma nova entrada
responses[pergunta] = [resposta];
}
// Salvar as respostas no arquivo JSON
fs.writeFileSync(responsesPath, JSON.stringify(responses, null, 2));

return res.json({ success: true, message: 'Resposta adicionada com sucesso.' });
} else {
return res.status(400).json({ success: false, message: 'Parâmetros inválidos.' });
}
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/views/chat-zoe.html');
});
app.get('/add-resposta', (req, res) => {
  res.sendFile(__dirname + '/views/add-resposta.html');
});

app.get('/api', (req, res) => {
  const query = req.query.query;
  const response = generateResponse(query);
  res.json({ Resposta: response });
});

app.get('/getResponse', (req, res) => {
  const userMessage = req.query.userMessage;
  const response = generateResponse(userMessage);
  res.json({ Resposta: response });
});

app.get('/json', (req, res) => {
// Lê o arquivo JSON
fs.readFile('./public/responses.json', 'utf8', (err, data) => {
if (err) {
console.error(err);
return res.status(500).send('Erro ao ler o arquivo JSON');}

const jsonData = JSON.parse(data);
// Lê o arquivo HTML externo
const htmlPath = path.join(__dirname, 'views/json.html');
fs.readFile(htmlPath, 'utf8', (err, htmlData) => {
if (err) {
console.error(err);
return res.status(500).send('Erro ao ler o arquivo HTML externo');
}

// Substitui a parte relevante do HTML com os dados do JSON
const html = htmlData.replace('{{jsonData}}', JSON.stringify(jsonData, null, 2));

res.send(html);
});
});
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(bgcolor(`Servidor Conectado Com Sucesso! Rodando Na Porta http://localhost:${PORT}/`, 'green'))
})

function generateResponse(message) {
  let matchingKey = findMatchingKey(message, Object.keys(responses));

  if (matchingKey) {
    const possibleResponses = responses[matchingKey];
    const randomIndex = Math.floor(Math.random() * possibleResponses.length);
    return possibleResponses[randomIndex];
  } else {
    return 'Eu não tenho resposta para isso...';
  }
}

function findMatchingKey(input, keys) {
  const normalizedInput = input.toLowerCase();

  let bestMatch = null;
  let maxSimilarity = 0;

  keys.forEach(key => {
    const normalizedKey = key.toLowerCase();
    const similarity = calculateSimilarity(normalizedInput, normalizedKey);

    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = key;
    }
  });

  if (maxSimilarity > 0.7) {
    return bestMatch;
  } else {
    return null;
  }
}

function calculateSimilarity(s1, s2) {
  const intersection = [...new Set([...s1].filter(char => s2.includes(char)))].join('');
  const union = [...new Set([...s1, ...s2])].join('');
  return intersection.length / union.length;
}