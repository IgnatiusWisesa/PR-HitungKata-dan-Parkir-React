import React, {Component} from 'react'

class Hitungkata extends Component{

    state = {
        Kata : [],
        Jumlah : []
    }

    hitung = (e) =>{
        const value = e.target.value

        this.setState({
            Kata : value
        })
    }

    pisah = () =>{
        const Kata = []
        const katakata = this.state.Kata.split(' ')

        console.log(katakata)

        for(var i=0;i<katakata.length;i++){
            if(katakata[i]!==''){
                Kata.push(katakata[i])
            }
        }
        this.setState({
            Jumlah : Kata.length
        })

        document.getElementById('masuk').value = ''
    }

    render(){
        return(
            <div class="row">
                <h3 className="center container">Text Area</h3>
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea id="masuk" onChange={this.hitung} class="materialize-textarea" placeholder="Masukkan Kalimat"></textarea>
                    </div>
                </div>
                </form>
                <div className="submit center">
                    <button onClick={this.pisah} class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
                <h2 className="center container">{this.state.Jumlah} Kata</h2>
            </div>
        )
    }
}

export default Hitungkata