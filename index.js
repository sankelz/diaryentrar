class Diary{
  constructor(date, entry){
    this.date = date
    this.entry = entry 
  }
}

date = window.prompt("today is: ")
entry = window.prompt("and i feel like: ")

dintry = new Diary(date, entry)
fulldiary = []
x = window.prompt(dintry)
console.log(x)
fulldiary.push(x)
console.log(fulldiary)
