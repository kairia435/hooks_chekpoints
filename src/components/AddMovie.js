

import React, {useState} from 'react';
import { Modal, Button,Container,Row } from 'react-bootstrap';
import {InputGroup as Input }  from 'react-bootstrap'  

function Example(props) {
    const [modalState, setModalState]= useState(false)
    const [modtitle, setModtitle] = useState('');
    const [moddescription, setModdescription] = useState('');
    const [modposter, setModposter] = useState('');
    const [modrate, setModrate] = useState('');
    const button = {
        borderRadius : 100,
        height : 80,
        width : 80
        
      }
      let addMovie=props.addmovie
  
    

    
    return (
            <>
            
            <Container fluid><Row>
            //
            <div style ={{padding : 100}}>
           <Button style = {button} variant = 'dark' onClick = {()=>setModalState(true)
        }>New Movie</Button> 
           </div>
           </Row>
           </Container>
           <Modal isOpen={modalState}>
             <div style ={{margin : 70}}>
             <Input placeholder="Movie Title" onChange={(e)=> setModtitle(e.target.value)}></Input><br/>
             <Input placeholder="Movie Description" onChange={(e)=> setModdescription(e.target.value)}></Input><br/>
             <Input placeholder="Poster URL" onChange={(e)=> setModposter(e.target.value)}></Input><br/>
             <Input placeholder="Rate" onChange={(e)=> setModrate(e.target.value)}></Input><br/>
             <Button variant ='dark' onClick = {addMovie({modalState,modtitle,moddescription,modposter,modrate})}>Submit</Button>
             </div>
             </Modal>  
           
          
            </> 
    );
  }
  
  export default Example ;