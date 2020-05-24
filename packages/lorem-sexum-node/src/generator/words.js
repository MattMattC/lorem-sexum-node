import structure from '../content/structure';
import { ListTool } from '../tools';

// 'Lorem sexum douleur bite amet'
/**
 *
 * @param {Number} nbWords
 * @param {string} beginSentence
 */
const generateFromNbWords = (
    nbWords,
    beginSentence = null,
    wordLists = null
) => {
    const words = [];
    let beginSentenceLenth = 0;
    if (beginSentence !== null && beginSentence.trim().length > 0) {
        words.push(beginSentence);
        beginSentenceLenth = beginSentence.trim().split(' ').length;
    }

    for (let i = 0; i < nbWords - beginSentenceLenth; i++) {
        words.push(
            ListTool.getRandomInList(
                wordLists ? wordLists : structure.randomList
            )
        );
    }
    return words.join(' ');
};

export { generateFromNbWords };

// TODO : prendre en compte les noms dans la liste qui sont séparé par un espace
// par exemple "membre viril" qui du coup compte pour 2 mots
