const getTerminaisonFromPronomsAndArray = (subject, terminaisons) => {
    let terminaison = null;
    switch (subject.type) {
        case 'sujets.nomCommuns':
        case 'sujets.nom':
            terminaison = terminaisons[1];
            break;
        case 'sujets.pronoms':
            switch (subject.value) {
                case 'je':
                case 'tu':
                    terminaison = terminaisons[0];
                    break;
                case 'il':
                case 'elle':
                case 'on':
                    terminaison = terminaisons[1];
                    break;
                case 'nous':
                    terminaison = terminaisons[2];
                    break;
                case 'vous':
                    terminaison = terminaisons[3];
                    break;
                case 'ils':
                case 'elles':
                    terminaison = terminaisons[4];
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return terminaison;
};

/**
 *
 * @param {object} subject
 * @param {object} verb
 */
const conjugator = (subject, verb) => {
    let terminaison = '';
    let baseVerb = '';
    if (
        verb.value.substr(verb.value.length - 6).toUpperCase() === 'AINDRE' ||
        verb.value.substr(verb.value.length - 6).toUpperCase() === 'EINDRE'
    ) {
        baseVerb = verb.value.substr(0, verb.value.length - 6);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ns',
            'nt',
            'gnons',
            'gnez',
            'gnent',
        ]);
    }
    if (verb.value.substr(verb.value.length - 6).toUpperCase() === 'OINDRE') {
        baseVerb = verb.value.substr(0, verb.value.length - 6);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ns',
            'nt',
            'gnons',
            'gnez',
            'gnent',
        ]);
    }
    if (verb.value.substr(verb.value.length - 5).toUpperCase() === 'OUDRE') {
        baseVerb = verb.value.substr(0, verb.value.length - 5);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ns',
            'nt',
            'gnons',
            'gnez',
            'gnent',
        ]);
    }
    if (verb.value.substr(verb.value.length - 4).toUpperCase() === 'OIRE') {
        baseVerb = verb.value.substr(0, verb.value.length - 4);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ois',
            'oit',
            'oyons',
            'oyez',
            'oient',
        ]);
    }
    if (verb.value.substr(verb.value.length - 3).toUpperCase() === 'OIR') {
        baseVerb = verb.value.substr(0, verb.value.length - 3);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ois',
            'oit',
            'oyons',
            'oyez',
            'oient',
        ]);
    }

    if (verb.value.substr(verb.value.length - 3).toUpperCase() === 'DRE') {
        baseVerb = verb.value.substr(0, verb.value.length - 3);
        // je morDS-  tu morDS - il/elle morD - nous morDONS - vous morDEZ - ils/elles morDENT
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ds',
            'd',
            'ons',
            'ez',
            'ent',
        ]);
    }

    if (verb.value.substr(verb.value.length - 3).toUpperCase() === 'TRE') {
        baseVerb = verb.value.substr(0, verb.value.length - 3);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ds',
            'd',
            'ons',
            'ez',
            'ent',
        ]);
    }
    if (verb.value.substr(verb.value.length - 2).toUpperCase() === 'IR') {
        baseVerb = verb.value.substr(0, verb.value.length - 2);
        terminaison = getTerminaisonFromPronomsAndArray(subject, [
            'ds',
            'd',
            'ons',
            'ez',
            'ent',
        ]);
    }

    return baseVerb + terminaison;
};
export default conjugator;
