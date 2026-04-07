export function taskReducer(state,action){
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {id: Date.now(), text: action.payload, done: false}
            ];
        case "TOGGLE":
            return state.map(task=>task.id===action.id ? {...state, done:!task.done} : task);
        case "DELETE":
            return state.filter(task=>task.id!==action.id);
        default:
            return state
    } 

}