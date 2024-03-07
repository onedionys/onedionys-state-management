class StateManager {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyListeners();
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    removeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => {
            listener(this.state);
        });
    }
}

module.exports = StateManager;
