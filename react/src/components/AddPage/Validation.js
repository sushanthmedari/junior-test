const Validation =(values,selectedOption,boolean)=>{
    
    let errors={}
    if(selectedOption==='furniture'){
    if(!values.sku){
        errors.sku="Sku is required"
    }else if(boolean){
        errors.sku="Choose a unique SKU name"
    }
    else if(!(/^[A-Z0-9]/.test(values.sku))){
        errors.sku="Please provide the SKU of indicated type!"
    }

    if(!values.name){
        errors.name="Name is required"
    }else if(!(/^[A-Za-z]/.test(values.name))){
        errors.name="Please provide the name of indicated type!"
    }
    if(!values.price){
        errors.price="Price is required"
    }else if(!(/^[0-9]/.test(values.price))){
        errors.price="Please provide the price of indicated type!"
    }
   
    if(!values.height){
        errors.height="Height is required"
    }else if(!(/^[0-9]/.test(values.height))){
        errors.height="Please provide the height of indicated type!"
    }
    if(!values.width){
        errors.width="Width is required"
    }else if(!(/^[0-9]/.test(values.width))){
        errors.width="Please provide the width of indicated type!"
    }
    if(!values.lenght){
        errors.lenght="Length is required"
    }else if(!(/^[0-9]/.test(values.lenght))){
        errors.lenght="Please provide the length of indicated type!"
    }
   
    return errors;
}else if(selectedOption==='book'){
     if(!values.sku){
        errors.sku="Sku is required"
    }else if(boolean){
        errors.sku="Choose a unique SKU name"
    }
    if(!(/^[A-Z0-9]/.test(values.sku))){
        errors.sku="Please provide the SKU of indicated type!"
    }

    if(!values.name){
        errors.name="Name is required"
    }else if(!(/^[A-Za-z]/.test(values.name))){
        errors.name="Please provide the name of indicated type!"
    }
    if(!values.price){
        errors.price="Price is required"
    }else if(!(/^[0-9]/.test(values.price))){
        errors.price="Please provide the price of indicated type!"
    }
    
    if(!values.weight){
        errors.weight="Weight is required"
    }else if(!(/^[0-9]/.test(values.price))){
        errors.price="Please provide the weight of indicated type!"
    }
    return errors
}else{
     if(!values.sku){
        errors.sku="Sku is required"
    }else if(boolean){
        errors.sku="Choose a unique SKU name"
    }else if(!(/^[A-Z0-9]/.test(values.sku))){
        errors.sku="Please provide the SKU of indicated type!"
    }

    if(!values.name){
        errors.name="Name is required"
    }else if(!(/^[A-Za-z]/.test(values.name))){
        errors.name="Please provide the name of indicated type!"
    }
    if(!values.price){
        errors.price="Price is required"
    }else if(!(/^[0-9]/.test(values.price))){
        errors.price="Please provide the price of indicated type!"
    }
    if(!values.size){
        errors.size="Size is required"
    }else if(!(/^[0-9]/.test(values.size))){
        errors.size="Please provide the size of indicated type!"
    }
    return errors
}
}
export default Validation;