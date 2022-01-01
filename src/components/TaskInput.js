import React, { useState } from 'react'
// #9 Import setDoc and doc instead of addDoc and collection
import { addDoc, collection, setDoc, doc} from 'firebase/firestore'

import db from '../utils/firebase'
// #9 import filteredTasks and userID
function TaskInput({tasks, setTasks, userId, filteredTasks}) {

    const createId = (array) => {
        // Store the new array into ids
        const ids = array.map((item)=>item.id)
        return Math.max(...ids) + 1
    }
    
    // Save what I wrote in the input field into a state?
    const [input, setInput] = useState('')
    // when i type, a function should run that saves the states of the input
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    //#2b Add an async and await because whenever you are making an api call you want to uses promises
    const handleForm = async (e) => {
        e.preventDefault()
        // ADD what I put in input to the tasks array

        // ONLY CREATE OBJECT IF THERE IS AN INPUT?
        // Create an object with whatever I wrote in input as the text:

        if(input) {
            // const newTask = {
            //     id: createId(tasks),
            //     text: input.trim(),
            //     status: false
            // }
            // // ADD a new task to the tasks state (add a new task to the data array)
            // // How do we update the tasks state?

            // // tasks -> [{id:},{text:},{}]
            // // tasks -> newTask

            // setTasks([newTask,...tasks])

            // // Reset Input
            // // WHat state do I want to reset?
            // console.log(input)
            // setInput('')


            // #2b Add a new task document with firebase!
        //     const collectionRef = collection(db, "tasks")
        //     const payload = {
        //         text: input.trim(),
        //         status: false
        //     }


        //    await addDoc(collectionRef, payload)
        //    setInput('')


           //#9 Instead of ADDING a new document we just need to update the user document tasks array we have to pass down filteredTasks and userID
           //#10 Create a new task object and add that to the current array
            const docRef = doc(db,"users", userId)

            const newTask = {
                text: input.trim(),
                status: false
            }
            
            let tasksRef = filteredTasks
            tasksRef.push(newTask)
            // WHAT DO WE WANT THE DOCUMENT TO LOOK LIKE
            const payload = {
                tasks: tasksRef
            }

          //#11 use setDoc to update the user document's task array
            setDoc(docRef,payload)
            setInput("")

        }

    }

    return (
        <div className='new-todo'>
            <div className='check'>
                <div className='check-mark'></div>
            </div>
            <div className='new-todo-input'>
                <form onSubmit={handleForm} >
                    <input value ={input} onChange={handleChange} type="text" placeholder="Create a new todo..."></input>
                </form>
            </div>
        </div>
    )
}

export default TaskInput
