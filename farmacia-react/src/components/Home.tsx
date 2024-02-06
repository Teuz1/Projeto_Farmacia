// src/components/Home.tsx

import pharmacy from "../assets/Pharmacy.svg"

function Home(){
 
  return (
    <> 
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">Bem-vindo à Farmácia</h1>
    </div>
    <div className="flex justify-center ">
              <img src={pharmacy} alt="" className='size-5' />
    </div>
  </>
  );
};

export default Home;
