import React, { Component } from 'react'

class Parkir extends Component {
    state = { 
        pilih: ['Mobil','Motor'],
        pilihan: [],
        lamaParkir:[]
     }

     pilihan = (e) =>{
        const buttonValue = e.target.id
        // console.log(buttonValue)
        this.setState({
            pilihan : buttonValue
        })
        // console.log(this.state.pilihan)
    }
    
    lamaParkir =(e)=>{
        this.setState({
            lamaParkir : e.target.value
        })
    }

    hitung = () => {
        const lamaParkir = this.state.lamaParkir

        const catatan = []
        const biaya = []
        if(this.state.pilihan==='Mobil'){
            catatan.push('Mobil Rp.2000,00 per Jam')
            biaya.push(lamaParkir*2000)
        }
        else{
            catatan.push('Motor Rp.1000,00 per Jam')
            biaya.push(lamaParkir*1000)
        }

        // document.getElementById('lamaParkir').value=''

        return(
            <div>
                <div className="center container">
                    <div className="post card">
                        <div className="content">
                            {catatan}
                            <br></br>
                            <span className="post-title">Anda parkir selama {lamaParkir} jam</span>
                            <br></br>
                            <span className="post-title">Biaya Parkir Anda Rp.{biaya},00</span>
                        </div>
                    </div>
                </div>
            </div>
        )
     }

     olah = () =>{
         
     }

    render() { 
        return ( 
            <div>
                <h1 className="container center">Aplikasi Parkir {this.state.pilihan}</h1>
                <center>
                    <a onClick={this.pilihan} id={this.state.pilih[0]} class="waves-effect waves-light btn">{this.state.pilih[0]}</a>
                    &nbsp;&nbsp;
                    <a onClick={this.pilihan} id={this.state.pilih[1]} class="waves-effect waves-light btn">{this.state.pilih[1]}</a>
                    <br></br><br></br>

                    <div className="container inline">
                        <div class="input-field col s12 m6">
                            <input onChange={this.lamaParkir} placeholder="Lama Parkir" id="lamaParkir" type="number" class="validate" />Jam
                            <br></br>
                            <div className="submit">
                                <button onClick={this.hitung} class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                            </div>
                        </div>
                    </div>
                </center>
                <br></br>
                <this.hitung />
            </div>
         );
    }
}
 
export default Parkir;