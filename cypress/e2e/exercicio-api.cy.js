/// <reference types="cypress" />
import cadastro from "../contracts/produtos.contract";

let token;
beforeEach(() => {
  cy.token("fulano@qa.com", "teste").then((tkn) => {
    token = tkn;
  });
});

describe("Testes da Funcionalidade Usuários", () => {
  it("Deve validar contrato de usuários", () => {
   
  });

  it("Deve listar usuários cadastrados", () => {
    //TODO:
  });

  it("Deve cadastrar um usuário com sucesso", () => {
    //TODO:
  });

  it("Deve validar um usuário com email inválido", () => {
    //TODO:
  });

  it("Deve editar um usuário previamente cadastrado", () => {
    //TODO:
  });

  it("Deve deletar um usuário previamente cadastrado", () => {
    //TODO:
  });
});
