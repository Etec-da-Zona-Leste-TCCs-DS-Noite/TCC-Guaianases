import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "./firebase.config";
import { Router } from '@angular/router';

const auth = getAuth(app);

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  email: string = "";
  senha: string = "";

  constructor(private router: Router) {}

  // Login de usuário
  login() {

    signInWithEmailAndPassword(auth, this.email, this.senha)
      .then(() => {
        alert("Logado com sucesso!");
        this.router.navigate(['/menu']);
      })
      .catch((error) => {
        alert("Erro ao logar: " + error.message);
      });

  }

  // Cadastro de usuário
  cadastrar() {

    createUserWithEmailAndPassword(auth, this.email, this.senha)
      .then(() => {
        alert("Usuário criado com sucesso!");
        this.router.navigate(['/menu']);
      })
      .catch((error) => {
        alert("Erro ao cadastrar: " + error.message);
      });

  }

}