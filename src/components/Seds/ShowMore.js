import React,{useState} from 'react'

const ShowMore = ({textAttr}) => {
  const [showMore, setShowMore] = useState(false);
  const text= textAttr  
  return (
    <div>
        {showMore ? text: `${text.substring(0,250)}`}
        <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}    
        </button>    
    </div>
  )
}

export default ShowMore