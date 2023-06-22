# 2023.1.PDWA5
Repositório modelo para o projeto da disciplina de 2023.1 - PDWA5 - do IFSP

Aluno Gabriel Bertholin  <g.bertholin@aluno.ifsp.edu.br>  \
Prof. Quirino         <luiz.quirino@ifsp.edu.br>

## Descrição das etapas implementadas :
Etapa 1 - Preparação: Foram verificados os pré-requisitos para o curso e iniciada a criação do projeto usando o create-react-app.
Etapa 2 - Exploração do projeto React: Foi realizada uma exploração da estrutura de um projeto React.
Etapa 3 - Criação de componentes: Foi criado o primeiro componente e introduzido o conceito de JSX. O projeto também foi organizado.
Etapa 4 - Adição de tarefas: Foi implementada a funcionalidade para adicionar tarefas à lista.
Etapa 5 - Criação do componente Button: Foi criado um componente Button para ser usado na aplicação.
Etapa 6 - Conclusão e deleção de tarefas: Foram implementadas as funcionalidades para marcar uma tarefa como concluída e para deletar uma tarefa.
Etapa 7 - Adição de ícones e criação do componente Header: Foram adicionados ícones à aplicação e criado um componente Header.
Etapa 8 - Criação do componente Task Details: Foi criado um componente para exibir os detalhes de uma tarefa.
Etapa 9 - Parâmetros na URL e estilização do Task Details: Foi aprendido sobre como usar parâmetros na URL e o componente Task Details foi estilizado.
Etapa 10 - Chamada a uma API de tarefas: Foi realizada uma chamada a uma API para obter as tarefas e introduzido o conceito do useEffect.
Etapa 11 - Armazenamento das tarefas da API: As tarefas obtidas da API foram armazenadas.
Etapa 12 - Correção do componente Task e comparação de componentes funcionais e de classe: O componente Task foi corrigido e foi feita uma comparação entre componentes funcionais e de classe.
Etapa 13 - Criação de um componente de classe e entendimento de keys em listas: Foi criado um componente de classe e introduzido o conceito da importância das keys em listas no React.
Etapa 14 - Conclusão: O projeto foi concluído.

## Alterações realizadas frente ao modelo de referência apresentado:
.add-task-container:
  -margin foi alterado para padding: 20px 0 para adicionar espaço interno.
  -display foi alterado para grid-template-columns: 3fr 1fr para criar uma grade com duas colunas.
  -gap foi adicionado com o valor 10px para adicionar espaçamento entre as colunas.

.add-task-input:
  -border-radius foi alterado para 10px para tornar os cantos mais arredondados.
  -border foi alterado para 2px solid #888 para adicionar uma borda sólida com uma cor cinza.
  -background-color foi alterado para #fff para ter um fundo branco.
  -color foi alterado para #333 para ter uma cor de texto mais escura.
  -font-size foi alterado para 18px para aumentar o tamanho do texto.

.add-task-button-container:
  -margin-left foi alterado para 0 para remover a margem esquerda.
  -flex foi alterado para none para desabilitar a capacidade de crescimento flexível.

.button:
  -background-color foi alterado para #008080 para ter um fundo verde azulado.
  -height foi alterado para 50px para aumentar a altura do botão.
  -border-radius foi alterado para 10px para tornar os cantos mais arredondados.
  -color foi alterado para #fff para ter uma cor de texto branca.
  -font-weight foi alterado para normal para usar uma fonte não negritada.
  -border-color foi alterado para #008080 para ter uma borda correspondente à cor de fundo.
  -transition foi alterado para all 0.3s ease para suavizar a transição do botão.

.task-container:
  -background-color foi alterado para #fff para ter um fundo branco.
  -margin foi alterado para 10px 0 para adicionar um espaçamento vertical menor.
  -padding foi alterado para 20px 25px para aumentar o espaçamento interno.
  -color foi alterado para #333 para ter uma cor de texto mais escura.
