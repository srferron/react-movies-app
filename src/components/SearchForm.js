import React,{Component} from 'react';

class SearchForm extends Component {

    
    constructor(props) {
        super(props);
        this.inputTitle = props.inputTitle;
        this.buttonTitle = props.buttonTitle;
    }

    state = {
        inputMovie:''
    }

    handleChange = (e) => {
       this.setState({
        inputMovie:e.target.value
       });
    }

    handleSubmit = e => {
        //Evita el envio del formulario (comportamiento por defecto)
        e.preventDefault();
        alert(this.state.inputMovie);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="text" placeholder={this.inputTitle}/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        {this.buttonTitle}
                        </button>
                    </div>
                </div>
            </form>
        )};
}
export default SearchForm;