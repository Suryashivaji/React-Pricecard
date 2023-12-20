import React from 'react'
import Card from './components/Card'

function App() {

  const data=[{

plan:"FREE",
price:"0",
user:"Single user",
isUser:true,
storage:"5GB Storage",
isStorage:true,
publicProjects:"Unlimited Public Projects",
isPublicProject:true,
access:"Community Access",
isAccess:true,
privateProjects:"Unlimited Private Projects",
isPrivateProject:false,
support:"Dedicated Phone Support",
isSupport:false,
subDomain:"Free Subdomain",
isSubDomain:false,
reports:" Monthly Status Reports",
isReports:false

  },
  {

  plan:"PLUS",
price:"9",
user:"5 users",
isUser:true,
storage:"50GB Storage",
isStorage:true,
publicProjects:"Unlimited Public Projects",
isPublicProject:true,
access:"Community Access",
isAccess:true,
privateProjects:"Unlimited Private Projects",
isPrivateProject:true,
support:"Dedicated Phone Support",
isSupport:true,
subDomain:"Free Subdomain",
isSubDomain:true,
reports:" Monthly Status Reports",
isReports:false

  },
  {

  plan:"PRO",
price:"49",
user:"Unlimited Users",
isUser:true,
storage:"150GB Storage",
isStorage:true,
publicProjects:"Unlimited Public Projects",
isPublicProject:true,
access:"Community Access",
isAccess:true,
privateProjects:"Unlimited Private Projects",
isPrivateProject:true,
support:"Dedicated Phone Support",
isSupport:true,
subDomain:" Free Subdomain",
isSubDomain:true,
reports:" Monthly Status Reports",
isReports:true

  },
]



  return<>
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
{

data.map((e,i)=>{

return<Card data={e} key={i}/>

})



}



      </div>
    </div>
  </section>
  


  
  </>
}
export default App
