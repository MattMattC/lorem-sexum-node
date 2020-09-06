import structure from '../content/structure';
import { ListTool, CombinationSum } from '../tools';

// 'Lorem sexum douleur bite amet'
/**
 *
 * @param {Number} nbWords
 * @param {string} beginSentence
 */
const generateFromNbWords = (
    nbWords,
    beginSentence = null,
    ipsumMode = false,
    wordLists = null
) => {
    let words = [];
    nbWords = ~~nbWords;
    let beginSentenceList = []
    if (beginSentence !== null && beginSentence.trim().length > 0) {
        beginSentenceList = beginSentence.trim().split(' ');
        nbWords -= beginSentenceList.length;
        words = [...beginSentenceList];
    }

    /**
     * Get True of False
     * @example https://stackoverflow.com/questions/36756331/js-generate-random-boolean#answers-header
     * @param {int} percentage of luck to have a true (max is 100)
     */
    const randomBoolean = (percentage = 50) => {
        if (percentage > 100) {
            percentage = 100;
        }
        return Math.random() >= (100 - percentage) / 100;
    };

    // add punctuation
    const result = CombinationSum([5, 7, 8, 9, 10], nbWords + beginSentenceList.length);
    // TODO : ici le but est de choisir le resultat qui a le plus de
    // valeurs différentes genre (7 7 8 9) au lieu de 7 7 7 7
    // pour ensuite le mélanger pour avoir les phrases.

    // let counterDiff = 0;
    // result.map(table => {
    //     const
    //     table.map(value => {

    //     })
    // })
    for (let i = 0; i < nbWords; i++) {
        words.push(
            ListTool.getRandomInList(
                wordLists
                    ? wordLists
                    : ipsumMode
                    ? structure.randomListum
                    : structure.randomList
            )
        );
    }

    // Add punctuation ?
    let counterStart = 0;
    let counterEnd = 0;
    
    for (let i = 0; i < result[0].length; i++) {
        counterStart += i === 0 ? 0 : result[0][i - 1];
        counterEnd += result[0][i];

        words[counterEnd - 1] = words[counterEnd - 1] + '.';
        if (randomBoolean(60)) {
            const randomComa = Math.floor((counterEnd - counterStart) / 2);

            if (counterStart + randomComa < counterEnd) {
                words[counterStart + randomComa] =
                    words[counterStart + randomComa] + ',';
            }
        }
        if (words[counterEnd] !== undefined) {
            let tmp = words[counterEnd];
            words[counterEnd] = tmp.charAt(0).toUpperCase() + tmp.slice(1);
        }
    }

    let finalSentence = words.join(' ');

    finalSentence =
        finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1);

    return finalSentence;
};

export { generateFromNbWords };

// TODO : prendre en compte les noms dans la liste qui sont séparé par un espace
// par exemple "membre viril" qui du coup compte pour 2 mots
