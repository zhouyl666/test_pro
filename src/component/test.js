// 填写JavaScript
const _permute = string => {
    const run = (string, msg) => {
        if (string.length === 1) {
            return [string]
        };

        let result = []; // 存放每次生成的排列串
        for (let i = 0; i < string.length; i++) {
            var t = string[i]
            string.splice(i, 1)
            run(string, msg + t)
            // 删除的元素还原  不然会影响
            string.splice(i, 0, 1)

        }
    }
    run(string.split(''), '')

}

