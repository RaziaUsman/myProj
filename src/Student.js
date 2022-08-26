function Student(pro)
{
    console.log(pro.name)
    return(
        <div style={{backgroundColor:"skyblue" ,margin:1}}>
            <h1>hello {pro.name}</h1>
            <h2>{pro.email}</h2>
            <h3>{pro.other.mobile}</h3>
        </div>
    )
}
export default Student;