export default async function copyToClipBoard(text:string){
    try{
        await navigator.clipboard.writeText(text)
        return "success"
    }catch(err){
        return "error"
    }
}