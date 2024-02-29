/* ENCAPSULAMENTO 

    Conforme o proprio nome sugere, a proposta é ISOLAR o máximo possível os atributos e métodos de uma classe
    de forma a esconder detalhes de funcionamento interno

    - Como aplicar? 
    Utilizando os modificadores de acesso. São eles:

    1-  public    (+)  => visível e modificável de qualquer parte da nossa aplicação (é o padrão, aplicado quando não definimos o modificador)
    2 - private   (-)  => vísivel e acessível apenas dentro da própria classe (recomendado ser a primeira opção sempre)
    3 - protected (#)  => visível e acessível apenas dentro da própria classe ou de classes derivadas (aprofundaremos no próximo pilar da POO)



    - Sendo PRIVADOS os atributos de uma classe, como faço para acessar os valores dos atributos na execução do software?
    Utilizando os métodos de acesso. Tem como única funcionalidade prover ACESSO/LEITURA aos atributo privados, os quais julgamos que DEVEM ser acessados por outras classes ou partes do nosso software.
    São chamados de GETTERS.

    GETTER'S - caracteristicas
    1 - Retornam o tipo do atributo que será provido o acesso;
    2 - Não recebe parâmetro;
    3 - Seu nome é composto pelo prefixo "get" seguido do nome do atributo a qual estará sendo provido o acesso;



    - Sendo PRIVADOS os atributos de uma classe, como faço para MODIFICAR os valores dos atributos na execução do software?
    Utilizando os métodos modificadores. Tem como única funcionalidade prover MODIFICAÇÃO aos atributos privados, os quais julgamos que PODEM ser modificados por outras classes ou partes do nosso software.
    São chamados de SETTERS.

    SETTER'S - caracteristicas
    1 - Não possuem retorno;
    2 - Recebe por parâmetro o valor a ser inputado no atributo;
    3 - Seu nome é composto pelo prefixo "set" seguido do nome do atributo que iremos possibilitar a modificação;



    💡 O MOTIVO:
    Através dos métodos acessores (GETTERS) podemos CONTROLAR como a informação será retornada e através dos métodos modificadores (SETTERS) podemos CONTROLAR que tipo de dado será aceito para modificação e validar alguma outra possível regra para efetivar essa modificação.

*/




