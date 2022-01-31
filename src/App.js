import './App.css';
import {useState} from 'react';
import { CeramicClient } from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { ThreeIdConnect,  EthereumAuthProvider } from '@3id/connect'
import {DID} from 'dids'
import {IDX} from '@ceramicstudio/idx'


const endpoint = "https://ceramic-clay.3boxlabs.com"


function App() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [loaded, setLoaded] = useState(false)

  async function connect() {
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    console.log(addresses)
    return addresses
  }
  async function readProfile() {
    const [addresses]=await connect()
    
  }

  return (
    <div className="App">

<button onClick={connect}>connect</button>

    </div>
  );
}

export default App;
