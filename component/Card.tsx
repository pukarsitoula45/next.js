type props = {
    title: string;
    description: string;
   
}
export default function Card({ title, description }: props){
    return(
        <div className ="bg-white shadow-md rounded-lg p-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{description}</p>
          
            
        </div>
    );
} 