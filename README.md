<h1>Chat Multiusuário TCP</h1>
<p>Este projeto consiste na construção de um chat multiusuário que realiza a troca de mensagens entre 2 ou mais usuários por meio da rede utilizando o protocolo TCP.</p>

<h2>Funcionalidades</h2>
<h3>Interface Gráfica</h3>

<ul>
  <li>Poderá ser utilizada qualquer linguagem de programação que dê suporte a interfaces gráficas e sockets TCP. Aconselha-se a utilização da linguagem Java (Swing, AWT).</li>
</ul>
<h3>Módulo Servidor</h3>
<ul>
  <li>O usuário deverá inserir a porta na qual o servidor será executado;</li>
  <li>O servidor é o responsável por receber as conexões dos novos usuários e adicioná-los ao chat;</li>
  <li>O servidor é o responsável por receber as mensagens dos usuários do chat e enviá-las aos demais;</li>
  <li>Caso algum usuário desconecte do chat, o servidor deverá enviar uma mensagem informando o ocorrido aos outros usuários, bem como o horário de desconexão.</li>
</ul>
<h3>Módulo Cliente</h3>
<ul>
  <li>O usuário deverá inserir as informações do servidor (porta e endereço IP) e nome de usuário para realização do login;</li>
  <li>Após a realização do login, o usuário deverá se conectar ao chat para receber e enviar mensagens;</li>
  <li>Deverá ser exibido na tela do chat as informações dos usuários que realizaram login, bem como as mensagens enviadas e recebidas e seus respectivos horários;</li>
  <li>Quando um usuário se desconectar do chat, os demais usuários conectados deverão ser avisados.</li>
</ul>
