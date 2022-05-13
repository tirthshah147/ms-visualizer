import React, { Component } from 'react';


// Algorithms
import MergeSort from './algorithms/MS';

//Codes
// import BSCode from './codes/BSCode';


// Icons
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded';
import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';


//CSS
import './App.css';


import Node from './components/Node';
import MergeDisplay from './components/MergeDisplay';
import MSCode from './codes/MSCode';
import ParamBox from './components/ParamBox';





class App extends Component {
	state = {
		array: [],
		currentStep: 2,
		treeSteps: [],
		currentTree:{},

		mergeStepsState:[],
		mergeColorStepsState:[],
		currentMergeStep:null,
		currentMergeColorStep:null,

		mergeCodeColorKey:null,
		mergeCodeColorSteps:[],

		leftIndexes:[],
		rightIndexes:[],

		leftIndex:null,
		rightIndex:null,

		count: 5,
		delay: 500,
		algorithm: 'Merge Sort',
		timeouts: []
	};

	ALGORITHMS = {
		'Merge Sort': MergeSort,
	};

	componentDidMount() {
		console.log('Inside component did mount')
		this.generateRandomArray();
	}

	generateSteps = () => {
		console.log(this.state.colorSteps);
		let array = this.state.array.slice();

		const {steps,mergeSteps,mergeColorSteps,mergeCodeColorSteps, rightIndexes, leftIndexes} = this.ALGORITHMS[this.state.algorithm](array);
		console.log(leftIndexes,rightIndexes);

		console.log(mergeSteps);

		this.setState({
			treeSteps: steps,
			currentTree:steps[1],
			mergeStepsState: mergeSteps,
			mergeColorStepsState: mergeColorSteps,
			currentMergeStep:mergeSteps[1],
			currentMergeColorStep:mergeColorSteps[1],
			mergeCodeColorSteps:mergeCodeColorSteps,
			mergeCodeColorKey:mergeCodeColorSteps[1],
			rightIndexes: rightIndexes,
			rightIndex: rightIndexes[1],
			leftIndexes: leftIndexes,
			leftIndex: leftIndexes[1]
		});
	};

	clearTimeouts = () => {
		this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({
			timeouts: [],
		});
	};


	generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	generateRandomArray = () => {
		this.clearTimeouts();
		const count = this.state.count;
		const temp = [];

		for (let i = 0; i < count; i++) {
			temp.push(this.generateRandomNumber(1, 10));
		}

		this.setState(
			{
				array: temp,
				arraySteps: [temp],
			},
			() => {
				console.log('generating steps');
				this.generateSteps();
			}
		);
	};

	changeArray = (index, value) => {
		let arr = this.state.array;
		arr[index] = value;
		this.setState(
			{
				array: arr,
				treeSteps: [arr],
				currentStep: 0,
			},
			() => {
				this.generateSteps();
			}
		);
	};

	previousStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep === 0) return;
		currentStep -= 1;
		this.setState({
			currentStep: currentStep,
			currentTree: this.state.treeSteps[currentStep],
			currentMergeColorStep: this.state.mergeColorStepsState[currentStep],
			currentMergeStep: this.state.mergeStepsState[currentStep],
			mergeCodeColorKey: this.state.mergeCodeColorSteps[currentStep],
			leftIndex: this.state.leftIndexes[currentStep],
			rightIndex: this.state.rightIndexes[currentStep],

		});
	};

	nextStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep >= this.state.treeSteps.length - 1) return;
		currentStep += 1;
		this.setState({
			currentStep: currentStep,
			currentTree: this.state.treeSteps[currentStep],
			currentMergeColorStep: this.state.mergeColorStepsState[currentStep],
			currentMergeStep: this.state.mergeStepsState[currentStep],
			mergeCodeColorKey: this.state.mergeCodeColorSteps[currentStep],
			leftIndex: this.state.leftIndexes[currentStep],
			rightIndex: this.state.rightIndexes[currentStep],
		});
	};

	start = () => {
		let steps = this.state.treeSteps;

		this.clearTimeouts();

		let timeouts = [];
		let i = 0;

		while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					currentTree: steps[currentStep],
					currentStep: currentStep + 1,
				});
				timeouts.push(timeout);
			}, this.state.delay * i);
			i++;
		}

		this.setState({
			timeouts: timeouts,
		});
	};

	render() {
	
		let playButton;

		if (this.state.treeSteps.length === this.state.currentStep) {
			playButton = (
				<button className='controller' onClick={this.generateRandomArray}>
					<RotateLeft />
				</button>
			);
		} else {
			playButton = (
				<button className='controller' onClick={this.start}>
					<Play />
				</button>
			);
		}

		return (
			<div className=''>
				<div className="row">
					<div className="tree">
						<Node tree={this.state.currentTree}/>
					</div>
					<div className="mergeSection">
						<div className="mergeVisuals">
							{this.state.currentMergeStep && 
								(<>

									<MergeDisplay 
									currentStep={this.state.currentMergeStep}
									currentColorStep={this.state.currentMergeColorStep}/>	

									<div className="paramStats">
										<ParamBox title="leftIndex" value={this.state.leftIndex}/>
										<ParamBox title="rightIndex" value={this.state.rightIndex}/>
									</div>
								
								</>)
							
							}

						</div>
						<div className="mergeCode">
							{this.state.mergeCodeColorKey && <MSCode mergeCodeColorKey={this.state.mergeCodeColorKey}/>}
							
						</div>
					</div>
				</div>
				
				<div className='control-pannel'>
					<div className='control-buttons'>
						<button className='controller' onClick={this.previousStep}>
							<Backward />
						</button>
						{playButton}
						<button className='controller' onClick={this.nextStep}>
							<Forward />
						</button>
					</div>
				</div>

			</div>
		);

			
			
	}
}

export default App;
