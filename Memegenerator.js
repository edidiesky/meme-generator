import React from 'react'

class Memegenerator extends React.Component {
	constructor() {
		super()
		this.state = {
			toptext: '',
			bottomtext: '',
			randomimage: "https://i.imgflip.com/265k.jpg",
			allMemesimg: []
		}
		this.handleform = this.handleform.bind(this)
		this.handlesubmit = this.handlesubmit.bind(this)
	}

	componentDidMount() {
	 fetch('https://api.imgflip.com/get_memes')
	     .then(response => response.json())
	     .then(response => {
	     	const {memes} = response.data
	     	console.log(memes)
	     	
	     	this.setState({
	     		allMemesimg: memes
	     	})

	     })
	}

	handleform(event) {
		const{name,value} = event.target
		this.setState({
			[name] : value
		})
	}
     
    handlesubmit(event) {
    	event.preventDefault()
    	const randomnum = Math.floor(Math.random() * this.state.allMemesimg.length)// In this section i created a random value of the array allmemes
    	const randommemes = this.state.allMemesimg[randomnum].url
    	this.setState({
    		randomimage:randommemes // this section i am trying to change the state of the stated url image so that it produces the random urli requested for
    	})

    }

	render() {
		return(
			<div className = 'Memegenerator'>
			   <form onSubmit = {this.handlesubmit}>
			     <button>Gen</button>
			     <input
			     name = 'toptext'
			     type = 'text'
			     value = {this.state.toptext}
			     placeholder = 'Toptext'
			     onChange = {this.handleform}
			     />
			     <input
			     name = 'bottomtext'
			     type = 'text'
			     value = {this.state.bottomtext}
			     placeholder = 'Bottomtext'
			     onChange = {this.handleform}
			     />
			   </form>

			   <div className = 'resultsection'>
			       <img 
			         src = {this.state.randomimage}
			         alt = ''			   
			       />
			       <h1 className = 'toptext'>{this.state.toptext}</h1>
			       <h1 className = 'bottomtext'>{this.state.bottomtext}</h1>
			   </div>
			</div>
			)
	}
}

export default Memegenerator
