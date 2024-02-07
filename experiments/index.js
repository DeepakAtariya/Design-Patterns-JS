
const f1 = async ()=>{
    return 'f1'
}

const f2 = async ()=>{
    return 'f2'
}

const f3 = async ()=>{
    return 'f3'
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First p1");
    }, 1000);
})

setTimeout(async ()=>{
    // await f3()
    // await f1()
    // await f2()

    const ar = await Promise.all([f1(), f2(), f3()])
    // const result = await ar

    // let r = 1;
    // const results = await ar.then((res)=>{
    //     console.log(r)
    //     r++
    //     return res
    // })
    console.log(ar)
}, 1000)

