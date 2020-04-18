class StringTool {
    /**
     *
     * @param {string} word
     */
    static beginByVowel(word) {
        var regex = new RegExp('^[aeiouyéè]');
        return regex.test(word.toLowerCase());
    }
}

export default StringTool;
