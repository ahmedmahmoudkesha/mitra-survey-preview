
export class ArrayHelper {
    static shuffle(array) {
        let currentIndex = array.length,
            tmp,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }
        return array;
    }
}
