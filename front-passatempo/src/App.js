import React, {Component} from 'react';
import {TabMenu} from 'primereact/tabmenu';
import 'primereact/resources/themes/luna-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './pages/App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';



class App extends Component {
    state = {
        items: [
            {label: 'Ator', command:() => this.props.history.push('/')},
            {label: 'Título', command:() => this.props.history.push('/titulo')},
            {label: 'Classe', command:() => this.props.history.push('/classe')},
            {label: 'Item', command:() => this.props.history.push('/item')},
            {label: 'Diretor', command:() => this.props.history.push('/diretor')},
            {label: 'Cliente', command:() => this.props.history.push('/cliente')},
            {label: 'Locações', command:() => this.props.history.push('/locacao')},
        ],
        tela: '',
    } 

    render() {
        return (
            <div className="home">
            <header className="header">
              <h1 className="title">PASSATEMPO</h1>
              <div className="seach">
                <Form.Control bsPrefix="input" placeholder="PESQUISAR TÍTULOS"/>
                <Button bsPrefix="button-seach">PESQUISAR</Button>
              </div>
            </header>
              <div className="content-section implementation">
                  <TabMenu  model={this.state.items}/>
              </div>
              <div id="main">
                <main>
                  <div className="content" id="content">
                    {this.props.children}
                  </div>
                </main>
              </div>        
            </div>
        );
    }
}

export default withRouter(App);
