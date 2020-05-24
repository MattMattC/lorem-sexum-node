/**
 * Class to help manipulating list
 */
class ListTool {
    /**
     * @param {any[]} list
     */
    static getRandomInList(list) {
        return list[Math.floor(Math.random() * Math.floor(list.length))];
    };
}

export default ListTool;
