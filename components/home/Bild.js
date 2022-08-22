export default function Bild() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        className="image"
        overflow="hidden"
      ></img>
      <style jsx>{`
      
      .image{
          width: 100%;
          height: 300px;
          border: 3px solid black;
        }
        
      `}</style>
    </div>
  );
}
