import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

/* const awall
const element =<h1>helloo awal</h1>;
ReactDOM.render(element, document.getElementById('root'));
*/

//const dengan fungsi
/*function getMahasiswa(mahasiswa){
    return 'Nama    : '+mahasiswa.nama+ " NIM   : "+ mahasiswa.nim;

}
const mahasiswi = {    nama  : 'rona saputra',
    nim : '12346',
    angkatan : 2017
};
//const element =( <h1>hello,{getMahasiswa(mahasiswi)}</h1>);
//ReactDOM.render(element,document.getElementById('root')); tanpa status

function getStatus(mahasiswa){
    if (mahasiswa.angkatan>2017){
        return '  masih maba';
    }else 
    return 'bukan maba'
}
const element = <h1>hallo {getMahasiswa(mahasiswi)},anda yang memiliki status {getStatus(mahasiswi)}  </h1>
ReactDOM.render(element,document.getElementById('root'));//menggunakan status
*/
//untuk function waktu
/*function tick(){
    const element = (
        <div> 
        <h1>hello rona</h1>
        <h2> it is {new Date().toLocaleTimeString()}</h2>
        </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
       
    }
    setInterval(tick, 1000);
    */
   /*component
function Product(props){
    return (<div><h1>{props.judul}</h1><h3>Harga: {props.harga}</h3></div>
    );
}
const element = <Product judul = " koleksi action figure "
harga= "100.000"/>

ReactDOM.render(element,document.getElementById('root'));
*/
//class componen
/*class Product extends React.Component{
    render(){
        return (<div><h1>{this.props.judul}</h1><h3>harga : {this.props.harga}</h3></div>);
    }

}*/
const element = <Product judul= "koleksi menggunakan class componen" harga = "100000 menggunkan class component"/>
ReactDOM.render(element,document.getElementById('root'));

/*
const element = <Product judul= "koleksi menggunakan class componen" harga = "100000 menggunkan class component dengan file product .js"/>
ReactDOM.render(element,document.getElementById('root'));
*/
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
