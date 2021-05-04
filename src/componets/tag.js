{this.renderTags()}

<span className = "{this.getBadgeClasses()}" >{this.formatCount()} </span>
selected={true}

handleIncrement = () =>{
    this.setState({ value: this.state.value + 1 })
  }
  this.state = {
    value : this.props.counter.value
  };
  constructor(props) {
    super(props);
    
  }


  handleIncrement = () =>{
    this.setState({ value: this.state.value + 1 })
  }
  