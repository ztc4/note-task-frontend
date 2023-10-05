class data{
    constructor(title,detail,date,time,completion,timezone = "eastern"){
        this.title = title;
        this.detail = detail;
         this.date = date;
         this.time = time;
         this.completion = completion;
         this.timezone = timezone
    }
}
const note1 = new data("first note","jijdeiowdjidn","2023-07-29","10:47", false)
const note2 = new data("second note","etworkError when attempting to fetch resource.n","2023-09-29","14:47", false)
const note3 = new data("ahird note","jijdeiowdjidn","2023-07-29","13:47", true)
const note4 = new data("fifth note","jeddddddddddddddddddidn","2023-07-29","13:45", true)
const note5 = new data("fifth note","jeddddddddddddddddddidn","2024-07-29","12:45", true)




class Notes{
    

    constructor(array){
        this.notes = [].concat(...array);
        

        this.sortedArrayByAlphabet = []
        this.sortedArrayByAlphabetReverse = []
        this.currentSearch = []
        this.completed = []
        this.unComplete = []
    }

    setSearchNote(search){
    
        this.currentSearch = this.notes.filter(
            current=> current.title.toLowerCase().includes(search.toLowerCase())
        )
        return this.currentSearch
    }
    setSortedArrayAlphabet(){

    }
    setSortedArrayAlphabetReverse(){

    }
    setNearestDueDate(){

    }
    setFarthestDueDate(){

    }
    setCompletedNotes(){
        this.completed = this.filter(
            current=> current.completion === true
        )
        return this.completed

    }
    setSort( array,
    search ="",
    completion = true,
    Alphabetical = null,
    reverseAlphabetical = null,
    sortbyClosest = true,
    sortByFarthest =null
    ){


        let returnedArray = [].concat(...array)
        let Array = []
        let rArray= {}

        function sortTime(){
            returnedArray =  returnedArray.sort((a, b) => (a.date> b.date) ? 1 : -1);
            for(let i = 0; i < returnedArray.length; i++){
                if(rArray.hasOwnProperty(returnedArray[i].date)){
                    rArray[returnedArray[i].date] = [...rArray[returnedArray[i].date],returnedArray[i]]
                }else{
                    rArray[returnedArray[i].date] = [returnedArray[i]]

                }
            }
            returnedArray = []
            for(let date  in rArray){
                rArray[date] = rArray[date].sort((a, b) => (a.time> b.time) ? 1 : -1);
                Array.push(...rArray[date])
                

            }
        }

        if(search.length > 0){
            returnedArray = returnedArray.filter(
                current=> current.title.toLowerCase().includes(search.toLowerCase())
            )
        }
        if(completion !== null){
            returnedArray =  returnedArray.filter(
             current => current.completion === completion
            )
         }
        if(Alphabetical === true){
           returnedArray =  returnedArray.sort((a, b) => (a.title > b.title) ? 1 : -1)
           
        }
        if(reverseAlphabetical === true){
            returnedArray =  returnedArray.sort((a, b) => (a.title > b.title) ? 1 : -1).reverse()
            
         }
         if(sortbyClosest  === true){
            sortTime()
         }
         if(sortByFarthest  === true){
            sortTime()
            Array = Array.reverse()
         }
        return Array
    }

}
const notes = new Notes([note1,note2,note3,note4,note5])
console.log(notes.setSort())
