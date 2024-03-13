// In createGUIFormatter.js
import GUIFormatterNode from './nodejs/guiFormatter.node.js';
import GUIFormatterBrowser from './browser/guiFormatter.browser.js';

function isNode() {
    return typeof window === 'undefined';
}

function isBrowser() {
    return typeof window !== 'undefined';
}

export async function createGUIFormatter(guiInput) {
    if (isNode()) {
        return { formatter: new GUIFormatterNode(guiInput), error: null };
    } else if (isBrowser()) {
        return { formatter: new GUIFormatterBrowser(guiInput), error: null };
    } else {
        return { formatter: null, error: 'Unsupported environment' };
    }
}
