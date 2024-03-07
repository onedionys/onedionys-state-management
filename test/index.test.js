const assert = require('assert');
const StateManager = require('../src/stateManagement');

describe('StateManager', () => {
    it('should set initial state correctly', () => {
        const initialState = { count: 0 };
        const stateManager = new StateManager(initialState);
        assert.deepStrictEqual(stateManager.getState(), initialState);
    });

    it('should update state correctly', () => {
        const stateManager = new StateManager({ count: 0 });
        stateManager.setState({ count: 1 });
        assert.deepStrictEqual(stateManager.getState(), { count: 1 });
    });

    it('should notify listeners when state changes', (done) => {
        const stateManager = new StateManager({ count: 0 });
        stateManager.addListener((state) => {
            assert.strictEqual(state.count, 1);
            done();
        });
        stateManager.setState({ count: 1 });
    });

    it('should remove listener correctly', () => {
        const stateManager = new StateManager({ count: 0 });
        const listener = () => { /* do something */ };
        stateManager.addListener(listener);
        assert.strictEqual(stateManager.listeners.length, 1);
        stateManager.removeListener(listener);
        assert.strictEqual(stateManager.listeners.length, 0);
    });
});
