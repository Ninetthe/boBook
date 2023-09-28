import axios from 'axios'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import iconEdit from "../../assets/images/iconEdit.svg";
import iconDelete from "../../assets/images/iconDelete.svg"
import iconEye from "../../assets/images/iconEye.svg";
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'



const url=  "http://127.0.0.1:8000/api/booklists/";
class CrudBooklists extends React.Component  {
  state={
    data:[],
    modalInsert: false,
    modalDelete: false,
    form:{
      list_name:'',
      //For update booklist
      typeModal: '',

    }
  }


  //GET PETICION
  requestGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data})
    }).catch(error=>{
      console.log(error.message);
    })
  }

  //POST PETICION
  requestPost=async()=>{
  
    await axios.post(url,this.state.form).then(respose=>{
      this.modalInsert();
      this.requestGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  //REQUEST PUT
  requestPut=()=>{
    axios.put(url + this.state.form.id, this.state.form)
    .then(response=>{
      this.modalInsert();
      this.requestGet();
    })
  }

  //modal new list
  modalInsert=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  //Update
  selectBooklist=(booklists)=>{
    this.setState({
      tipeModal: 'update',
      form: {
        id: booklists.id,
        list_name: booklists.list_name,
        user_id: 1,
      }
    })
  }

  //DELETE
  requestDelete=()=>{
    axios.delete(url+this.state.form.id)
    .then(response=>{
      this.setState({modalDelete: false});
      this.requestGet();
    })

  }

  //save input new list
  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        user_id: 1,
        [e.target.name]: e.target.value 
      }
    });
    console.log(this.state.form)

  }
  
  componentDidMount(){
    this.requestGet();
  }
 
 
  render(){  
    const {form}=this.state;
  return (
    <div className='containerBooklist'>
      <button className='bttnGreen' onClick={()=>{this.setState({form: null, typeModal: 'insert' }); this.modalInsert()}}>Add new Book List</button>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name List</th>
      <th scope="col">View</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(booklists=>{
      return(
      <tr >
        
      <td>{booklists.list_name}</td>
      <td><button ><img src={iconEye} alt="" /></button>
      </td>
      <td>
        <button onClick={()=>{this.selectBooklist(booklists); this.modalInsert()}}><img src={iconEdit}alt="" /></button>
        </td>
        <td>

      <button onClick={()=>{this.selectBooklist(booklists); this.setState({modalDelete: true})}}><img src={iconDelete}alt="" /></button>
        </td>
    </tr>
  )
      })}
  
  </tbody>
</table>


<Modal isOpen={this.state.modalInsert} >
      <ModalHeader style={{display: 'block'}}>
        <span style={{float: 'right'}}>x</span>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
        
          <label name="list_namte" htmlFor="name" >Name List</label><br />
          <input value={form? form.list_name: ''} onChange={this.handleChange}  className="form-control" type="text" name="list_name" id="name" placeholder='Write name new list' />

        </div>

      </ModalBody>


      <ModalFooter>
        {this.state.typeModal== 'insert'? 
        <button onClick={()=>this.requestPost()} className='btn btn-success'>Insert</button>:
        <button onClick={()=>this.requestPut()} className='btn btn-success'>Update</button>}

        <button className='btn btn-danger' onClick={()=>this.modalInsert()}>Cancel</button>

      </ModalFooter>


</Modal>  


<Modal isOpen={this.state.modalDelete}>
      <ModalBody>
      Are you sure you want to delete this list? {form && form.list_name}
      </ModalBody>
      <ModalFooter>
      <button className='btn btn-danger' onClick={()=>this.requestDelete()}>Yes</button>
      <button className='btn btn-secundary' onClick={()=>this.setState({modalDelete: false})}>No</button>
      </ModalFooter>

</Modal>

</div>

  )
  }
}

export default CrudBooklists