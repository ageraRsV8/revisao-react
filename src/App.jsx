import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

<main>
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='Insira seu email' />
        </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id='senha' placeholder='Insira sua senha'/>
        </div>
    </form>
  </main>
    </>
  )
}

export default App
