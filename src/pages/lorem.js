import React from 'react';
import Loader from '../components/loader';



class Lorem extends React.Component {
    state = {
        isLoading: false,
        data: []
      };
        
    async componentDidMount() {
        this.setState({isLoading:true})
        try {
            const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`);
            const json = await response.json();
            this.setState({data:json,isLoading:false})

        } catch (err){
            console.log(err.msg);
            this.setState({isLoading:false})
            throw err
        }
    }
    
    // componentDidMount() {

        
    //   fetch("https://baconipsum.com/api/?type=meat-and-filler")
    //     .then(res => res.json())
    //     .then(
    //       res => this.setState({lorem:res})
    //     )
    // }
  
    render() {
        const {isLoading,data} = this.state;
        return (
          <>
            <h1>Lorem</h1>
          {
            isLoading ?<Loader/> : <p>{data}</p>
          }
            

          </>
        );
      }
    }
  

export default Lorem