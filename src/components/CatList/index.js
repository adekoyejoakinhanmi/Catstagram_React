import React, { Component } from "react";
import CatViewer from "../CatViewer/index";

export default class CatList extends Component {
  constructor (props) {
    super()
    this.state = {
      catList: [
        {name: 'TmLeview', clickCount: 0, hobbies: 'Playing, eating, sleeping', id: 2323, url: `https://res.cloudinary.com/sometimes-creative/image/upload/v1500503536/cat_clicker/cat_1.jpg`},
        {name: 'Fundbie', clickCount: 0, hobbies: 'sleeping', id: 2324, url: `https://res.cloudinary.com/sometimes-creative/image/upload/v1500503536/cat_clicker/cat_2.jpg`},
        {name: 'Marx', clickCount: 35, hobbies: '', id: 2325, url: `https://res.cloudinary.com/sometimes-creative/image/upload/v1500503536/cat_clicker/cat_3.jpg`}
      ]
    }
  }
  
  incrementClickCount (id) {
    let catList = [ ...this.state.catList ];
    let _catPos = catList.map(c => c.id).indexOf(id);
    
    let cat = catList[_catPos];
    cat.clickCount += 1
    
    catList.splice(_catPos, 1, cat)

    this.setState(() => ({ catList  }));
  }

  renderCatView(cat) {
    return <CatViewer key={cat.id} catDetails={cat} onClick={() => this.incrementClickCount(cat.id) }/>
  }

  render() {
    return (<div>
      {
        this.state.catList.map((cat) => 
          this.renderCatView(cat)
        )
      }
    </div>)
  }
}