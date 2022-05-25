class Noticia{
    constructor(titulo, dataPublicacao, resumo, texto){
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
        this.resumo = resumo;
        this.texto = texto;
    }

    mostrarNoticia(){
        return this.titulo + "\n" + this.dataPublicacao + "\n" +  this.resumo + "\n" + this.texto
    }
}

let requestURL = "https://www.luizpicolo.com.br/api.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "Json";
request.send();

  request.onload = function(){
	let resposta = request.response;

	  noticias = JSON.parse(resposta)

		console.log(noticias) 


		let pegaTitulo = noticias.articles[0].title
		let pegaData = noticias.articles[0].publishedAt
    let pegaAutor = noticias.articles[0].author
    let pegaResumo = noticias.articles[0].description
			
		let noticia = new Noticia(pegaTitulo, pegaData, pegaAutor, pegaResumo)
    console.log(noticia.mostrarNoticia())

	}

 
