import Panelf from './panelf';
export default function Plants({v}){
    var pls =<Panelf/>;
 
    let i =0;
for(i=1;i<v;i++){
   
pls=<><>{pls}</><Panelf/></>;
}
return <>{pls}</>;
}