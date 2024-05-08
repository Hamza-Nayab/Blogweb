export const errhandler = (statuscode, message)=>{
    const err = new Error();
    err.message = message;
    err.statuscode = statuscode;

    return err;
}