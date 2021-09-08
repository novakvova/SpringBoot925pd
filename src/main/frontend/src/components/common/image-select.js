import React, { Component } from 'react'

class ImageSelect extends Component {
    
    state = {
        files: [], //список файлів, які ми обираємо
    }
    inputFileRef = React.createRef(); //Посилання на файл, який ми обрали

    fileOnChange = i => e => {            //Якщо ми обрали файл
        let files = [...this.state.files];
        files[i]= { image: URL.createObjectURL(e.target.files[0]) };
        this.setState({
            files
        });
        console.log(e.target.files[0].name);
    }
  
    handleDelete = i => e => {   //Видалити блок із файлом
      e.preventDefault()
      let files = [
        ...this.state.files.slice(0, i),
        ...this.state.files.slice(i + 1)
      ]
      this.setState({
        files
      })
    }
  
    addFile = e => {
      e.preventDefault()
      let files = this.state.files.concat([{
        image: ""
      }]);
      console.log("------", files);
      this.setState({
        files
      }, () => {
          this.inputFileRef.current.click();
      });
    }
    

    render() {
        return (
            <div className="row">
                <div className="col-md-2" onClick={this.addFile}>
                    <img src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-5/64/__image_plus_add-512.png"
                         width="100%" alt="Пошук фото"
                         style={{cursor: "pointer"}}
                         id="btnAddImage"/>
                </div>

                {this.state.files.map((question, index) => (
                    <div className="col-md-4" key={index}>
                        <input
                            type="file"
                            style={{display:"none"}}
                            ref={this.inputFileRef}
                            name='images'
                            onChange={this.fileOnChange(index) }
                        />
                        {!!this.state.files[index].image &&
                            <>
                                <button onClick={this.handleDelete(index)}>X</button>
                                <img src={this.state.files[index].image} width="100%" />
                            </>
                        }
                        
                    </div>
                ))}
            </div>
        );
    }
}
export default ImageSelect;




// class ListOffiles extends Component {
//     state = {
//       files: ['hello']
//     }
  
  
//     render() {
//       return (
//         <Fragment>
//  
//         </Fragment>
//       )
//     }
//   }