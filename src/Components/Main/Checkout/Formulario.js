import React from "react";

const formStyle={
    display:"flex",
    width:"500px",
    height:"300px",
    marginBottom: "10px",
    border:"1px solid #80808045",
    borderRadius: "15px",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",

}

function Formulario({emailOk}){
    const [datos, setDatos] = useState({
        nombre:"",
        apellido:"",
        email:"",
        confirmar_email:"",
        telefono:""
    });

    function handleChange(event){
        const {id,value} = event.target;
        setDatos(prevValue => ({...prevValue,[id]:value}));
}

useEffect(()=>{
    if(datos.email !== "" && datos.confirmar_email !== ""){     
        if(datos.email === datos.confirmar_email){
            emailOk(false);
        }else{
            emailOk(true);
        }
    }          
},[datos.email,datos.confirmar_email])

    return(
                <form style={formStyle} >
                        <input onChange={handleChange} value={datos.nombre} type="text" placeholder="Nombre" style={inputStyle} id="nombre"/>
                        <input onChange={handleChange} value={datos.apellido} type="text" placeholder="Apellido" style={inputStyle} id="apellido"/>
                        <input onChange={handleChange} value={datos.email} type="text" placeholder="email@example.com" style={inputStyle} id="email"/>
                        <input onChange={handleChange} value={datos.confirmar_email} type="text" placeholder="email@example.com" style={inputStyle} id="confirmar_email"/>
                        <input onChange={handleChange} value={datos.telefono} type="text" placeholder="Telefono" style={inputStyle} id="telefono"/>
                </form>
    );
}

export default Formulario;