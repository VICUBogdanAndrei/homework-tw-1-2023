const compress = (a, b = true) => {
    if (typeof a !== 'string') {
        throw new Error('InvalidType');
    }

    if (b) {
        // Compresie
        let result = '';
        let count = 1;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === a[i + 1]) {
                count++;
            } else {
                result += a[i] + String(count);
                count = 1;
            }
        }
        return result;
    } else {
        // Decompresie
        let result = '';
        let i = 0;
        while (i < a.length) {
            let char = a[i];
            i++;
            let numStr = '';
            while (i < a.length && !isNaN(a[i])) {
                numStr += a[i];
                i++;
            }
            let num = parseInt(numStr);
            result += char.repeat(num);
        }
        return result;
    }
};

module.exports = compress;