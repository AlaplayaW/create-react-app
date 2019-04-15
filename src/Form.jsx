import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      title: 'titre',
      globalTitle: '',
    }
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  onChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({globalTitle: `Mon formulaire - ${this.state.title}` })
    console.log('Titre changé'); 
  }

  
  render() { 
    return ( 
      
      <div>
        <h1>{this.state.globalTitle}</h1>

        <form onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">Entre un titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
     );
  }
  componentWillMount() {
    console.log('Formulaire rendu');
  }
  componentWillUnmount() {
    console.log('Formulaire rendu');
  }
}


export default Form;