export default function Pic() {
  return (
    <div>
      <style jsx>{`
      
      .image{

          background-size: cover;
          background-repeat: no repeat;
          flex-grow: 1;
          width: 100%;
          height: 100vh;
          object-fit: cover;
      } 
        
      `}</style>
      <img
        src="https://idp.dhbw-loerrach.de/images/background-dhbw.jpg"
        className="image"
        overflow="hidden"
      ></img>
    </div>
  );
}
