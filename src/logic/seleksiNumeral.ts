import { pembagian, pengurangan, penjumlahan, perkalian } from "./aritmatika";

export const convertTxtTonumber = (t: string) => {
    const arrLvl1: (number | string)[] = [];
    const arrLvl2: (number | string)[] = [];

    const arrBeforeOperation: (number | string)[] = [];
    const result: (number | string)[] =
        t.match(/\d+|[+\-*/]/g)?.map((item) =>
            /^\d+$/.test(item) ? Number(item) : item
        ) || [];
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '*' || result[i] === '/') {
            arrLvl1.push(result[i - 1], result[i], result[i + 1]);
            for (let j = 0; j < arrLvl1.length; j++) {
                if (arrLvl1[j] === "*") {
                    const hasilPerkalian = perkalian(arrLvl1[j - 1] as number, arrLvl1[j + 1] as number);
                    arrBeforeOperation.push(hasilPerkalian);
                }
                if (arrLvl1[j] === "/") {
                    const hasilPembagian = pembagian(arrLvl1[j - 1] as number, arrLvl1[j + 1] as number);
                    arrBeforeOperation.push(hasilPembagian);
                }
            }
        } else if (result[i] === "+" || result[i] === "-") {
            arrLvl2.push(result[i - 1], result[i], result[i + 1]);
                // for (let m = 0; m < arrLvl2.length - 1; m++) {
                //     if (arrLvl2[m] === "+") {
                //         const hasilPenjumlahan = penjumlahan(arrLvl2[m - 1] as number, arrLvl2[m + 1] as number);
                //         arrBeforeOperation.push(hasilPenjumlahan);
                //     }
                //     if (arrLvl2[m] === "-") {
                //         const hasilPengurangan = pengurangan(arrLvl2[m - 1] as number, arrLvl2[m + 1] as number);
                //         arrBeforeOperation.push(hasilPengurangan);
                //     }
                // }
        }
    }
    return [arrBeforeOperation, arrLvl2];

}