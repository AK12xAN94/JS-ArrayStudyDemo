/* 扩展操作符示例代码 */

// 拷贝数组对象
// const years= [2021, 2022]
// const newYears = [...years]
// console.log(newYears)

// const calendar = [2021, [1,2,3,4,5], 8]
// const copyCalendar = [...calendar]
// console.log(copyCalendar)//[ 2021, [ 1, 2, 3, 4, 5 ], 8 ]
// copyCalendar[1][0] = 6
// // copyCalendar[1].push(8)
// // copyCalendar[2] = 9
// console.log(copyCalendar)//[ 2021, [ 6, 2, 3, 4, 5, 8 ], 9 ]
// console.log(calendar)//[ 2021, [ 6, 2, 3, 4, 5, 8 ], 8 ]

const date = {
    year: 2022,
    month: 3,
    day: {
        value: 27
    }
}
const copyDate = {...date}
console.log(copyDate)//{ year: 2022, month: 3, day: { value: 27 } }
copyDate.day.value = 28
copyDate.year = 2023
console.log(copyDate)//{ year: 2023, month: 3, day: { value: 28 } }
console.log(date)//{ year: 2022, month: 3, day: { value: 28 } }