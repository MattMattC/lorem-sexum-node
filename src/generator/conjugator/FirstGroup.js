const conjugator = (subject, verb) => {
    let terminaison = '';
    const baseVerb = verb.value.substr(0, verb.value.length - 2);
    const decomposition = subject.type.split('.');
    switch (decomposition[decomposition.length - 1]) {
        case 'nomCommuns':
        case 'nom':
            terminaison = 'e';
            break;
        case 'pronoms':
            switch (subject.value) {
                case 'je':
                    terminaison = 'e';
                    break;
                case 'tu':
                    terminaison = 'es';
                    break;
                case 'il':
                case 'elle':
                case 'on':
                    terminaison = 'e';
                    break;
                case 'nous':
                    terminaison = 'ons';
                    break;
                case 'vous':
                    terminaison = 'ez';
                    break;
                case 'ils':
                case 'elles':
                    terminaison = 'ent';
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
