import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  template: `
      <h1>Desafio</h1>
    <ul>    
    <li>1. Gerar um componente de nome "solidbinary" e coloca-lo na pasta <b>"views"</b></li>
    <li>2. O componente deve ser composto por 3 ficheiros (ts) (html) (css) </li>
    <li>3. Adicionar ao componente um titulo "Entrevista SolidBinary" centrado horizontalmente de cor preta e fundo: #255255255; </li>
    <li>4. Usar o seguinte endereço "https://jsonplaceholder.typicode.com/users" para carregar uma lista de utilizadores em formato jsonplaceholder</li>
    <li>5. Adicionar ao componente a lista de todos os utlizadores presentes no JSON imprimindo o nome, o email e o username do utilizador.
    <li>5. Criar o routing "/entrevista" para o componente </li>
    <li>6. Adicionar hiperligação "Entrevista" a seguir ao <b>"Home"</b> no topo da página</li>
    </ul>
  `,
})
export class HomeViewComponent {
  users;


}
