import React, { Component } from 'react'

import './metronome.css'
import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';


class Metronome extends Component {

    constructor(props){
        super(props);
        this.state={
            playing:false,
            count:0,
            bpm:100,
            beatsPerMeasure:4
        }

    // Load up audio files and we'll play them later.
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
 
    }

    startStop =()=>{
        if(this.state.playing){
            clearInterval(this.timer);
            this.setState({
                playing:false
            })
        } else {
            //start timer with current bpm
           this.timer =setInterval(
               this.playClick,
               (50/this.startStop.bpm) *1000
           )
           this.setState(
               {
                   count: 0,
                   playing: true
                   //then play a click immediately
               },
               this.playClick
           )
        }
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;
      
        // The first beat will have a different sound than the others
        if (count % beatsPerMeasure === 0) {
          this.click2.play();
        } else {
          this.click1.play();
        }
      
        // Keep track of which beat we're on
        this.setState(state => ({
          count: (state.count + 1) % state.beatsPerMeasure
        }));
      };
      



      handleBPMChange = event =>{
          const bpm = event.target.value;

          if (this.state.playing){
              clearInterval(this.timer)
              this.timer = setInterval(this.play,(60/bpm) *1000)

              this.setState({
                  count: 0,
                  bpm
              })
          } else {
              this.setState({bpm})
          }
      }


  render() {

    const bpm = this.state.bpm
    const playing =this.state.playing
    //or do in Es6 way below
    // const {bpm,playing} = this.state



    return(



        <div clasName="metronome">
            <div className="bpm-slider">
               <div> {bpm} BPM</div>
               <input 
                    type="range" 
                    min="50" 
                    max="240" 
                    value={bpm}
                    onChange={this.handleBPMChange} />
            </div>
            <button onClick={this.startStop}> {playing ? 'stop' : 'start' } </button>
        </div>
    );

    
  }
}

export default Metronome;
