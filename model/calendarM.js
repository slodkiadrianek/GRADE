'use strict'

module.exports = class MonthCalc{
    constructor(){
        this.actualMonth
        this.daysInMonth
        this.longMonths = [0,2,4,6,7,9,11]
        this.actualDate
    }
    getActualDate(){
     this.actualDate  = new Date()
    this.actualMonth = this.actualDate.getMonth()
    this.actualYear = this.actualDate.getFullYear()
    
    this.longMonths.includes(this.actualMonth) ? this.daysInMonth = 32 : this.daysInMonth = 31
    }
    previousMonth(){
        console.log(this.actualMonth);
        
        
        if(this.actualMonth === 0 && this.actualYear > '2024'){
            this.actualYear -= 1
            this.actualMonth = 11
        }else if(this.actualMonth === 0 && +this.actualYear === +'2024'){
            console.log('s');
            
            this.actualMonth = 0
        }
        else{
            console.log('d');
            
            this.actualMonth -= 1
            this.longMonths.includes(this.actualMonth) ? this.daysInMonth = 32 : this.daysInMonth = 31
        }
        // if(this.actualMonth > 0 ){
        //     this.actualMonth -= 1
        //     this.longMonths.includes(this.actualMonth) ? this.daysInMonth = 32 : this.daysInMonth = 31
        // }
    }
    nextMonth(){
        if(this.actualMonth < 11){
            this.actualMonth += 1
            this.longMonths.includes(this.actualMonth) ? this.daysInMonth = 32 : this.daysInMonth = 31
        }else{
            this.actualMonth = 0
            this.actualYear +=1
        }
    }
     whichMonth(){
        this.allMonth = new Map()
        this.allMonth.set(0, 'Styczeń')
        this.allMonth.set(1, 'luty')
        this.allMonth.set(2, 'Marzec')
        this.allMonth.set(3, 'Kwiecień')
        this.allMonth.set(4, 'Maj')
        this.allMonth.set(5, 'Czerwiec')
        this.allMonth.set(6, 'Lipiec')
        this.allMonth.set(7, 'Sierpień')
        this.allMonth.set(8, 'Wrzesień')
        this.allMonth.set(9, 'Październik')
        this.allMonth.set(10, 'Listopad')
        this.allMonth.set(11, 'Grudzień')
        return this.allMonth.get(this.actualMonth)
    }

}

