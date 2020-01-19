import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">

      <aside>

        <strong>Cadastrar</strong>

        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>


        </form>

      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/32375670?s=460&v=4" alt="Junior Duarte" />
              <div className="user-info">
                <strong>Junior Duarte</strong>
                <span>ReactJs, ReactNative, Java</span>
              </div>
            </header>
            <p>
            i love programming!
            </p>

            <a href ="https://github.com/JuniorDuarte93">Acessar perfil no github</a>
          
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/32375670?s=460&v=4" alt="Junior Duarte" />
              <div className="user-info">
                <strong>Junior Duarte</strong>
                <span>ReactJs, ReactNative, Java</span>
              </div>
            </header>
            <p>
            i love programming!
            </p>

            <a href ="https://github.com/JuniorDuarte93">Acessar perfil no github</a>
          
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/32375670?s=460&v=4" alt="Junior Duarte" />
              <div className="user-info">
                <strong>Junior Duarte</strong>
                <span>ReactJs, ReactNative, Java</span>
              </div>
            </header>
            <p>
            i love programming!
            </p>

            <a href ="https://github.com/JuniorDuarte93">Acessar perfil no github</a>
          
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/32375670?s=460&v=4" alt="Junior Duarte" />
              <div className="user-info">
                <strong>Junior Duarte</strong>
                <span>ReactJs, ReactNative, Java</span>
              </div>
            </header>
            <p>
            i love programming!
            </p>

            <a href ="https://github.com/JuniorDuarte93">Acessar perfil no github</a>
          
          </li>
        </ul>

      </main>

    </div>
  );
}

export default App;
