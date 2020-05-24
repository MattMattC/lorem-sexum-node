const conjugator = (subject, verb) => {
    let terminaison = '';
    const baseVerb = verb.value.substr(0, verb.value.length - 2);
    const decomposition = subject.type.split('.');

    switch (decomposition[decomposition.length - 1]) {
        case 'nomCommuns':
        case 'nom':
            terminaison = 'it';
            break;
        case 'pronoms':
            switch (subject.value) {
                case 'je':
                    terminaison = 'is';
                    break;
                case 'tu':
                    terminaison = 'is';
                    break;
                case 'il':
                case 'elle':
                case 'on':
                    terminaison = 'it';
                    break;
                case 'nous':
                    terminaison = 'issons';
                    break;
                case 'vous':
                    terminaison = 'issez';
                    break;
                case 'ils':
                case 'elles':
                    terminaison = 'issent';
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return baseVerb + terminaison;
};
export default conjugator;
