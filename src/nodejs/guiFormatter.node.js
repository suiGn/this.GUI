// In guiFormatter.node.js
export default class GUIFormatterNode {
    constructor(guiInput) {
        this.guiInput = guiInput;
    }

    async process() {
        // Node.js-specific GUI processing logic
        console.log('Processing GUI in Node.js environment...');
        return { /* processed GUI data */ };
    }
}
