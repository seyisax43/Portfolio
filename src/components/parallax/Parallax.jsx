import './parallax.scss'

function Parallax({type}) {
  return (
      <div className='parallax'
          style={{
              background: type === "services" ?
                  "linear-gradient(180deg, #111132, #0c0c1d)"
                :  "linear-gradient(180deg, #111132, #505064)"
                }}>
          <h1>{ type==="services" ? "Our Services" : "Projects"}</h1>
          <div className="mountain" type></div>
           {/* <div className="stars"></div> */}
   
      </div>
  )
}

export default Parallax