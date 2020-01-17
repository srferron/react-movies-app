import React,{Component} from 'react';
import * as GLOBAL from '../global/Constants';

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
        fetch(`${GLOBAL.BASE_URI_OMDB}?apikey=${GLOBAL.API_KEY}&s=${this.state.inputMovie}`)
            .then(res=>res.json())
            .then(results =>{
                //Desetruturación. Del resultado devuelto en esta promesa, obtiene el parametro Search y en caso de ser undefined, lo inicializa a []
                const {Search=[]}=results
                console.log(results);
                this.props.onMoviesResults(Search);
            } )
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