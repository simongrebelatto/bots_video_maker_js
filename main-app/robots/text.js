const algorithmia = require('algorithmia');
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey;
async function robot(content) {
    await fetchContentFromWikipedia(content);
    // sanitizeContent(content);
    // breakContentIntoSentences(content);

    async function fetchContentFromWikipedia() {
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey);
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2');
        const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm);
        const wikipediaContent = wikipediaResponde.get();
        
        content.sourceContentOriginal = wikipediaContent.content;
    }
}

module.exports = robot;