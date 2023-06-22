[English version of this Readme](#smart-assistant---adeus-multas)

[Versão em Português deste Readme](#assistente-inteligente---adeus-multas)

# Smart Assistant - Adeus Multas

Developed as the final project of Post-Graduation in Multiplatform Mobile Applications, from [Descomplica College](http://www.descomplica.com.br).

## What it's about 🤔?

The "Adeus Multas" Virtual Assistant is a simple app that allows the user to ask questions related to the Brazilian Traffic Law. It was developed for the company 'Adeus Multas', to be used by their customers and the general public.

## How it was developed 💻?

### Backend

The backend function was developed using Javascrip (Node.js) and it runs as an AWS Lambda function executed through a RESTful API endpoint.

The answers are generated on backend by calling OpenAI API, using gpt-3.5-turbo engine.

### Frontend

The frontend consists of two separate apps, a [website](https://ai.adeusmultas.com), made to test the backend while it was being developed, and an [Android app](https://play.google.com/store/apps/details?id=com.joaotextor.amaicompanion) developed in Javascript using React-Native and Expo framework. The build was made using EAS build service.

#### Screenshots

<a href="https://www.adeusmultas.com/externalfiles/captura1.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura1.jpg" width=250/></a>
<a href="https://www.adeusmultas.com/externalfiles/captura2.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura2.jpg" width=250/></a>
<a href="https://www.adeusmultas.com/externalfiles/captura3.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura3.jpg" width=250/></a>

## How to download?

### Código fonte

At the present moment, only the android app source code is public.

#### Requirements

Node.js v18.15

Npm 9.6.2

#### Cloning the repository

```
git clone https://github.com/joaotextor/am-ai-companion
```

#### Install dependencies

```
npm install
```

#### Running

To run the app, you'll have to download [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent) on your cellphone.

While in the project root, run the following command:

```
npx expo start
```

Open the Expo Aplpication and scan the QR Code shown in the terminal.

### Android App

#### Requirements

Android 9+

#### [Download on Google Play](https://play.google.com/store/apps/details?id=com.joaotextor.amaicompanion)

## Bug reports

If you find any bug, [fill a Issue](https://github.com/joaotextor/am-ai-companion/issues) or <a href="mailto:joaotextor@gmail.com?subject=Bug report: Assistente Inteligente&body=Encontrei os seguintes erros/bugs:">send me an email.</a>

# Assistente Inteligente - Adeus Multas

Projeto realizado para apresentação no Pitch de conclusão do curso de Pós Graduação em Projetos de Aplicativos Móveis Multiplataforma, da [Faculdade Descomplica](http://www.descomplica.com.br).

## Em que consiste 🤔?

O Assistente Virtual Adeus Multas é um aplicativo simples que permite ao usuário tirar dúvidas e fazer perguntas ao assistente virtual, relacionadas ao Direito de Trânsito. Foi desenvolvido para a empresa 'Adeus Multas', para uso de seus clientes e do público em geral.

## Como foi desenvolvido 💻?

### Backend

A função de backend foi desenvolvida em Javascript (Node.js) e roda como uma função AWS Lambda e é acionada por um endpoint de uma API RESTful.

As respostas são geradas no backend fazendo uma chamada à API da OpenAI, utilizando-se da engine gpt-3.5-turbo.

Futuramente pretendo usar o sistema de Fine Tuning para melhorar as saídas, pois a engine atual, mesmo alimentada com fontes externas, ainda pode gerar respostas desatualizadas.

### Frontend

Além do desenvolvimento de um [website](https://ai.adeusmultas.com) para fins de testes, o projeto para o Pitch é um aplicativo Android desenvolvido em Javascript, utilizando-se da biblioteca React-Native. Foi criado utilizando-se do Expo e sua build foi realizada com o serviço EAS Build.

#### Capturas de tela

<a href="https://www.adeusmultas.com/externalfiles/captura1.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura1.jpg" width=250/></a>
<a href="https://www.adeusmultas.com/externalfiles/captura2.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura2.jpg" width=250/></a>
<a href="https://www.adeusmultas.com/externalfiles/captura3.jpg"><img src="https://www.adeusmultas.com/externalfiles/captura3.jpg" width=250/></a>

## Como baixar?

### Código fonte

Apenas o código fonte do aplicativo Android encontra-se público no momento.

#### Requisitos

Node.js v18.15

Npm 9.6.2

#### Clonando o repo

```
git clone https://github.com/joaotextor/am-ai-companion
```

#### Após, instale:

```
npm install
```

#### Rodando

Para rodar, você irá precisar instalar o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) em seu celular.

Depois, rode isso em seu prompt, estando na raiz do projeto:

```
npx expo start
```

Abra o aplicativo e digitalize o código QR que abrir.

### Aplicativo

#### Requisitos

Android 9+

#### [Baixar na Google Play](https://play.google.com/store/apps/details?id=com.joaotextor.amaicompanion)

## Bug reports

Se encontrar bugs, [preencha um Issue ](https://github.com/joaotextor/am-ai-companion/issues) neste repositório ou, alternativamente, me <a href="mailto:joaotextor@gmail.com?subject=Bug report: Assistente Inteligente&body=Encontrei os seguintes erros/bugs:">envie um e-mail.</a>

