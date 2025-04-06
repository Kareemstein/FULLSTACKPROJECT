import ReactDOM from 'react-dom/client';
class Car extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
      return (<h2>{'number:${this.props.carData.id}, model:${this.props.carData.model}'}</h2>);
    }
  }

  export default Car;