const projetos = document.querySelector("#projetos")
let listaProjetos = [
    {
        id: 0,
        tecnologias: "JAVA",
        descricao: "Projeto mt foda",
        imagem : "../img/menu.png",
        titulo: "Projeto de Feedback",
        video: "../videos/agendamento_medico.mp4"
    },
    {
        id: 1,
        tecnologias: "HTML,CSS,JS",
        descricao: "Projeto sem limitador",
        imagem : "../img/menu.png",
        titulo: "Cadastro de Pacientes",
        video: "../videos/buscador_cep_java.mp4"
    },
    {
        id: 2,
        tecnologias: "HTML,CSS,SQL,JS,JAVA",
        descricao: "Projeto cruel",
        imagem : "../img/menu.png",
        titulo: "Cadastro de Novatos",
        video: "../videos/buscador_cep_java.mp4"
    }

]

function criaProjetos(){
    listaProjetos.forEach(projeto=>{
        projetos.innerHTML += `
            <div class="card" data-projeto = "${projeto.id}">
                <div class="card-header">
                    Projeto ${projeto.id + 1}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${projeto.titulo}</h5>
                    <img src=${projeto.imagem}>
                    <p class="card-text">${projeto.descricao}</p>
                    <button href="#" class="btn btn-primary d-none btn-descricao" type="button">Descrição</button>
                    <button href="#" class="btn btn-warning btn-tecnologias" type="button">Tecnologias Utilizadas</button>
                    <button href="#" class="btn btn-info btn-demonstracao" type="button">Demonstração do projeto</button>
                    <a href="#" class="btn btn-success" target="_blank">Acessar Projeto</a>
                </div>
            </div>
        <br>
        `   
    })
}

function alteraCardProjeto(){
    html_projeto.forEach(projeto=>{
        const btn_descricao = projeto.querySelector(".btn-descricao")
        const btn_tecnologias = projeto.querySelector(".btn-tecnologias")
        const btn_demonstracao  =  projeto.querySelector(".btn-demonstracao")
        let numeroProjetoClicado = projeto.getAttribute("data-projeto")
        let projetoClicado = listaProjetos[numeroProjetoClicado]
        btn_tecnologias.addEventListener("click",()=>{
            projeto.innerHTML = `
            <div class="card-header">
            Projeto ${projetoClicado.id +1}
            </div>
        <div class="card-body">
            <h5 class="card-title">Tecnologias que foram utilizadas</h5>
            <p class="card-text">${projetoClicado.tecnologias}</p>
            <button href="#" class="btn btn-primary btn-descricao" type="button">Descrição</button>
            <button href="#" class="btn btn-warning d-none btn-tecnologias" type="button">Tecnologias Utilizadas</button>
            <button href="#" class="btn btn-info btn-demonstracao" type="button">Demonstração do projeto</button>
            <a href="#" class="btn btn-success" target="_blank">Acessar Projeto</a>
        </div>
            `
        })
        btn_descricao.addEventListener("click",()=>{
            projeto.innerHTML =`<div class="card-header">
            Projeto ${projetoClicado.id + 1}
        </div>
        <div class="card-body">
            <h5 class="card-title">${projetoClicado.titulo}</h5>
            <img src=${projetoClicado.imagem}>
            <p class="card-text">${projetoClicado.descricao}</p>
            <button href="#" class="btn btn-primary d-none btn-descricao" type="button">Descrição</button>
            <button href="#" class="btn btn-warning btn-tecnologias" type="button">Tecnologias Utilizadas</button>
            <button href="#" class="btn btn-info btn-demonstracao" type="button">Demonstração do projeto</button>
            <a href="#" class="btn btn-success" target="_blank">Acessar Projeto</a>
        </div>
        </div>
            `
        })
        btn_demonstracao.addEventListener("click",()=>{
            projeto.innerHTML =`<div class="card-header">
            Projeto ${projetoClicado.id + 1}
        </div>
        <div class="card-body">
            <h5 class="card-title">${projetoClicado.titulo}</h5>
            <video src="${projetoClicado.video}" controls class="d-block mb-3 video" ></video>
            <button href="#" class="btn btn-primary btn-descricao" type="button">Descrição</button>
            <button href="#" class="btn btn-warning btn-tecnologias" type="button">Tecnologias Utilizadas</button>
            <button href="#" class="btn btn-info d-none btn-demonstracao" type="button">Demonstração do projeto</button>
            <a href="#" class="btn btn-success" target="_blank">Acessar Projeto</a>
        </div>
        </div>
            `
        }


        )
    })
}

criaProjetos()
const html_projeto = document.querySelectorAll("div[data-projeto]")
alteraCardProjeto()
projetos.addEventListener('click',alteraCardProjeto) 





