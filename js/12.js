let date = new Date(24*3600*1000)
console.log( date.getTime() )   // 2026-10-23T02:31:12:293Z

let today1 = "2026-10-23"   // 문자 --> 날짜
let date1 = new Date( today1 )
console.log( date1 )

// 월은 0부터 11까지 (0은 1월, 1은 2월...)
// 한국 시간(KST)은 UTC보다 9시간 빠르기 때문에 다음과 같이 변환됨
let date2 = new Date( 2026, 11, 25 )
console.log(date2.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul"
}))

let timeStamp = date2.getTime()
console.log( timeStamp )

let date3 = new Date( timeStamp )
console.log( date3 )

