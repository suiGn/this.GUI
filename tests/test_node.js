// In test_thisGUI_node.js
import thisGUI from '../index.js';

// Mock input for testing - you would replace this with actual GUI input data or structure
const guiInput = {
    type: 'mock', // Indicate this is mock data
    content: 'This is a mock GUI input for Node.js test.'
};

thisGUI(guiInput).then(processedGUI => {
    console.log('Processed GUI in Node.js:', processedGUI);
}).catch(error => {
    console.error('Error processing GUI in Node.js:', error);
});
