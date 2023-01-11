
import './App.css';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lfmm-product-card';


const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

function App() {
  return (
    <div className="App">
      <h1>Hola..!</h1>
      <ProductCard 
        product={ product }
        initialValues={{
            count: 6,
            maxCount: 15,
        }}
    >
        {
            ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />                   
                    <button style={{ width:'70px', height:'30px' }} onClick={ reset }>Reset</button>
                </>
            )
        }
    </ProductCard>
    </div>
  );
}

export default App;
