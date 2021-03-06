
import {FC,useState,useEffect} from "react";
import axios from "axios";




type Issue = {
    number:number
    title:string
    state:string
}



type Props = {
    propX:string
    propY:number
    propZ:boolean
}


const Issues : FC <Props> = () => {

    const [issues, setIssues] = useState<Issue[]>([])


  useEffect(() => {
  axios
    .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
    .then((response: any) => {
      // Here we update directly our issue state
      setIssues(response.data)
    })
}, [])



return (
    <>
      <h1>ContentPI Issues</h1>
  
      {issues.map((issue: Issue) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong> {' '}
          <a href=
            {`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} 
              target="_blank">{issue.title}</a> {' '}
          {issue.state}
        </p>
      ))}
    </>
  )


}



export default Issues
