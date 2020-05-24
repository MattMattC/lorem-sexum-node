import FirstGroup from './FirstGroup';
import SecondGroup from './SecondGroup';
import ThirdGroup from './ThirdGroup';

/**
 * Dispatch the verb to appropriate group with subject to
 * identify the terminaison
 *
 * @param {Object} subject
 * @param {Object} verb
 */
const conjugator = (subject, verb) => {
    if (verb.degre) {
        switch (verb.degre) {
            case 1:
                return FirstGroup(subject, verb);
            case 2:
                return SecondGroup(subject, verb);
            case 3:
                return ThirdGroup(subject, verb);
            default:
                throw new Error('degre is required of 1, 2 or 3');
        }
    }
    throw new Error('degre is required');
};

export default conjugator;
