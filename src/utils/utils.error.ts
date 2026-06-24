class appError extends Error{
    
    constructor(public code:number, message:string){
        super(message)
        this.code = code
        this.message = message
    }

}

export default appError