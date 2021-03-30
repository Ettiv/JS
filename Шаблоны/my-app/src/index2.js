import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      sec: 111
    }
    // this.nextYear = this.nextYear.bind(this); - первый спсоб

    this.nextYear = () => {
      this.setState(state => ({ //- второй способ(ниже тоже он - просто разбор)
        years: ++state.years
      }))

      // const fst = state => ({
      //   ...state,
      //   years: ++state.years
      // })

      // const st = fst(this.state);

      // this.setState(st);

      // nextYear = () => {          //-3(экспереминтальный способ(возможно уже не экспереминтальный))
      //   this.setState(state => ({
      //     years: ++state.years
      //   }))
      // }
    }
  }


    // nextYear(){
    //   console.log(1);
    //   //this.state.years ++; - НЕЛЬЗЯ
    //   this.setState(state => ({
    //     years: ++this.years
    //   }));
    // }

    render() {
      const { years } = this.state;
      return (
        <React.Fragment>
          {/* <></> */}
          {/* элемент менять нельзя,динамически работать с переменными нельзя */}
          <button onClick={this.nextYear}>++</button>
          <h1>
            My name is {this.props.name} , surname- {this.props.surname} , years = {+(years)}
          </h1>
          <a href="{this.props.link}">
            My peofile
        </a>
        </React.Fragment>
      );
    }
  }


// function WhoAmI(props) {
//     return(
//       <React.Fragment> 
//         {/* <></> */}
//         {/* элемент менять нельзя,динамически работать с переменными нельзя */}
//          <h1>
//             My name is {props.name} , surname- {props.surname}
//         </h1>
//         <a  href = "{props.link}">
//              My peofile
//         </a>
//       </React.Fragment>
//     );
// }

const All = () => {
  return (
    <>

      <WhoAmI name="afdsd" surname="dasda" link="asdad.com" />
      <WhoAmI name="a3333fdsd" surname="dasdsada" link="asdad.com" />
      <WhoAmI name="afd222sd" surname="dasadaadda" link="asdad.com" />
      <WhoAmI name="John" surname="Smith" link="dd.com" />
    </>
  );
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);