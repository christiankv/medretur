export default function Type(prop){
    return(
        <>
        <h3>{prop.titles[0]}</h3>
        <div className="retur-type">
            <div id={prop.types[0]} 
                className="box" 
                onClick={() =>prop.setform(prev => ({
                    ...prev,
                    type: prop.types[0]
                }))}>
                <p>{prop.types[0]}</p>
            </div>
            <div id={prop.types[1]} 
                className="box" 
                onClick={() => prop.setform(prev => ({
                    ...prev,
                    type: prop.types[1]
                }))}>
                <p>{prop.types[1]}</p>
            </div>
            <div id={prop.types[2]} 
                className="box" 
                onClick={() =>prop.setform(prev => ({
                    ...prev,
                    type: prop.types[2]
                }))}>
                <p>{prop.types[2]}</p>
            </div>
        </div>
        </>
    )
}