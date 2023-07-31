export default function sortNotes(
    array,
    search = "",
    completion = null,
    Alphabetical = null,
    sortBy = "null",
    work = true,
    todos = true,
    reminder = true,
    money = true
   
    
    )
    {


        let returnedArray = array

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
        
   

        if(search.length >= 1){
            returnedArray = returnedArray.filter(
                current=> current.title.toLowerCase().includes(search)
            )
            
 
        }
        if(work === false){
            returnedArray = returnedArray.filter(
                current=> current.category !== "Work"
            )

        }
        if(reminder === false){
            returnedArray = returnedArray.filter(
                current=> current.category !== "reminders"
            )

        }
        if(money === false){
            returnedArray = returnedArray.filter(
                current=> current.category !== "Money"
            )

        }
        if(todos === false){
            returnedArray = returnedArray.filter(
                current=> current.category !== "todos"
            )

        }


        if(completion === "true"){
            returnedArray =  returnedArray.filter(
             current => current.completion === true
            )
         }
         if(completion === "false"){
            returnedArray =  returnedArray.filter(
             current => current.completion === false
            )
         }
        if(Alphabetical === "true"){
           returnedArray =  returnedArray.sort((a, b) => (a.title > b.title) ? 1 : -1)
           
        }

        if(Alphabetical === "false"){
            returnedArray =  returnedArray.sort((a, b) => (a.title > b.title) ? 1 : -1).reverse()
            
         }

         if(sortBy === "closest"){
            sortTime()
            return Array
         }

         if(sortBy === "farthest"){
            sortTime()
            Array = Array.reverse()
            return Array
         }

        return returnedArray
    }