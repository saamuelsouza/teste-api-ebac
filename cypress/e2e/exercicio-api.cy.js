/// <reference types="cypress" />

describe('Testes da Funcionalidade Usuários', () => {
  let token
  before(() => {
      cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
  });
  

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response => {
      return contrato.validateAsync(response.body)
  })
  });

  it('Deve listar usuários cadastrados - GET', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
  }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('usuarios')
  }) 
  });

  it.only('Deve cadastrar um usuário com sucesso', () => {
    let usuario = `Usuario ${Math.floor(Math.random() * 100000000)}`
        cy.request({
            method: 'POST',
            url: 'usuario',
            body: {
              "nome": "Fulano da Silva 1",
              "email": "beltrano@qa.com.br",
              "password": "teste",
              "administrador": "true"
            },
            headers: { authorization: token }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        }) 
  });

  it('Deve validar um usuário com email inválido', () => {
    //TODO: 
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    //TODO: 
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    //TODO: 
  });


});
