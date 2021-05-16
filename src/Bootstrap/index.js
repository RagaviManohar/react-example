import React, { useState, useRef, useEffect, useCallback } from 'react'

function Bootstrap() {
    
		const [initialArray, setInitialArray] = useState([
			[1,1,0,1,1,1],
			[1,1,0,0,1,1],
			[1,0,0,0,1,1],
			[1,0,0,1,0,1],
			[1,1,1,0,1,1],
			[0,0,1,1,1,1],
			[1,1,1,0,1,1],
		])
	
		/**
		 * Prepare the initial solution array, based on the initial array
		 */
		const prepareSolutionArray = useCallback(() => {
			soln.current = []
			for(let i =0; i< initialArray.length; i++) {
					soln.current.push([])
					for( let j = 0; j< initialArray[0].length; j++) {
						soln.current[i][j] = 0;
					}
			}
		}, [initialArray])

    const soln = useRef([])
    const [solnArray, setSolnArray] = useState([])
    const [render, setRender] = useState(0)
    const globalReached = useRef(0)
    
		/**
		 * Check if the solution is reached
		 * @returns Boolean
		 */
    function checkForGlobalReach () {
      return globalReached.current === 1
    }
    
		/**
		 * Call this function recursively for the finding the solution
		 */
    const checkForPathExists = useCallback((array, i, j) => {
			soln.current[i][j] = 1;
			if (i === array.length - 1 && j === array[0].length - 1) {
					// solution is reached
					globalReached.current = 1
					// setRender(1)
					return
			}
			if(i + 1 <= array.length - 1 && array[i+1][j] === 1 && soln.current[i+1][j] !== 1 && !checkForGlobalReach() ) {
					checkForPathExists(array, i+1, j)
			}
			if(j + 1 <= array[0].length - 1 && array[i][j+1] === 1 && soln.current[i][j+1] !== 1 && !checkForGlobalReach()) {
					checkForPathExists(array, i, j+1)
			}
			if(i - 1 >= 0 && array[i-1][j] === 1 && soln.current[i-1][j] !== 1 && !checkForGlobalReach()) {
					checkForPathExists(array, i-1, j)
			}
			if(j - 1 >= 0 && array[i][j-1] === 1 && soln.current[i][j-1] !== 1 && !checkForGlobalReach()) {
					checkForPathExists(array, i, j-1)
			}
			if (checkForGlobalReach()) {
					return
			};
			// if it reached here no more solution from this position
			// Here the solution array is set to zero since we cant traverse to anymore tile,
			// and let the code to continue from the previous function stack.
			soln.current[i][j] = 0;
    }, [])

		/**
		 * Change the initial array sample space, when clicking the tile in DOM.
		 * @param {*} iIndex 
		 * @param {*} jIndex 
		 */
		function changeStateValue(iIndex, jIndex) {
			let newState = [...Array(7)].map(e => Array(6));
			for(let i =0; i < initialArray.length; i++) {
				for( let j = 0; j< initialArray[i].length; j++) {
					if (i === iIndex && j === jIndex) {
						newState[i][j] = initialArray[i][j] === 1 ? 0 : 1
					} else {
						newState[i][j] = initialArray[i][j]
					}
				}
			}
			setInitialArray(newState)
		}

		const start = useCallback(() => {
			globalReached.current = 0;
			prepareSolutionArray()
      if (initialArray[0][0] === 1 && initialArray[initialArray.length - 1][initialArray[0].length - 1] === 1 ) {
        soln.current[0][0] = 1
        checkForPathExists(initialArray, 0, 0)
        if (globalReached.current === 1) {
					setSolnArray(soln.current)
					setRender(1)
        } else {
					setRender(2)
        }
      } else {
				setRender(2)
      }
    }, [initialArray, prepareSolutionArray, checkForPathExists, globalReached])

		useEffect(() => {
			start();
		}, [initialArray, start]);

    return (
			<div className="row">
				<h3>The Sample Space, click the tile to reverse</h3>
				{
					initialArray.map((item, iIndex) => (
						<div style={{display: 'flex'}}>
							{item.map((cell, jIndex) => (
								<div onClick={() => {changeStateValue(iIndex, jIndex)}} style={{backgroundColor: initialArray[iIndex][jIndex] ? 'green' : 'red', borderWidth: '1px', borderColor: 'yellow', borderStyle: 'solid', width: '24px', height: '24px'}}>
								</div>
							))}
						</div>
					))
				}

				<h3>The solution</h3>
				{render === 1 ? (
					solnArray.map((item, index) => (
						<div style={{display: 'flex'}}>
							{item.map((cell, jIndex) => (
								<div style={{backgroundColor: solnArray[index][jIndex] ? 'green' : 'red', borderWidth: '1px', borderColor: 'yellow', borderStyle: 'solid', width: '24px', height: '24px'}}>
								</div>
							))}
						</div>
					))
				) : <div> <h4>{render === 2 ? 'No solution' : 'Click the button for solution'}</h4></div> }
				<button onClick={() => start()}> Click here for starting</button>
			</div>
    );
}

export default Bootstrap;

