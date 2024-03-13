// this.GUI.js
import { createGUIFormatter } from './createGUIFormatter.js';

async function thisGUI(guiInput) {
    let { formatter, error } = await createGUIFormatter(guiInput);

    if (error) {
        return { success: false, error };
    }

    try {
        const processedGUI = await formatter.process();
        return { success: true, data: processedGUI };
    } catch (processingError) {
        return { success: false, error: processingError.message };
    }
}

export default thisGUI;
