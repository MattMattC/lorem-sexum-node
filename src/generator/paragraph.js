import structure from '../content/structure';
import conjugator from './conjugator';
import { ListTool, StringTool, CombinationSum } from '../tools';

const sizeParagraph = {
    small: 30,
    medium: 50,
    large: 70,
};

/**
 * @param {array} list
 * @param {number} forcedGender
 */
const getNextElementSentenceFromList = (list, forcedGender) => {
    const item = ListTool.getRandomInList(list);
    if (forcedGender !== undefined && item.gender !== undefined) {
        if (item.gender !== forcedGender && forcedGender !== 2) {
            return getNextElementSentenceFromList(list, forcedGender);
        }
    }
    return item;
};

/**
 * @param {number} paragraphNumber
 * @return {number[]}
 */
const generateByParagraphNumber = (paragraphNumber) => {
    const paragraphs = [];
    for (let i = 0; i < paragraphNumber; i++) {
        const sentences = getSentencesFromNbWords(sizeParagraph.small);

        let stringFinal = '';
        sentences.forEach((sentence) => {
            stringFinal += ' ' + buildSentenceString(buildFromOrder(sentence));
        });
        paragraphs.push(stringFinal);
    }
    return paragraphs;
};

/**
 *
 * @param {number} nbWords
 */
const getSentencesFromNbWords = (nbWords) => {
    const mapSentences = [];
    let candidates = structure.order.map((o) => o.length);
    candidates = [...new Set(candidates)];

    const result = CombinationSum(candidates, nbWords);
    const randomOrderSentences =
        result[Math.floor(Math.random() * Math.floor(result.length))];

    const newOrder = randomOrderSentences.sort(() => Math.random() - 0.5);

    newOrder.forEach((size) => {
        mapSentences.push(
            getNextElementSentenceFromList(
                structure.order.filter((o) => o.length === size)
            )
        );
    });
    return mapSentences;
};


/**
 *
 * @param {array} order
 */
const buildFromOrder = (order) => {
    const sentence = [];

    order.forEach((item) => {
        const lastItemPushed = sentence[sentence.length - 1];
        const decomposition = item.split('.');
        if (decomposition.length > 0) {
            const list = getStructureList(structure, decomposition);
            let itemSentence = getNextElementSentenceFromList(
                list,
                lastItemPushed ? lastItemPushed.gender : undefined
            );
            if (typeof itemSentence !== 'object') {
                itemSentence = { value: itemSentence };
            }
            itemSentence.type = item;
            sentence.push(itemSentence);
        }
    });

    return sentence;
};

/**
 * return the list from properties
 *
 * @param {Object} structure dictionnary of the word with specificities
 * @param {array} properties path to get list
 * @return {null}
 */
const getStructureList = (structure, properties) => {
    if (properties.length > 1) {
        const property = properties.shift();
        if (property in structure) {
            return getStructureList(structure[property], properties);
        }
    } else if (properties.length === 1) {
        const property = properties.shift();
        return structure[property];
    }
    return null;
};

/**
 * Build the sentence depending on the difference type of words
 * @param {array} line array of composition of the sentence with options
 */
const buildSentenceString = (line) => {
    const sentence = line.map((item, index) => {
        switch (item.type) {
            case 'verbes':
                const verbeValue = conjugator(line[index - 1], item);
                return verbeValue;
            case 'sujets.nomCorps':
            case 'sujets.nomCommuns':
                if (line[index - 1]) {
                    if (line[index - 1].type === 'adjectifs.possessif') {
                        return item.value;
                    }
                }
                let adjPossessif = '';

                switch (item.gender) {
                    case 0:
                        adjPossessif = StringTool.beginByVowel(item.value)
                            ? "l'"
                            : 'la';
                        break;
                    case 1:
                        adjPossessif = StringTool.beginByVowel(item.value)
                            ? "l'"
                            : 'le';
                        break;
                    case 2:
                        adjPossessif = 'les';
                        break;
                    default:
                        break;
                }

                return adjPossessif + ' ' + item.value;
            case 'prepositions.appartenance':
                if (line[index + 1]) {
                    return StringTool.beginByVowel(line[index + 1].value)
                        ? "d'"
                        : item.value;
                }
                break;
            default:
                return item.value;
        }
    });

    let finalSentence = sentence.join(' ');
    finalSentence =
        finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1) + '.';
    return finalSentence;
};

export { generateByParagraphNumber};
