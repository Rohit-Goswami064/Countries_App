


export default function SerachBar({setQuery}) {
  
  return (
    <> 

      <i className="fa-solid fa-magnifying-glass"></i>
      <input
       onChange={(e)=>{
        setQuery(e.target.value.toLowerCase())
      }}
       type="text" placeholder="Search for a country..."/>

      
    </>
  )
}
