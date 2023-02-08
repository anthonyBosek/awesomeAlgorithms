// ** Assign Person to Occupation **
// 
// You have two arrays. One shows the names of the people names , while the other shows
// their occupation jobs . Your task is to create an object displaying each person to 
// their respective occupation.
// 
// assignPersonToJob(arr, arr) ➞ obj
// 
// ------------------------------------------------------------------------------------------------

const assignPersonToJob = (nam, job) => {
    let obj = {}
    for(let i = 0; i < nam.length; i++){
        obj[nam[i]] = job[i]
    } //
    return obj
} //

// sample arrays
const names = ["Bosek", "Dennis", "Vera", "Mabel", "Annette", "Sussan", "Anthony"]
const jobs = ["Developer", "Butcher", "Programmer", "Doctor", "Teacher", "Lecturer", "Awesome"]

console.log(assignPersonToJob(names, jobs)) 
// ➞ {
//     Dennis: "Butcher",
//     Vera: "Programmer",
//     Mabel: "Doctor",
//     Annette: "Teacher",
//     Sussan: "Lecturer"
// }