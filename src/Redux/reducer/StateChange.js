const StateChange = (state = 2, { type, payload }) => {
    if (type === 'hello') {
        return state + payload
    }
    else return state
}

export default StateChange
