
export default class GenericFunctions{
    
    static timeFormat(time:number):string{
        return time<10?"0"+time:time.toString()
    }
}