import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }
  
  render() {
    return(
      <form onChange={this.handleSubmit}>
        Welcome to BenchBnB!
        <br/>
        {this.props.formType} or {this.props.navLink}
        {this.renderErrors()}

        <div>
          <label>Username: 
            <input type="text" value={this.state.username} onChange={this.update("username")}></input>
          </label>
          <label>Password: 
            <input type="password" value={this.state.password} onChange={this.update("password")}></input>
          </label>
          <input type="submit" value={this.props.formType}/>
        </div>
      </form>
    );
  }
}

export default SessionForm;